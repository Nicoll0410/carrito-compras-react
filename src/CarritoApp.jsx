import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { ComprasScreen } from "./Screens/ComprasScreen"
import { CarritoScreen } from "./Screens/CarritoScreen"
import { ProductosProvider } from "./Context/ProductosProvider"
import { CarritoProvider } from "./Context/CarritoProvider"

export const CarritoApp = () => {
    return (
        <ProductosProvider>
            <CarritoProvider>
                <NavBar></NavBar>
                    <div className="container">
                        <Routes>
                            <Route path="/" element={<ComprasScreen></ComprasScreen>}></Route>
                            <Route path="/carrito" element={<CarritoScreen></CarritoScreen>}></Route>
                            <Route path="/*" element={<Navigate to='/'/>}></Route>
                        </Routes>
                    </div>
            </CarritoProvider>
        </ProductosProvider>
    )
}
