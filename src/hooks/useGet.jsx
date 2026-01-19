import axios from "axios"
import { useEffect, useState } from "react"

const useGet = ({url}) => {
    const [loading , setloading] = useState(true)
    const [data , setData] = useState([])
    const getData = async() => {
try{
    let res = await axios.get(`https://dummyjson.com/${url}`)
    setData(res)
    console.log(res.data);
    
}catch(err){
    console.log(err); 
}finally{
    setloading(false)
}
    }

    useEffect(() => {
        getData();
    }, [url])
    return{
        data , loading
     }
}
export default useGet