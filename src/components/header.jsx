import "./style.scss";
import { BiShoppingBag } from "react-icons/bi";
import { Link, Route, Routes } from "react-router-dom";
import SelectedProductList from "./selectedProduct";
import ShoppingCartSection from "./shoppingCartSection";
import { useSelector } from "react-redux";

function Header() {
    const data = useSelector((state) => state.data);

    return (
        <>
            <header>
                <nav>
                    <div className="headlineBox">
                        <h3>Shop</h3>
                    </div>
                    <div className="iconBox">
                        <Link
                            to="/SelectedList"
                            aria-label="go to shopping cart"
                        >
                            <BiShoppingBag size={40} color="white" alt="Cart" />
                        </Link>
                        <span style={{ color: "white" }}>
                            {data.reduce((acc, cur) => acc + cur.count, 0)}
                        </span>
                    </div>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<ShoppingCartSection />} />
                <Route path="/selectedList" element={<SelectedProductList />} />
            </Routes>
        </>
    );
}

export default Header;
