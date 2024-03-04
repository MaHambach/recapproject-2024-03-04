import ToDoGallery from "./ToDoGallery.tsx";
import {ToDo} from "../types/ToDo.ts";

type ToDoMainBoardProps = {
    toDoList:ToDo[],
    triggerChange: () => void,
    deleteToDoById: (id:string) => void,
    updateToDo: (todo:ToDo) => void,
    handleMoveUp: (id:string) => void
}

export default function ToDoMainBoard(props:Readonly<ToDoMainBoardProps>):JSX.Element {

    function getAllToDosWithStatus(list:ToDo[], filter:string):ToDo[] {
        return list.filter((todo:ToDo):boolean => todo.status === filter);
    }



    return (
        <>
            <ToDoGallery name={"OPEN"} toDos={getAllToDosWithStatus(props.toDoList, "OPEN")} handleMoveUp={props.handleMoveUp}/>
            <ToDoGallery name={"IN PROGRESS"} toDos={getAllToDosWithStatus(props.toDoList, "IN_PROGRESS")} handleMoveUp={props.handleMoveUp}/>
            <ToDoGallery name={"DONE"} toDos={getAllToDosWithStatus(props.toDoList, "DONE")} handleMoveUp={props.handleMoveUp}/>
        </>
    )
}