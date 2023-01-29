import React,{useState,useEffect} from "react";
import {v4 as uuidv4} from "uuid";

const GoalsList = ()=>{
    const [goal,setGoal] = useState({description:'',isMarked:false});
    const [goals, setGoals] = useState([]);

    useEffect(() => {
       
            const storedList = JSON.parse(localStorage.getItem("goals"));
            if(storedList!== null)
            {
            setGoals(storedList);
            const divGoal = document.getElementsByClassName("goal");
            goals.map((Agoal)=>{
                 if(Agoal.mark===true){
                    return divGoal[goals.indexOf(Agoal)].style.backgroundColor = 'green';
                 }
                 return false
            }) 

            }
    },[goals])

    const addGoal =(e) =>{
        if(goal) 
        {
            const newGoal = {id: uuidv4(), goal:goal.description,mark:goal.isMarked}
            setGoals([...goals,newGoal]);
            console.log(goal.isMarked)
            localStorage.setItem("goals", JSON.stringify([...goals,newGoal]));
            setGoal("");
        }
    };
    const handleDelete= (goal,e)=>{
        e.preventDefault();
        
        const deleted = goals.filter((g) => g.id !== goal.id);
        setGoals(deleted);
        localStorage.setItem("goals", JSON.stringify(deleted));
    }
    const handleMark = (e,g)=>{
        e.preventDefault();
        const TGoals=goals
        const i = goals.indexOf(g);
        TGoals[i].mark=true;
        setGoals(TGoals)
        console.log(i,goals);
        const divGoal = document.getElementsByClassName("goal");
        divGoal[i].style.backgroundColor = 'green';
        localStorage.setItem("goals", JSON.stringify([...goals]));


    }

    return(
        <div className="containerGoals">
            <div className="inputDiv">
                <input type="text" name="goalInput" placeholder="enter your goal..."
                className="inputg" onChange={(e) => setGoal({description: e.target.value, isMarked:false})}></input>
            </div>
            <div className="addDiv">
                <button className="addBtn" onClick={addGoal}>Add</button>
            </div>
           
            {
                goals.map((goal) => (
                    <React.Fragment key = {goal.id}>
                        <div className="goal">
                          
                                <span className="goalDisplay">{goal.goal}</span>
                        
                       
                             <button className="Deletebtn" onClick={(e) => handleDelete(goal,e)}>Delete</button>
                       
                                   
                                
                                <button className="markBtn" onClick={(e) => handleMark(e,goal)}>mark</button>
                          
                           </div>  
                        
                        
                    </React.Fragment>
                ))
            }

        </div>
        

    );
}

export default GoalsList