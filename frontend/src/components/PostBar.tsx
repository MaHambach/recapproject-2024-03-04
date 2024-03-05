import './PostBar.css'
import {ChangeEvent, FormEvent, useState} from "react";
import axios from "axios";

type PostBarProps = {
    triggerChange: () => void;
}
export default function PostBar(props:Readonly<PostBarProps>):JSX.Element{
    const [formData, setFormData] = useState<string>("");
    function handleOnSubmit(event:FormEvent<HTMLFormElement>):void {
        event.preventDefault();
        axios.post('api/todo', {
                description: formData,
                status: "OPEN"
            })
            .then(response => {
                console.log("New todo added with id " + response.data.id + ".");
                props.triggerChange();
            })
            .catch(error => {
                console.error("Error creating todo: ", error.message);
            })
        setFormData("");
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>):void {
        setFormData(event.target.value);
    }

    return (
        <form className={"PostBar"} onSubmit={handleOnSubmit}>
            <label htmlFor={"postBar"}>New ToDo:</label>
            <input id={"postBar"} type={"text"} name={"postBar"} value={formData} onChange={handleChange}/>
        </form>
    )
}