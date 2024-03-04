import './ToDoCard.css'
import {ToDo} from '../types/ToDo.ts'
import {FormEvent} from "react";
import {Link} from "react-router-dom";

type ToDoCardProps = {
    toDo:ToDo;
    key: string;
    handleMoveUp: (id:string) => void;

}
export default function ToDoCard(props:Readonly<ToDoCardProps>):JSX.Element {
    function handleOnSubmit (event:FormEvent<HTMLFormElement>):void {
        event.preventDefault();
        props.handleMoveUp(props.toDo.id);
    }

    return (
        <form className={"ToDoCard"} onSubmit={handleOnSubmit}>
            <div>
                {props.toDo.description}
            </div>
            <Link to={'/' + props.toDo.id + '/update'} className={"link"}>Bearbeiten</Link>
            {
                props.toDo.status === "DONE" ?
                    <button className={"delete"} type={"submit"}> Delete </button> :
                    <button className={"moveOn"} type={"submit"}> Move on </button>
            }
        </form>
    )
}
