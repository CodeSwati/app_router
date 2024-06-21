
import { preloadTodos } from "../todos/page";
import  type {NextPage}  from "next";

const DashboardPage :NextPage = ()=>{
    preloadTodos();
    return (
        <div>
            <h1 className="text-4xl font-bold">profile page</h1>
        </div>
    )
}

export default DashboardPage;