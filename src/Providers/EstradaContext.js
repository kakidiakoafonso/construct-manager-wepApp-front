import React,{createContext,useState}from 'react'
import Controller from './Controllers/EstradaController'
import {useHistory} from 'react-router-dom'

export const EstradaProvider = createContext()
export default function EstradaContext({children}) 
{
    const redirect = useHistory()
    //States
    const [estradas, setestradas] = useState([])


    const add = (e,setloading,setSavedModal) => Controller.add(e,setloading,setSavedModal,redirect)
    const update = (e,setloading,sucess,nav) => Controller.update(e,setloading,sucess,nav)
    const read = () => Controller.select(setestradas)
    const remove = (id) => Controller.delete(id)
    return (
        <EstradaProvider.Provider value={{add,read,estradas,remove,update}}>
            {children}
        </EstradaProvider.Provider>
    )
}
