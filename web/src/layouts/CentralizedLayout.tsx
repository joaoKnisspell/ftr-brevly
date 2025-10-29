import { Outlet } from "react-router";

export default function CentralizedLayout(){
    return(
        <main className="h-screen w-screen flex items-center justify-center">
            <Outlet />
        </main>
    )
} 