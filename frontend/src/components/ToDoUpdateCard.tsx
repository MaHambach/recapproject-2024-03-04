import './ToDoUpdateCard.css'
import {NavigateFunction, useNavigate} from "react-router-dom";
import {ToDo} from "../types/ToDo.ts";
import {ChangeEvent, FormEvent, useState} from "react";

type ToDoUpdateCard= {
    toDo:ToDo,
    updateToDoFunction: (todo:ToDo) => void
}
export default function ToDoUpdateCard(props:Readonly<ToDoUpdateCard>):JSX.Element{
    const [formToDo, setFormToDo] = useState<ToDo>(props.toDo);

    const navigate:NavigateFunction = useNavigate();

    function handleOnSubmit(event:FormEvent<HTMLFormElement>):void{
        event.preventDefault();
        props.updateToDoFunction(formToDo);
        navigate("/");
    }

    function handleChangeInput(event: ChangeEvent<HTMLInputElement>):void {
        setFormToDo(
            {
                ...formToDo,
                description: event.target.value
            })
    }

    function handleChangeSelect(event: ChangeEvent<HTMLSelectElement>):void {
        setFormToDo(
            {
                ...formToDo,
                status: event.target.value
            })
    }

    return (
        <form className={"ToDoUpdateCard"} onSubmit={handleOnSubmit}>
            <div className={"inputDiv"}>
                <div>
                    <label htmlFor={"description"}> Name: </label>
                    <input id={"description"} type={"text"} name={"description"} value={formToDo.description}
                           onChange={handleChangeInput}/>
                </div>
                <div>
                    <label htmlFor={"status"}>Status:</label>
                    <select id={"status"} name={"status"} value={formToDo.status} onChange={handleChangeSelect}>
                                <option value={"OPEN"}>OPEN</option>
                                <option value={"IN_PROGRESS"}>IN PROGRESS</option>
                                <option value={"DONE"}>DONE</option>
                    </select>
                </div>
            </div>
            <div className={"buttonDiv"}>
                <button className={"content"} type={"submit"}>Anwenden</button>
                <button className={"content"} type={"button"} onClick={() => navigate("/")}>Zurück</button>
            </div>
        </form>
    )
}