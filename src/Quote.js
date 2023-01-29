import React, {useState, useEffect} from "react";
import "./App.css"
import axios from "axios"

const Quote = () =>{
    const [quote,setQuote] = useState("");
    const [author,setAuthor] = useState("");
    const QuoteAPI = async() =>{
        let arrayOfQuotes = [];
        try{
            const data = await axios.get("https://api.quotable.io/random");
            arrayOfQuotes = data.data;

        }catch(error){
            console.log(error);

        }
        try{
            setQuote(arrayOfQuotes.content);
            setAuthor(arrayOfQuotes.author);

        }catch(error){
            console.log(error);

        }
    };
    useEffect(() =>{
        QuoteAPI();
        


    },[])
    return(
        <div className="quote">
            {quote}
            <br></br>
            {author}
        </div>

    );

}

export default Quote