import './ToDoGallery.css'
import {ToDo} from '../types/ToDo';
import ToDoCard from './ToDoCard.tsx';

type ToDoGalleryProps = {
    name:string;
    toDos:ToDo[];
    handleMoveUp: (id:string) => void;
}

export default function ToDoGallery(props:Readonly<ToDoGalleryProps>) {


    return (
        <article className={"ToDoGallery"}>
            <h2>{props.name}</h2>
            {props.toDos.map((todo:ToDo) => <ToDoCard toDo={todo} key={todo.id} handleMoveUp={props.handleMoveUp}/>)}
        </article>)
}