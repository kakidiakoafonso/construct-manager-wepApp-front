import React,{createContext,useState}from 'react'
import Controller from './Controllers/PredioProviderController'


export const PredioProvider = createContext()
export default function PredioContext({children}) 
{
    
    const [predios, setpredios] = useState([])
    

    const add = (e,setloading,setSavedModal) => Controller.add(e,setloading,setSavedModal)
    const update = (e,setloading,setSavedModal,sucess,navega) => Controller.update(e,setloading,setSavedModal,navega,sucess)
    const read = () => Controller.select(setpredios)
    const remove = (id) => Controller.delete(id)
    return (
        <PredioProvider.Provider value={{add,read,predios,remove,update}}>
            {children}
        </PredioProvider.Provider>
    )
}
