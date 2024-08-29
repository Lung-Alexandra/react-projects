import MainHeader from "../components/MainHeader.jsx";
import {Outlet} from "react-router-dom";


function RoutLayout() {
    return (
        <>
            <MainHeader/>
            <Outlet/>
        </>
    );
}

export default RoutLayout;