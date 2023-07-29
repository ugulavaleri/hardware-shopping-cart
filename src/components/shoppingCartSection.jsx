import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/dataSlicer";
import "./style.scss";

const MainSection = () => {
    const data = useSelector((state) => state.data);

    return (
        <section>
            <div className="mainContainer">
                <h1 className="title">Shopping Cart</h1>
                <div>
                    <div className="display">
                        {data.map((item, index) => (
                            <Cart currentProd={item} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const Cart = ({ currentProd }) => {
    const { image, type, Name, price, id, count } = currentProd;
    const dispatch = useDispatch();

    return (
        <div className="Wrapper">
            <img src={image} alt={type} loading="lazy" />
            <p className="productName">{Name}</p>
            <p className="productPrice">{`$${price}`}</p>
            <button onClick={() => dispatch(addToCart(id))}>
                Add to Cart {count !== 0 && `(${count})`}
            </button>
        </div>
    );
};

export default MainSection;
