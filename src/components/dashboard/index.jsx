import Header from "../layouts/header"

export default function Dashboard(){
    const title = 'Dashboard';

    return(
        <div className="mx-3 my-3">
            <Header title={title}/>
            <div className="text-neutral-600">
                Hello Abdi
            </div>
        </div>
    )
};