import axios from 'axios';
import React,{ useState, useEffect } from 'react';


const useQuery = (url) => {
    const [response, setResponse] = useState({});
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);



    useEffect(() => {
        setLoading(true);
        axios.get(url).then((fetchResponse) => {
            setResponse(fetchResponse.data)
        }).catch((err)=>{
            setError(err);
        }).finally(()=> {
            setLoading(false);
        })
    }, [url]);

    return {response, loading, error}
}

export default useQuery;