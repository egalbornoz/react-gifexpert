import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGifs";

export const useFetchGifs = ( category  ) => {
    const [isLoading, setIsLoading] = useState(true)

 const [images, setImages] = useState([]);

   const getIameges=async()=>{
      const newIamges=await getGif( category );
      setImages(newIamges);
      setIsLoading(false);
   }


    useEffect(()=>{
        getIameges();
    }, [])


  return {
        images,
        isLoading
  }
}
