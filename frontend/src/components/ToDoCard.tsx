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
                <span>{props.toDo.description}</span>
            </div>
            <Link to={'/' + props.toDo.id + '/update'}><button>Bearbeiten</button></Link>
            {
                props.toDo.status === "DONE" ?
                    <button className={"delete"} type={"submit"}> Delete </button> :
                    <button className={"moveOn"} type={"submit"}> Move on </button>

            }
        </form>
    )
}
