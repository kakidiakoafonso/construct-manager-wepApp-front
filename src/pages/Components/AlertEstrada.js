import React from 'react'
import {useHistory} from 'react-router-dom'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,Button
  } from "@chakra-ui/react"

export default function AlertComponent({show}) 
{
  const redirect = useHistory()
    return (
        <AlertDialog
        isOpen={show}
        onClose={()=>console.log("AA")}
        >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Projeto adicionado
            </AlertDialogHeader>

            <AlertDialogBody height="100px">
              O seu mais novo projeto foi registrado com sucesso!
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button onClick={()=> redirect.push('estradas')}>
                OK
              </Button>
             
            </AlertDialogFooter>

          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    )
}
