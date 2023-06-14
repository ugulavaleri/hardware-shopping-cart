import "./style.scss";
import { BiShoppingBag } from "react-icons/bi";
import { Link, Route, Routes } from "react-router-dom";
import SelectedProductList from "./selectedProduct";
import ShoppingCartSection from "./shoppingCartSection";
import { useState } from "react";
import { Data } from "./data";

function Header() {
    const [addedInCart, setAddCart] = useState(0);
    const [data, setData] = useState(Data);

    // const selectedCartCounter = () => {
    //     const count = data.reduce((acc, cur) => acc + cur.count, 0);
    //     setAddCart(count);
    // };

    return (
        <>
            <header>
                <nav>
                    <div className="headlineBox">
                        <h3>Shop</h3>
                    </div>
                    <div className="iconBox">
                        <Link to="/SelectedList">
                            <BiShoppingBag size={40} color="white" />
                        </Link>
                        <span style={{ color: "white" }}>
                            {data.reduce((acc, cur) => acc + cur.count, 0)}
                        </span>
                    </div>
                </nav>
            </header>
            <Routes>
                <Route
                    path="/"
                    element={
                        <ShoppingCartSection
                            setAddCart={setAddCart}
                            Data={data}
                            setData={setData}
                        />
                    }
                />
                <Route
                    path="/selectedList"
                    element={
                        <SelectedProductList
                            addedInCart={addedInCart}
                            Data={data}
                            setData={setData}
                        />
                    }
                />
            </Routes>
        </>
    );
}

export default Header;
