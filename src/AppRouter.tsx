import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Navbar from "./components/navbar";

export default function AppRouter() {
    return(
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
            </Routes>
        </div>
    )
}