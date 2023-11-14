import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Flooring from "./screens/Flooring";
import Gutter from "./screens/Gutter";
import Painting from "./screens/Painting";
import PressureWashing from "./screens/Pressure Washing";

export default function AppRouter() {
    return(
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/flooring" element={<Flooring />}/>
                <Route path="/gutter" element={<Gutter />}/>
                <Route path="/painting" element={<Painting />}/>
                <Route path="/pressurewashing" element={<PressureWashing />}/>
            </Routes>
            <Footer />
        </div>
    )
}