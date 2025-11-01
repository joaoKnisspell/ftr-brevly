import { Outlet } from "react-router";

export default function CentralizedLayout() {
    return(
        <main className="h-screen w-screen flex items-center justify-center bg-[#E4E6EC] px-3 md:px-0">
            <Outlet />
        </main>
    )
} 