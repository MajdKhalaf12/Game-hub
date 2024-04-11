import { useState,useEffect, } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchGenreResponse{
   count:number; 
   results:Genre[];
}
interface Genre{
   id:number; 
   name : string; 
}

const useGenres = () =>{
   const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchGenreResponse>("/genres")
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { genres, error,isLoading };

}

export default useGenres; 