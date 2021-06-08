import React from 'react'
import {useHistory} from 'react-router-dom'
import { Flex,Box,Input,Button } from "@chakra-ui/react"
import LoginBanner from '../img/loginBanner.jpg'

export default function Login() 
{
    const redirect = useHistory()
    return (
        <Flex  backgroundImage={LoginBanner}
            backgroundRepeat="no-repeat" backgroundSize="cover" justifyContent="center" alignItems="center"  height="100vh">
            <Box  backgroundColor="#fff" width="40%" height="400px">
                <Flex height="55%">
                    
                </Flex>
                <Flex height="25%" alignItems="center"
                    flexDirection="column" justifyContent="space-between">
                    <Input backgroundColor="#fff" width="80%" placeholder="Nome de usuario"/>
                    <Input backgroundColor="#fff" width="80%" placeholder="Senha" />
                </Flex>
                <Flex alignItems="center" justifyContent="center" height="20%" >
                    <Button onClick={()=> redirect.push('home')} 
                        size="lg" width="40%" colorScheme="blue">
                        Logar
                    </Button>
                </Flex>
            </Box>
        </Flex>
    )
}
