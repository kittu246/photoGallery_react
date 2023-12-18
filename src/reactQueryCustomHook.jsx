import { customFetch } from "./util";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useSearchedData = (searchItem) =>{

    console.log(import.meta.env.VITE_API_KEY)

    const url = `https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_API_KEY}&page=1&query=${searchItem}`

    const data = useQuery(
        {
            queryKey:['photos',searchItem],// once search and got result react query will not refetch again in order to fetch again we need to pass dynamic value to array,so user search term
            queryFn: async()=>{
                const data= await axios.get(url)
                return data.data;
            }
           
            
        }
    )

    return data;
}