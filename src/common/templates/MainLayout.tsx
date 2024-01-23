import { AppShell } from "@mantine/core";
import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <AppShell
            header={{ height: 60 }}
            padding="md">
            <AppShell.Header>
                <div><Link to={"/"}>Home</Link>
                    &nbsp;|&nbsp; <Link to={"/english"}>English</Link>
                    &nbsp;|&nbsp; <Link to={"/interview"}>Interview</Link>
                </div>
            </AppShell.Header>
            
            <AppShell.Main><Outlet /></AppShell.Main>

        </AppShell>
    );
}

export default MainLayout;