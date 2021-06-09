import React,{useState,useContext,useEffect} from 'react'
import { EstradaProvider } from '../Providers/EstradaContext'
import { AiFillEdit } from 'react-icons/ai';
import { RiDeleteBin6Line } from 'react-icons/ri';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Flex, Table,Thead,Tbody,Th,Td,Tr, Button
  } from "@chakra-ui/react"
import DeletePredioDialog from './Components/DeletePredioDialog';
import DeleteEstradaDialog from './Components/DeleteEstradaDialog';
import UpdatePredio from './Components/UpdatePredio';

export default function Estradas() 
{
    const {estradas,read,remove} = useContext(EstradaProvider)
    useEffect(() => { read() })
    const [updateModalShow, setupdateModalShow] = useState(false)
    const [deleteModal, setdeleteModal] = useState(false)
    const [idDelete, setidDelete] = useState("")
    const [userInfo, setuserInfo] = useState("")
    const editClicked = (item) =>
    {
        setupdateModalShow(true)
        setuserInfo(item)
        console.log(userInfo)
    }
    const mostrar = (id,item) =>{
        setidDelete(id)
        setdeleteModal(true)
    }
    const apagar = () => remove(idDelete)

    return (
        <Flex>            
                    <Table variant="striped"  width="80%" overflow="hidden">

                    <Thead>
                        <Tr>
                            <Th>Nome</Th>
                            <Th>Descrição</Th>
                            <Th>Orçamento</Th>
                            <Th>Cod.ID</Th>
                            <Th>Data de início</Th>
                            <Th>Duração (meses)</Th>
                            <Th>Percentual</Th>
                            <Th>Tipo</Th>
                            <Th>Comprimento</Th>
                            <Th>Dentro da Província</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        
                        {
                            estradas.map((dados,key)=>(
                                <Tr key={key}>
                                    <Td>{dados.nome}</Td>
                                    <Td>{dados.descricao}</Td>
                                    <Td>{dados.orcamento}</Td>
                                    <Td>{dados.codigoIdentificacao}</Td>
                                    <Td>{dados.dataInicio}</Td>
                                    <Td>{dados.duracao}</Td>
                                    <Td>{dados.percentualConformidade}</Td>
                                    <Td>{dados.ferroviasEstradas}</Td>
                                    <Td>{dados.comprimento}</Td>
                                    <Td>{dados.dentroProvincia == 1? "Sim":"Não"}</Td>
                                    <Td>
                                        <div>
                                            <Button onClick={()=> editClicked(dados)} colorScheme="orange" marginBottom="5">
                                                <AiFillEdit/>
                                            </Button>
                                            <Button colorScheme="red" onClick={()=> mostrar(dados.idEstrada,dados)}>
                                                <RiDeleteBin6Line/>
                                            </Button>
                                        </div>
                                    </Td>
                                </Tr>
                            ))
                        }
                        
                    </Tbody>
                    
                    </Table>
                    
            <DeleteEstradaDialog show={deleteModal} set={setdeleteModal} apagar={apagar}/>   

            <UpdatePredio show={updateModalShow} set={setupdateModalShow} dados={userInfo}/>
        </Flex>
    )
}
