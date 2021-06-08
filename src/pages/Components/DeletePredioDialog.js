import React from 'react'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,Button
  } from "@chakra-ui/react"

export default function DeletePredioDialog({show,set,apagar}) 
{

    return (
        <AlertDialog
        isOpen={show}
        onClose={()=>console.log("A")}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Apagar projeto
            </AlertDialogHeader>

            <AlertDialogBody>
              Tens a certeza? Não podera ser desfeito essa ação.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button onClick={()=> set(false)}>
                Cancelar
              </Button>
              <Button colorScheme="red" ml={3} onClick={()=> {
                  apagar()
                  set(false)
              }}>
                Apagar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    )
}
