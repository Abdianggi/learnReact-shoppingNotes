export default function Header(props){
    return(
        <header>
            <div className="mb-5 ms-5">
                <div className="text-teal-700 font-bold underline font-dancing mb-1">{props.title}</div><div className="text-xs text-neutral-400 font-poppin">Menu</div> 
            </div>
        </header>
    );
}