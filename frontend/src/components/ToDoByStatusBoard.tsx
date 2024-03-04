import {ToDo} from "../types/ToDo.ts";
import ToDoGallery from "./ToDoGallery.tsx";

type ToDoByStatusBoardProps = {
    status:string,
    toDoList:ToDo[],
    triggerChange: () => void,
    deleteToDoById: (id:string) => void,
    updateToDo: (todo:ToDo) => void,
    handleMoveUp: (id:string) => void
}
export default function ToDoByStatusBoard(props:Readonly<ToDoByStatusBoardProps>):JSX.Element {

    return (
        <ToDoGallery name={props.status} toDos={props.toDoList} handleMoveUp={props.handleMoveUp}/>
    )
}