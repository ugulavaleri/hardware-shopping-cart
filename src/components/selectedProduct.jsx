import "./style.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/dataSlicer";

const SelectedProductList = () => {
    const data = useSelector((state) => state.data);

    return (
        <>
            <div className="selectedProductsContainer">
                <h2 className="mainTitle">
                    {data.every((e) => e.count === 0)
                        ? "No selected Items"
                        : "Yout selected items"}
                </h2>
                {data.map(
                    (currentProduct) =>
                        currentProduct.count !== 0 && (
                            <Carts
                                currentProduct={currentProduct}
                                key={currentProduct.id}
                            />
                        )
                )}
            </div>
            <div className="linksDiv">
                <Link to="/">Balck to main</Link>
                <a href="#">Buy</a>
            </div>
        </>
    );
};

const Carts = ({ currentProduct }) => {
    const { image, type, Name, price, count, id } = currentProduct;
    const dispatch = useDispatch();

    return (
        <div className="selectedProductsContainer">
            <div className="cart">
                <div>
                    <img src={image} alt={type} />
                </div>
                <div>
                    <h2>{Name}</h2>
                    <p>price: ${price}</p>
                    <div>
                        <button onClick={() => dispatch(removeFromCart(id))}>
                            -
                        </button>
                        <span>{count}</span>
                        <button onClick={() => dispatch(addToCart(id))}>
                            +
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectedProductList;
