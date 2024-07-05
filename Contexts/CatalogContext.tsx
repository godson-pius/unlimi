import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useRef, useState } from "react";
import { IData } from '../interface/IData';
import { handleGetCatalog } from "@/contollers";
import { toast } from "react-toastify";

interface CatalogContextProps {
    catalog: IData[];
    search: string;
    patientSearch: string;
    setCatalog: Dispatch<SetStateAction<IData[]>>;
    setSearch: Dispatch<SetStateAction<string>>;
    setPatientSearch: Dispatch<SetStateAction<string>>;
    getCatalog: () => any
}

export const CatalogContext = createContext<CatalogContextProps | undefined>(undefined)

interface CatalogProviderProps {
    children: ReactNode
}

export const CatalogProvider = ({ children }: CatalogProviderProps) => {
    const [search, setSearch] = useState("FragranceX")
    const [patientSearch, setPatientSearch] = useState("")
    const [catalog, setCatalog] = useState<IData[]>([])
    const info = useRef<string | number>()

    const getCatalog = async () => {
        info.current = toast.info(`Fetching Data for ${search}`, { autoClose: false })
        const input = search == '' || null ? "FragranceX" : search
        const res = await handleGetCatalog(input)

        if (res.message && res.message.includes("404")) {
            setCatalog([])
            toast.dismiss(info.current)
            return
        };
        toast.dismiss(info.current)
        setCatalog(res)
    }

    useEffect(() => { getCatalog() }, [search])

    return (
        <CatalogContext.Provider value={{ catalog, setCatalog, search, setSearch, getCatalog, patientSearch, setPatientSearch }}>
            {children}
        </CatalogContext.Provider>
    )
}