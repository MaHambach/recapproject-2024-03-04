import {ToDo} from "../types/ToDo.ts";
import {Params, useParams} from "react-router-dom";
import ToDoUpdateCard from "./ToDoUpdateCard.tsx";

type ToDoUpdateBoardProps ={
    toDoList:ToDo[],
    updateToDoFunction: (todo:ToDo) => void
}

export default function ToDoUpdateBoard(props:Readonly<ToDoUpdateBoardProps>):JSX.Element{

    const params:Readonly<Params> = useParams();
    const id: string | undefined = params.id;
    if(id===undefined) return (<p>Kein ToDo mit dieser Id gefunden.</p>);

    if(props.toDoList.filter((todo:ToDo):boolean => todo.id === id)[0] === undefined) return (<p>Kein ToDo mit dieser Id gefunden.</p>);
    const formToDo:ToDo = props.toDoList.filter((todo:ToDo):boolean => todo.id === id)[0];



    return (
        <ToDoUpdateCard toDo={formToDo} updateToDoFunction={props.updateToDoFunction}/>
    )
}