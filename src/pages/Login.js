import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import { Flex,Box,Input,Button,useToast } from "@chakra-ui/react"
import LoginBanner from '../img/loginBanner.jpg'
import Controller from '../Providers/Controllers/LoginController'

export default function Login() 
{
    const [loading, setloading] = useState(false)
    const [user, setuser] = useState("")
    const [pass, setpass] = useState("")
    const toast = useToast()
    const sucess = () => 
    {
        toast({
            title: "Logado com sucesso.",
            description: "Seja bem vindo.",
            status: "success",
            duration: 9000,
            isClosable: true,
          })
    }
    const error = () => 
    {
        toast({
            title: "Erro no login.",
            description: "Usuario ou senha incorreta.",
            status: "error",
            duration: 9000,
            isClosable: true,
          })
    }
    const logar = () => 
    {
        const usuario = user 
        const senha = pass 
        setloading(true)
        Controller.login(usuario,senha,redirect,setloading,sucess,error)
    }
    const redirect = useHistory()
    return (
        <Flex  backgroundImage={LoginBanner}
            backgroundRepeat="no-repeat" backgroundSize="cover" justifyContent="center" alignItems="center"  height="100vh">
            <Box  backgroundColor="#fff" width="40%" height="400px">
                <Flex height="55%">
                    
                </Flex>
                <Flex height="25%" alignItems="center"
                    flexDirection="column" justifyContent="space-between">
                    <Input backgroundColor="#fff" width="80%" placeholder="Nome de usuario"
                    value={user} onChange={e=> setuser(e.target.value)}/>
                    <Input backgroundColor="#fff" width="80%" placeholder="Senha" 
                    value={pass} onChange={e=> setpass(e.target.value)}/>
                </Flex>
                <Flex alignItems="center" justifyContent="center" height="20%">
                    <Button
                    isLoading = {loading}
                    loadingText= "Processando" 
                    onClick={()=> logar()} 
                        size="lg" width="40%" colorScheme="blue">
                        Logar
                    </Button>
                </Flex>
            </Box>
        </Flex>
    )
}
