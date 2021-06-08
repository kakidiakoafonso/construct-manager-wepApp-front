import React,{useState,useContext,useEffect} from 'react'
import { PredioProvider } from '../Providers/PredioContext'
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

export default function Predios() 
{
    const {predios, read} = useContext(PredioProvider)
    useEffect(() => {
        read()
    })
    const [updateModalShow, setupdateModalShow] = useState(false)
    const editClicked = (item) =>
    {
        setupdateModalShow(true)
    }

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
                            <Th>Altura</Th>
                            <Th>Província</Th>
                            <Th>Munícipio</Th>
                            <Th>Rua</Th>
                            <Th>Número</Th>
                            <Th>Opções</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        
                        {
                            predios.map((dados,key)=>(
                                <Tr key={key}>
                                    <Td>{dados.nome}</Td>
                                    <Td>{dados.descricao}</Td>
                                    <Td>{dados.orcamento}</Td>
                                    <Td>{dados.codigoIdentificacao}</Td>
                                    <Td>{dados.dataInicio}</Td>
                                    <Td>{dados.duracao}</Td>
                                    <Td>{dados.percentualConformidade}</Td>
                                    <Td>{dados.tipo}</Td>
                                    <Td>{dados.alturaMaxima}</Td>
                                    <Td>{dados.provincia}</Td>
                                    <Td>{dados.municipio}</Td>
                                    <Td>{dados.rua}</Td>
                                    <Td>{dados.numero}</Td>
                                    <Td>
                                        <div>
                                            <Button onClick={()=> editClicked()} colorScheme="orange" marginBottom="5">
                                                <AiFillEdit/>
                                            </Button>
                                            <Button colorScheme="red">
                                                <RiDeleteBin6Line/>
                                            </Button>
                                        </div>
                                    </Td>
                                </Tr>
                            ))
                        }
                        
                    </Tbody>
                    
                    </Table>
                    
                    
            <Modal isOpen={updateModalShow} onClose={()=>console.log("Closed")} >
                    <ModalContent>
                    <ModalHeader>Atualizar dados do projeto</ModalHeader>
                    <ModalCloseButton onClick={()=> setupdateModalShow(false)}/>

                    <ModalBody>
                        
                    </ModalBody>

                    <ModalFooter>
                        
                    </ModalFooter>
                    </ModalContent>
            </Modal>
        </Flex>
    )
}
