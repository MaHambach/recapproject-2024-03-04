import './Footer.css'
import PostBar from "./PostBar.tsx";

type FooterProps ={
    triggerChange: () => void
}
export default function Footer(props:Readonly<FooterProps>):JSX.Element{
    return (
        <footer className={"Footer"}>
            <PostBar triggerChange={props.triggerChange}/>
        </footer>
    )
}