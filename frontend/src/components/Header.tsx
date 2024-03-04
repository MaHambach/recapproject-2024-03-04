import { Link } from "react-router-dom";
import './Header.css'

export default function Header(){
    return (
        <header className={"Header"}>
            <Link className={"link home"      } to={"/"           }>Home          </Link>
            <Link className={"link open"      } to={"/open"       }>OPEN          </Link>
            <Link className={"link inProgress"} to={"/in-progress"}>IN PROGRESS   </Link>
            <Link className={"link done"      } to={"/done"       }>DONE          </Link>
        </header>
    );
}