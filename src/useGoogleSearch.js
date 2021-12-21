import {useState, useEffect} from 'react'
import { API_KEY } from './keys'
const CONTEXT_KEY =  'da84c8692def8d145'

function useGoogleSearch(term) {
    const [data, setData] = useState(null)
    useEffect(() => {
      const fetchData = async ()=>{

            fetch(
               `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}` 
            ).then(res => res.json()).then(result => {setData(result)})
      } 
      fetchData() 
    }, [term])
    return {data}
}

export default useGoogleSearch
