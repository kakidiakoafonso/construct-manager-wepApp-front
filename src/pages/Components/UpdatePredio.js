import React from 'react'
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

export default function UpdatePredio({show,set}) {
    return (
        <Modal isOpen={show} onClose={()=>console.log("Closed")} >
                    <ModalContent>
                    <ModalHeader>Atualizar dados do projeto</ModalHeader>
                    <ModalCloseButton onClick={()=> set(false)}/>

                    <ModalBody>
                        
                    </ModalBody>

                    <ModalFooter>
                        
                    </ModalFooter>
                    </ModalContent>
            </Modal>
    )
}
