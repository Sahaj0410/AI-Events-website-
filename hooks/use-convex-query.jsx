import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useQuery, useMutation } from "convex/react";

export const useConvexQuery = (query,...args)=>{
    const result = useQuery(query,...args);

    const [data,setData] = useState();
    const [isLoading,setIsLoading] = useState(true);    
    const [error,setError] = useState(null);

    useEffect(()=>{
        if(result===undefined){
            setIsLoading(true)
        }else{
            try{

                setData(result);
                setError(null);
            }catch(e){
                setError(e);
                toast.error(e.message);
            }finally{
                setIsLoading(false)
            }
        }
       
    },[result]);

    return {data,isLoading,error};
}

export const useConvexMutation = (mutation,...args)=>{
    const mutationfn = useMutation(mutation);

    const [data,setData] = useState();
    const [isLoading,setIsLoading] = useState(true);    
    const [error,setError] = useState(null);

const mutate = async(...args)=>{
    setIsLoading(true);
    setError(null);

    try{
        const response = await mutationfn(...args);
        return response;
    } catch(e){
        setError(e);
        toast.error(e.message);
    }finally{
        setIsLoading(false);
    }
};
    return {mutate,data,isLoading,error};
}