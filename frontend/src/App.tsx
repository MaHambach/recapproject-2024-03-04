import './App.css'
import {ToDo} from './types/ToDo.ts'
import {useEffect, useState} from "react";
import axios from "axios";
import {AxiosResponse} from "axios";
import {Route, Routes} from "react-router-dom";
import ToDoMainBoard from "./components/ToDoMainBoard.tsx";
import ToDoUpdateBoard from "./components/ToDoUpdateBoard.tsx";
import Header from "./components/Header.tsx";
import ToDoByStatusBoard from "./components/ToDoByStatusBoard.tsx";
import Footer from "./components/Footer.tsx";

export default function App() {
    const [toDoList, setToDoList] = useState<ToDo[]>([]);
    function fetchData():void{
        axios.get('/api/todo')
            .then((response:AxiosResponse):void => {
                setToDoList(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error.message);
            });
    }

    function deleteToDoById(id:string):void {
        axios.delete('/api/todo/' + id)
            .then( (response) => {
                console.log(`Deleted todo with id `+ id + response.data);
            })
            .catch(error => {
                console.error("Error deleting todo with id " + id + ": ", error.message);
            })
        fetchData();
    }

    function updateToDo(todo:ToDo):void{
        axios.put('/api/todo/' + todo.id + '/update', todo)
            .then((response) => {
                console.log("Updated to: ");
                console.log(response.data);
            })
            .catch((error) => {
                console.error("Error updating todo with id " + todo.id + ": ", error.message);
            })
        fetchData();
    }

    useEffect(
        fetchData,
        []
    );

    function handleMoveUp(id:string):void{
        const todo:ToDo = toDoList.filter((todo:ToDo):boolean => todo.id === id)[0];
        if(todo.status === "OPEN") {
            todo.status = "IN_PROGRESS";
            updateToDo(todo);
        } else if(todo.status === "IN_PROGRESS") {
            todo.status = "DONE";
            updateToDo(todo);
        } else if(todo.status === "DONE") {
            deleteToDoById(id)
        }
        fetchData();
    }

    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path={"/"} element={<ToDoMainBoard toDoList={toDoList} triggerChange={fetchData} updateToDo={updateToDo} deleteToDoById={deleteToDoById} handleMoveUp={handleMoveUp}/>}/>
                    <Route path={"/:id/update"} element={<ToDoUpdateBoard toDoList={toDoList} updateToDoFunction={updateToDo}/>}/>
                    <Route path={"/open"} element={<ToDoByStatusBoard status={"OPEN"} toDoList={toDoList.filter((todo:ToDo):boolean => todo.status === "OPEN")} triggerChange={fetchData} updateToDo={updateToDo} deleteToDoById={deleteToDoById} handleMoveUp={handleMoveUp}/>}/>
                    <Route path={"/in-progress"} element={<ToDoByStatusBoard status={"IN PROGRESS"} toDoList={toDoList.filter((todo:ToDo) => todo.status === "IN_PROGRESS")} triggerChange={fetchData} updateToDo={updateToDo} deleteToDoById={deleteToDoById} handleMoveUp={handleMoveUp}/>}/>
                    <Route path={"/done"} element={<ToDoByStatusBoard status={"DONE"} toDoList={toDoList.filter((todo:ToDo) => todo.status === "DONE")} triggerChange={fetchData} updateToDo={updateToDo} deleteToDoById={deleteToDoById} handleMoveUp={handleMoveUp}/>}/>
                </Routes>
            </main>
            <Footer triggerChange={fetchData}/>
        </>
    );
}

