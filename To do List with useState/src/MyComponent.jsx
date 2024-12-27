import React, {useState} from 'react';

function MyComponent(){

    const [Task, setTask] = useState([])
    const [TaskName, setTaskName] = useState("")

    function AddTask() {
        if (TaskName.trim() !== ""){
            const newDate = new Date().getDate();
            const newMonth = new Date().getMonth();
            const newYear = new Date().getFullYear();
            const newTask = {name: TaskName, date: newDate+"/"+newMonth+"/"+newYear};

            setTask(t => ([...t, newTask]));
            setTaskName("");
        }else{
            alert("Please input something");
        }
    }

    function handlerTaskName(event) {
        setTaskName(event.target.value);
    }

    function DeleteTask(index) {
        setTask(t => t.filter((_,i) => i !== index));
    }

    function moveTaskUp(index) {
        if(index > 0){
            const updatedTasks = [...Task];
            [updatedTasks[index], updatedTasks[index - 1]] =
            [updatedTasks[index - 1], updatedTasks[index]];
            setTask(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if(index < Task.length -1){
            const updatedTasks = [...Task];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTask(updatedTasks);
        }
    }

    


    return (
        <div className="to-do-list">
            <h2>To do List</h2>
            <label>Please Enter Your Task</label><br/>
            <input type="text" value={TaskName} onChange={handlerTaskName}></input>
            <button className="add-button" onClick={AddTask}>Add Task</button>
            <ol>
            {Task.map((task,index) => <li key={index} >Name: {task.name}  <span className="Date" >Date: {task.date} </span> 
                <div className="modify">
                    <button className="delete-button" onClick={() => {DeleteTask(index)}}>🚮</button>
                    <button className="Move-button" onClick={() => {moveTaskUp(index)}}>⬆️</button>
                    <button className="Move-button" onClick={() => {moveTaskDown(index)}}>⬇️</button>
                </div>          
                </li>)}
            </ol>

        </div>
    );
}

export default MyComponent