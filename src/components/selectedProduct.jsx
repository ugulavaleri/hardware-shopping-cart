import "./style.scss";
import { Link } from "react-router-dom";

const SelectedProductList = ({ Data, setData }) => {
    return (
        <>
            <div className="selectedProductsContainer">
                <h2 className="mainTitle">
                    {Data.every((e) => e.count === 0)
                        ? "No selected Items"
                        : "Yout selected items"}
                </h2>
                {Data.map(
                    (currentProduct) =>
                        currentProduct.count !== 0 && (
                            <Carts
                                currentProduct={currentProduct}
                                key={currentProduct.id}
                                setData={setData}
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

const Carts = ({ currentProduct, setData }) => {
    const { image, type, Name, price, count, id } = currentProduct;

    const handleDecrease = (id) => {
        setData((prev) => {
            const currentCount = prev.map((item) => {
                if (item.id === id) {
                    return { ...item, count: item.count - 1 };
                }
                return item;
            });
            return currentCount;
        });
    };

    const handleIncrease = (id) => {
        setData((prev) => {
            const currentCount = prev.map((item) => {
                if (item.id === id) {
                    return { ...item, count: item.count + 1 };
                }
                return item;
            });
            return currentCount;
        });
    };
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
                        <button onClick={() => handleDecrease(id)}>-</button>
                        <span>{count}</span>
                        <button onClick={() => handleIncrease(id)}>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectedProductList;
