import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import EchipamentePage from "./pages/EchipamentePage.jsx";
import EchipamentDetaliuPage from "./pages/EchipamentDetaliuPage.jsx";
import DesprePage from "./pages/DesprePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

export default function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<EchipamentePage />} />
                <Route path="/echipamente/:id" element={<EchipamentDetaliuPage />} />
                <Route path="/despre" element={<DesprePage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
}