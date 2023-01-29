import React, {useContext, useState}
 from "react";
 import axios from "axios";
 import './App.css'
 import Image from "./Image"
import { ImageContext } from "./App";

 const Images =() =>{
    const {response, isLoading} = useContext(ImageContext);//taking the values from usecontext

    return(
        <div className="images" >
            
            {response.map((data,key) => <Image key={key} data={data}/>)}
            
        </div>
    )


 }

 export default Images;