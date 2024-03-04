import { Link } from "react-router-dom";
import './Header.css'

export default function Header(){
    return (
        <header className={"Header"}>
            <Link className={"button"} to={"/"}><button className={"home"} >Home</button></Link>
            <Link className={"button"} to={"/open"}><button className={"open"}>OPEN</button></Link>
            <Link className={"button"} to={"/in-progress"}><button className={"inProgress"}>IN PROGRESS</button></Link>
            <Link className={"button"} to={"/done"}><button className={"done"}>DONE</button></Link>
        </header>
    )
}