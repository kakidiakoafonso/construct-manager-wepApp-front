import React,{useState,useContext} from 'react'
import { EstradaProvider } from '../Providers/EstradaContext'
import { Flex, Box ,Button,FormControl,FormLabel,useToast,Input,Select} from "@chakra-ui/react"
import AlertComponent from './Components/AlertEstrada'
import { useHistory } from 'react-router'

export default function UpdateEstradas({location}) 
{
    const params = location.state.dados
    const toast = useToast()
    const {update} = useContext(EstradaProvider)
    console.log(params);
    const redirect = useHistory()
    const nav = () => redirect.push('estradas')
    const sucess = () =>{
        toast({
            title: "Sucesso.",
            description: "Dados atualizados.",
            status: "success",
            duration: 9000,
            isClosable: true,
          })
    }
    const erroMsg = () =>{
        toast({
            title: "Erro na atualização dos dados!",
            description: "Dados não atualizados.",
            status: "error",
            duration: 9000,
            isClosable: true,
          })
    }

    const Atualizar = () =>
    {
        const dados =         {
            id : id,
            nome:nome, 
            descricao : descricao, 
            orcamento : orcamento, 
            codigoIdentificacao: codId, 
            dataInicio : dataInicio,
            duracao : duracao,
            percentualConformidade : percentual,
            tipo: tipo,
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
            arquitetoAnoExperiencia : arquitetoExperiencia,
            dentro: dentro,
            comprimento:comprimento, 
            
        }
        update(dados,setloading,sucess,nav,erroMsg)
        setloading(true)
    }

    const [id, setid] = useState(params.idEstrada)
    const [nome, setnome] = useState(params.nome)
    const [descricao, setdescricao] = useState(params.descricao)
    const [orcamento, setorcamento] = useState(params.orcamento)
    const [codId, setcodId] = useState(params.codigoIdentificacao)
    const [dataInicio, setdataInicio] = useState(params.dataInicio)
    const [duracao, setduracao] = useState(params.duracao)
    const [percentual, setpercentual] = useState(params.percentualConformidade)
    const [tipo, settipo] = useState(params.ferroviasEstradas)
    const [comprimento, setcomprimento] = useState(params.comprimento)
    const [numero, setnumero] = useState(params.numero)
    const [clienteNome, setclienteNome] = useState(params.clienteNome)
    const [clienteSexo, setclienteSexo] = useState(params.clienteSexo)
    const [tipoCliente, settipoCliente] = useState(params.clientePrivado)
    const [clienteProvincia, setclienteProvincia] = useState(params.clienteProvincia)
    const [clienteMunicipio, setclienteMunicipio] = useState(params.clienteMunicipio)
    const [clienteRua, setclienteRua] = useState(params.clienteRua)
    const [clienteNumero, setclienteNumero] = useState(params.clienteNumero)
    const [arquitetoNome, setarquitetoNome] = useState(params.arquitetoNome)
    const [arquitetoSexo, setarquitetoSexo] = useState(params.arquitetoSexo)
    const [arquitetoExperiencia, setarquitetoExperiencia] = useState("")
    const [dentro, setdentro] = useState(params.dentroProvincia)

    const [loading, setloading] = useState(false)
    const [SavedModal, setSavedModal] = useState(false)


    return (
        <Flex height="80vh" justifyContent="center" alignItems="center" flexDirection="column">
            <Box>
                <h1>Estradas</h1>
            </Box>
           <Flex width="90%" justifyContent="center">
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
                <FormLabel>Comprimento</FormLabel>
                <Input  required type="text" value={comprimento} onChange={ e=> setcomprimento(e.target.value)}/>
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
                    <option value="Estrada">Estrada</option>
                    <option value="Ferrovias">Ferrovias</option>
                </Select>
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
            <FormControl id="email" marginTop="29px">
            <Select placeholder="Projeto provincial" value={dentro} onChange={ e=> setdentro(e.target.value)}>
                    <option value="1">Sim</option>
                    <option value="0">Não</option>
                </Select>
            </FormControl>
            
           </Box>
           
                <AlertComponent show={SavedModal}/>
            </Flex>
            <Box width="30%">
               
           <Button onClick={()=> Atualizar()} 
                    isLoading={loading}
                    loadingText="Atualizando os dados"
                    colorScheme="blue" _hover={{backgroundColor:'green'}}
                    width="100%">
                   Atualizar
                </Button>
           </Box>
        </Flex>
    )
}