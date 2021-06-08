import React,{createContext,useState}from 'react'
import Controller from './Controllers/PredioProviderController'
import {useHistory} from 'react-router-dom'

export const PredioProvider = createContext()
export default function PredioContext({children}) 
{
    const redirect = useHistory()
    //States
    const [predios, setpredios] = useState([])


    const add = (e,setloading,setSavedModal) => Controller.add(e,setloading,setSavedModal,redirect)
    const read = () => Controller.select(setpredios)
    const remove = (id) => Controller.delete(id)
    return (
        <PredioProvider.Provider value={{add,read,predios,remove}}>
            {children}
        </PredioProvider.Provider>
    )
}
