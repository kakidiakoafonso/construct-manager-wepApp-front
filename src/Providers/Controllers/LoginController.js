import axios from 'axios'
import { useToast, toast } from "@chakra-ui/react"

const baseApi = axios.create({baseURL:"http://localhost:3000/"})
const PredioDao = 
{
    login: async (usuario,senha,redirect,setloading,sucess,error)=> 
    {
        console.log("user "+ usuario);
        console.log("Senha " + senha);
        baseApi.post('/login',
        {
                "user":usuario,
                "pass":senha
        }
        ).then(
            response => {
                {
                    if(response.data.length == 1)
                    {
                        console.log(response)
                        setTimeout(()=>{
                            sucess()
                            setloading(false)
                        },2000)
                        setTimeout(()=>{
                            redirect.push("home")
                        },4000)
                    }
                    else{
                        setloading(false)
                        error()
                    }
                    
                 }
            }
         ).catch(
             error => console.log(error)
         )
        
    },
}
export default PredioDao