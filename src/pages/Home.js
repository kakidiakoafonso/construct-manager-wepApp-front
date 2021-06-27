import React,{useContext} from 'react';
import { Flex, Table,Td,Thead,Th,Tfoot,TableCaption,Tr,Tbody,Input} from "@chakra-ui/react"
import LoginBanner from '../img/loginBanner.jpg'
import './css/Home.css'
import {PredioProvider} from '../Providers/PredioContext'

function Home() 
{
  const {infoProjetoLongo,getProjetoLongo} = useContext(PredioProvider)
  return (
    <Flex justifyContent="center" backgroundImage={LoginBanner} backgroundSize="cover" height="100vh">
        <div className="HomeContainer">
          
            <div className="homeCard">
              <div className="card">
                <h1 className="titulo">Projetos longo</h1>
                  <h1 className="card-info">
                    Dados do cliente do projeto de
                    construção mais longo que é desenvolvido em um determinado município.
                  </h1>
              </div>
              <div className="card">
                <h1 className="titulo">Distância média</h1>
                  <h1 className="card-info">
                  Distância média das ferrovias que começaram a 
                  construídas nos últimos 12 meses.
                  </h1>
              </div>
            </div>
            
            <Input placeholder="Entre com o nome do município" backgroundColor="#fff" 
              marginBottom="5" height="20"
              onChange={e=> getProjetoLongo(e.target.value)}
              />
            <Table variant="simple" backgroundColor="#fff">
              
                <TableCaption>Imperial to metric conversion factors</TableCaption>
                <Thead>
                  <Tr>
                    <Th>Nome</Th>
                    <Th>Sexo</Th>
                    <Th>Tipo cliente</Th>
                    <Th>Província</Th>
                    <Th>Município</Th>
                    <Th>Rua</Th>
                    <Th>Número</Th>
                    <Th>Duração (Meses)</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>{infoProjetoLongo.clienteNome}</Td>
                    <Td>{infoProjetoLongo.clienteSexo}</Td>
                    <Td>{infoProjetoLongo.clientePrivado ? "Privado":"Pessoal"}</Td>
                    <Td>{infoProjetoLongo.clienteProvincia}</Td>
                    <Td>{infoProjetoLongo.clienteMunicipio}</Td>
                    <Td>{infoProjetoLongo.clienteRua}</Td>
                    <Td>{infoProjetoLongo.clienteNumero}</Td>
                    <Td>{infoProjetoLongo.projetoMaximo}</Td>
                  </Tr>
                  
                </Tbody>
                
              </Table>
        </div>
    </Flex>
  );
}

export default Home;
