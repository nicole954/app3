import logo from './logo.svg';
import './App.css';
import Weather from './Weather';
import Images from './Images';
import UseAxios from './UseAxios' //make request to api, get data from api. used for working with api
import React,{createContext,useState, useEffect} from 'react';
import GoalsList from './GoalsList';
import Quote from './Quote';



export const ImageContext = createContext();//creating data that components can read 


function App() {
  const {response, isLoading, error, fetchData } = UseAxios(`search/photos?page=1&query=Views&client_id=${process.env.REACT_APP_ACCESS_KEY}`);
  const value ={
    response,
    isLoading,
    error,
    fetchData
  }

 

  return (
    <div className="App">
    <link rel = "stylesheet" href = ""></link>
    
      <div className='content' >
      <ImageContext.Provider value={value}>

       <GoalsList/>
        <Weather/>
        
        <Images/>
    
      </ImageContext.Provider>
      </div>
      
    </div>
  );
}

export default App;
