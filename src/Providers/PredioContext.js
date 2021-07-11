import React,{createContext,useState,useEffect}from 'react'
import Controller from './Controllers/PredioProviderController'


export const PredioProvider = createContext()
export default function PredioContext({children}) 
{
    
    const [predios, setpredios] = useState([])
    const [infoProjetoLongo, setinfoProjetoLongo] = useState([])

    const add = (e,setloading,setSavedModal) => Controller.add(e,setloading,setSavedModal)
    const update = (e,setloading,setSavedModal,sucess,navega) => Controller.update(e,setloading,setSavedModal,navega,sucess)
    const read = () => Controller.select(setpredios)
    const remove = (id) => Controller.delete(id)
    const getProjetoLongo = (municipio) => Controller.projetoLongo(municipio,setinfoProjetoLongo)
    const getProjeto = () => Controller.projetoLongo("Candombe",setinfoProjetoLongo)

    useEffect(() => {
        getProjeto()
    }, [])
    return (
        <PredioProvider.Provider value={{add,read,predios,remove,update,infoProjetoLongo,getProjetoLongo}}>
            {children}
        </PredioProvider.Provider>
    )
}
