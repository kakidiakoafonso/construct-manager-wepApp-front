import axios from 'axios'

const baseApi = axios.create({baseURL:"http://localhost:3000/estrada/"})
const PredioDao = 
{
    update: async (dados,setloading,sucess,nav,erroMsg)=> 
    {
        console.log(dados)
        baseApi.post('/update',
        {
            "id": dados.id,
            "nome":dados.nome, 
            "descricao" : dados.descricao, 
            "orcamento" : dados.orcamento, 
            "codigoIdentificacao": dados.codigoIdentificacao, 
            "dataInicio" : dados.dataInicio,
            "duracao" : dados.duracao,
            "percentualConformidade" : dados.percentualConformidade,
            "comprimento" : dados.comprimento, 
            "ferroviaEstrada" : dados.tipo,
            "dentroProvincia" : dados.dentro,
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
                         sucess()
                         nav()
                     },3000)
                 }
            }
         ).catch(
             error => {
                 console.log(error)
                 setTimeout(()=>{
                    setloading(false)
                    erroMsg()
                    nav()
                },3000)
                }
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
            "comprimento" : dados.comprimento, 
            "ferroviaEstrada" : dados.tipo,
            "dentroProvincia" : dados.dentro,
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
    updatePercentual: async (id,codigoIdentificacao,percentualConformidade) =>
    {
        baseApi.post('/updatepercentual',{
            "id":id,
            "codigoIdentificacao":codigoIdentificacao,
            "percentualConformidade":percentualConformidade
        }).then(respose=> 
            {
                console.log(respose)
            }).catch(
                erro => console.log(erro)
            )
    },
    media: async (data,set) =>
    {
        baseApi.post('/listar/media',{
            "dataInicio":data
        }).then(respose=> 
            {
                console.log(respose)
                set(respose)
            }).catch(
                erro => console.log(erro)
            )
    }
}
export default PredioDao