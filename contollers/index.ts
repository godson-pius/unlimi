const baseUrl = "http://3.88.1.181:8000/products/public/catalog";
import axios from 'axios'

export const handleGetCatalog = async (supplier: string) => {
    try {
        const res = await axios.get(`${baseUrl}/?supplier=${supplier}&first=0&last=50`)
        return res.data
    } catch (error) {
        return error
    }
}