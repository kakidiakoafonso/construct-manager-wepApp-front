import React,{useState,useContext} from 'react'
import { PredioProvider } from '../Providers/PredioContext'
import { Flex, Box ,Button,FormControl,FormLabel,Input,Select,useToast} from "@chakra-ui/react"
import AlertComponent from './Components/AlertComponent'
import {useHistory} from 'react-router-dom'

export default function AddPredios({location}) 
{
    const redirect = useHistory()
    const navega = () => redirect.push('predios')
    const params = location.state.dados
    const toast = useToast()
    console.log(params)
    const {update} = useContext(PredioProvider)
    
    const sucess = () =>{
        toast({
            title: "Sucesso.",
            description: "Dados atualizados.",
            status: "success",
            duration: 9000,
            isClosable: true,
          })
    }

    const Update = () =>
    {
        const dados =         {
            id: id,
            nome:nome, 
            descricao : descricao, 
            orcamento : orcamento, 
            codigoIdentificacao: codId, 
            dataInicio : dataInicio,
            duracao : duracao,
            percentualConformidade : percentual,
            tipo: tipo,
            alturaMaxima : alturaMaxima,
            provincia : provincia,
            municipio : municipio,
            rua : rua,
            numero : numero,
            clienteNome : clienteNome,
            clienteSexo : clienteSexo,
            clientePrivado : tipoCliente,
            clienteProvincia : clienteProvincia,
            clienteMunicipio : clienteMunicipio,
            clienteRua : clienteRua,
            clienteNumero : clienteNumero,
            arquitetoNome : arquitetoNome,
            arquitetoSexo : arquitetoSexo,
            arquitetoAnoExperiencia : arquitetoExperiencia
        }
        update(dados,setloading, setSavedModal,sucess,navega)
        setloading(true)
    }
    const [id, setid] = useState(params.idPredio)
    const [nome, setnome] = useState(params.nome)
    const [descricao, setdescricao] = useState(params.descricao)
    const [orcamento, setorcamento] = useState(params.orcamento)
    const [codId, setcodId] = useState(params.codigoIdentificacao)
    const [dataInicio, setdataInicio] = useState(params.dataInicio)
    const [duracao, setduracao] = useState(params.duracao)
    const [percentual, setpercentual] = useState(params.percentualConformidade)
    const [tipo, settipo] = useState(params.tipo)
    const [alturaMaxima, setalturaMaxima] = useState(params.alturaMaxima)
    const [provincia, setprovincia] = useState(params.provincia)
    const [municipio, setmunicipio] = useState(params.municipio)
    const [rua, setrua] = useState(params.rua)
    const [numero, setnumero] = useState(params.numero)
    const [clienteNome, setclienteNome] = useState(params.clienteNome)
    const [clienteSexo, setclienteSexo] = useState(params.clienteSexo)
    const [tipoCliente, settipoCliente] = useState(params.clientePrivado)
    const [clienteProvincia, setclienteProvincia] = useState(params.clientePrivado)
    const [clienteMunicipio, setclienteMunicipio] = useState(params.clienteMunicipio)
    const [clienteRua, setclienteRua] = useState(params.clienteRua)
    const [clienteNumero, setclienteNumero] = useState(params.clienteNumero)
    const [arquitetoNome, setarquitetoNome] = useState(params.arquitetoNome)
    const [arquitetoSexo, setarquitetoSexo] = useState(params.arquitetoSexo)
    const [arquitetoExperiencia, setarquitetoExperiencia] = useState(params.arquitetoAnoExperiencia)

    const [loading, setloading] = useState(false)
    const [SavedModal, setSavedModal] = useState(false)


    return (
        <Flex height="80vh" justifyContent="center" alignItems="center">
           
           <Box width="20%" marginRight="10px">
            <FormControl id="email">
                <FormLabel>Nome</FormLabel>
                <Input required type="text" value={nome} onChange={ e=> setnome(e.target.value)} />
            </FormControl>
            <FormControl id="email">
                <FormLabel>Data de início</FormLabel>
                <Input  required  type="date" value={dataInicio} onChange={ e=> setdataInicio(e.target.value)}/>
            </FormControl>
            <FormControl id="email">
                <FormLabel>Altura máxima</FormLabel>
                <Input  required type="text" value={alturaMaxima} onChange={ e=> setalturaMaxima(e.target.value)}/>
            </FormControl>
            <FormControl id="email">
                <FormLabel>Número</FormLabel>
                <Input  required type="text" value={numero} onChange={ e=> setnumero(e.target.value)}/>
            </FormControl>
            <FormControl id="email">
                <FormLabel>Província do cliente</FormLabel>
                <Input type="text" value={clienteProvincia} onChange={ e=> setclienteProvincia(e.target.value)} />
            </FormControl>
            <FormControl id="email">
                <FormLabel>Nome do arquiteto</FormLabel>
                <Input type="text" value={arquitetoNome} onChange={ e=> setarquitetoNome(e.target.value)}/>
            </FormControl>
           </Box>
           <Box width="20%" marginRight="10px">
            <FormControl id="email">
                <FormLabel>Descrição</FormLabel>
                <Input type="text" value={descricao} onChange={ e=> setdescricao(e.target.value)}/>
            </FormControl>
            <FormControl id="email">
                <FormLabel>Duração</FormLabel>
                <Input required type="number" value={duracao} onChange={ e=> setduracao(e.target.value)}/>
            </FormControl>
            <FormControl id="email">
                <FormLabel>Província</FormLabel>
                <Input type="text" value={provincia} onChange={ e=> setprovincia(e.target.value)}/>
            </FormControl>
            <FormControl id="email">
                <FormLabel>Nome do cliente</FormLabel>
                <Input type="text" value={clienteNome} onChange={ e=> setclienteNome(e.target.value)}/>
            </FormControl>
            <FormControl id="email">
                <FormLabel>Município do cliente</FormLabel>
                <Input type="text" value={clienteMunicipio} onChange={ e=> setclienteMunicipio(e.target.value)}/>
            </FormControl>
            <FormControl id="email" marginTop="25px">
                <Select placeholder="Genero do arquiteto" value={arquitetoSexo} onChange={ e=> setarquitetoSexo(e.target.value)}>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                </Select>
            </FormControl>
           </Box>
           <Box width="20%" marginRight="10px">
            <FormControl id="email">
                <FormLabel>Orçamento</FormLabel>
                <Input type="number" value={orcamento} onChange={ e=> setorcamento(e.target.value)}/>
            </FormControl>
            <FormControl id="email">
                <FormLabel>Percentual conformidade</FormLabel>
                <Input type="text" value={percentual} onChange={ e=> setpercentual(e.target.value)}/>
            </FormControl>
            <FormControl id="email">
                <FormLabel>Município</FormLabel>
                <Input type="text" value={municipio} onChange={ e=> setmunicipio(e.target.value)}/>
            </FormControl>
            <FormControl id="email" marginTop="25px">
                <Select placeholder="Genero do cliente" value={clienteSexo} onChange={ e=> setclienteSexo(e.target.value)}>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                </Select>
            </FormControl>
            <FormControl id="email">
                <FormLabel>Rua do cliente</FormLabel>
                <Input type="text" value={clienteRua} onChange={ e=> setclienteRua(e.target.value)}/>
            </FormControl>
            <FormControl id="email">
                <FormLabel>Anos de experienca arquiteto</FormLabel>
                <Input type="number" value={arquitetoExperiencia} onChange={ e=> setarquitetoExperiencia(e.target.value)}/>
            </FormControl>
           </Box>
           <Box width="20%" marginRight="10px">
            <FormControl id="email">
                <FormLabel>Código de identificação</FormLabel>
                <Input type="text" value={codId} onChange={ e=> setcodId(e.target.value)}/>
            </FormControl>
            <FormControl id="email" marginTop="25px">
                <Select placeholder="Tipo" value={tipo} onChange={ e=> settipo(e.target.value)}>
                    <option value="Industrias">Industrias</option>
                    <option value="Escritorios">Escritorios</option>
                </Select>
            </FormControl>
            <FormControl id="email">
                <FormLabel>Rua</FormLabel>
                <Input type="text" value={rua} onChange={ e=> setrua(e.target.value)}/>
            </FormControl>
            <FormControl id="email" marginTop="25px">
                <Select placeholder="Tipo de cliente" value={tipoCliente} onChange={ e=> settipoCliente(e.target.value)}>
                    <option value="Público">Público</option>
                    <option value="Privado">Privado</option>
                </Select>
            </FormControl>
            <FormControl id="email">
                <FormLabel>Número da casa do cliente</FormLabel>
                <Input type="number" value={clienteNumero} onChange={ e=> setclienteNumero(e.target.value)}/>
            </FormControl>
            <FormControl id="email" marginTop="25px">
                <Button onClick={()=> Update()} 
                    isLoading={loading}
                    loadingText="Enviando os dados"
                    colorScheme="blue" _hover={{backgroundColor:'green'}}
                    width="100%">
                   Atualizar
                </Button>
            </FormControl>
           </Box>
        
        
            
                <AlertComponent show={SavedModal}/>
            
        </Flex>
    )
}

