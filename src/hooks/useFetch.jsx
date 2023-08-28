// import { useEffect, useState } from "react";
// import { fetchdataFromApi } from "../utils/api";

// const useFetch = (url) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(null);
//   const [error, setError] = useState(null);

//   const fetchData = async () => {
//     try {
//       setLoading("loading...");
//       setData(null);
//       setError(null);

//       const res = await fetchdataFromApi(url);
//       setLoading(false);
//       setData(res);
//     } catch (error) {
//       setLoading(false);
//       setError("Something went wrong!");
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [url]);

//   return { data, loading, error };
// };

// export default useFetch;










import { useEffect, useState } from "react"
import { fetchdataFromApi } from "../utils/api"

const useFetch = (url) => {
const [data,setData]=useState(null)
const [loading,setLoading]=useState(null)
const [error,setError]=useState(null)

useEffect(()=>{
    setLoading("loading...")
    setData(null)
    setError(null)


    fetchdataFromApi(url)
    .then((res)=>{
        setLoading(false)
        setData(res)
    }).catch((error)=>{
        setLoading(false)
        setError('Something went wrong!')
    })
},[url])

return { data, loading, error };
}



export default useFetch