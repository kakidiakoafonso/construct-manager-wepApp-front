import axios from 'axios'

const baseApi = axios.create({baseURL:"http://localhost:3000/predio/"})
const PredioDao = 
{
    update: async (dados,setloading,setSavedModal,redirect,sucess)=> 
    {
        baseApi.put('/update',
        {
            "id": dados.id,
            "nome":dados.nome, 
            "descricao" : dados.descricao, 
            "orcamento" : dados.orcamento, 
            "codigoIdentificacao": dados.codigoIdentificacao, 
            "dataInicio" : dados.dataInicio,
            "duracao" : dados.duracao,
            "percentualConformidade" : dados.percentualConformidade,
            "tipo" : dados.tipo,
            "alturaMaxima" : dados.alturaMaxima,
            "provincia" : dados.provincia,
            "municipio" : dados.municipio,
            "rua" : dados.rua,
            "numero" : dados.numero,
            "clienteNome" : dados.clienteNome,
            "clienteSexo" : dados.clienteSexo,
            "clientePrivado" : dados.clientePrivado,
            "clienteProvincia" : dados.clienteProvincia,
            "clienteMunicipio" : dados.clienteMunicipio,
            "clienteRua" : dados.clienteRua,
            "clienteNumero" : dados.clienteRua,
            "arquitetoNome" : dados.arquitetoNome,
            "arquitetoSexo" : dados.arquitetoSexo,
            "arquitetoAnoExperiencia" : dados.arquitetoAnoExperiencia
        }
        ).then(
            response => {
                {
                    
                    console.log(response)
                     console.log(dados)
                    setTimeout(()=>{
                        sucess()
                         setloading(false)
                        //  setSavedModal(true)
                     },2000)
                    setTimeout(()=>{
                        redirect()
                        //  setSavedModal(true)
                     },3500)
                 }
            }
         ).catch(
             error => console.log(error)
         )
        
    },
    add: async (dados,setloading,setSavedModal)=> 
    {
        baseApi.post('/add',
        {
            "nome":dados.nome, 
            "descricao" : dados.descricao, 
            "orcamento" : dados.orcamento, 
            "codigoIdentificacao": dados.codigoIdentificacao, 
            "dataInicio" : dados.dataInicio,
            "duracao" : dados.duracao,
            "percentualConformidade" : dados.percentualConformidade,
            "tipo" : dados.tipo,
            "alturaMaxima" : dados.alturaMaxima,
            "provincia" : dados.provincia,
            "municipio" : dados.municipio,
            "rua" : dados.rua,
            "numero" : dados.numero,
            "clienteNome" : dados.clienteNome,
            "clienteSexo" : dados.clienteSexo,
            "clientePrivado" : dados.clientePrivado,
            "clienteProvincia" : dados.clienteProvincia,
            "clienteMunicipio" : dados.clienteMunicipio,
            "clienteRua" : dados.clienteRua,
            "clienteNumero" : dados.clienteRua,
            "arquitetoNome" : dados.arquitetoNome,
            "arquitetoSexo" : dados.arquitetoSexo,
            "arquitetoAnoExperiencia" : dados.arquitetoAnoExperiencia
        }
        ).then(
            response => {
                {
                    console.log(response)
                     console.log(dados)
                    setTimeout(()=>{
                         setloading(false)
                         setSavedModal(true)
                     },3000)
                 }
            }
         ).catch(
             error => console.log(error)
         )
        
    },
    select: async (set)=> 
    {
        
        baseApi.get('/listar').then(
            response => {
                set(response.data)
            }
        ).catch(
            error => console.log(error)
        )
    },
    delete: async (identificador) =>
    {
        baseApi.post('/delete',{"id":identificador}).then(respose=> 
            {
                console.log(respose)
            }).catch(
                erro => console.log(erro)
            )
    },
    projetoLongo: async (municipio,set) =>
    {
        console.log(municipio);
        baseApi.post('/listar/clientelongo',{"municipio":municipio}).then(response=> 
            {
                console.log(response.data[0])
                set(response.data[0])
            }).catch(
                erro => console.log(erro)
            )
    }
}
export default PredioDao