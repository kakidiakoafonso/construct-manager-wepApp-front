import React,{createContext,useState,useEffect}from 'react'
import Controller from './Controllers/EstradaController'
import {useHistory} from 'react-router-dom'

export const EstradaProvider = createContext()
export default function EstradaContext({children}) 
{
    const redirect = useHistory()
    //States
    const [estradas, setestradas] = useState([])
    const [media, setmedia] = useState("")


    const add = (e,setloading,setSavedModal) => Controller.add(e,setloading,setSavedModal,redirect)
    const update = (e,setloading,sucess,nav,erroMsg) => Controller.update(e,setloading,sucess,nav,erroMsg)
    const updatePercentual = (id,codigoIdentificacao,percentualConformidade) => Controller.updatePercentual(id,codigoIdentificacao,percentualConformidade)
    const read = () => Controller.select(setestradas)
    const remove = (id) => Controller.delete(id)
    const getMedia = (data) => Controller.media(data,setmedia)
    useEffect(() => {
        getMedia()
    }, [])
    return (
        <EstradaProvider.Provider value={{add,read,estradas,remove,update,updatePercentual,media}}>
            {children}
        </EstradaProvider.Provider>
    )
}
