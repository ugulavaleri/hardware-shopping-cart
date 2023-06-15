import "./style.scss";

const MainSection = ({ setAddCart, Data, setData }) => {
    return (
        <section>
            <div className="mainContainer">
                <h1 className="title">Shopping Cart</h1>
                <div>
                    <CartWrapper
                        data={Data}
                        setAddCart={setAddCart}
                        setData={setData}
                    />
                </div>
            </div>
        </section>
    );
};

const CartWrapper = ({ data, setAddCart, setData }) => {
    return (
        <div className="display">
            {data.map((item, index) => (
                <Cart
                    currentProd={item}
                    setAddCart={setAddCart}
                    key={index}
                    setData={setData}
                />
            ))}
        </div>
    );
};

const Cart = ({ currentProd, setAddCart, setData }) => {
    const { image, type, Name, price, id, count } = currentProd;

    const HandleClick = (id) => {
        setAddCart((prev) => prev + 1);
        setData((prev) => {
            const item = prev.map((e) => {
                if (e.id === id) {
                    return { ...e, count: e.count + 1 };
                }
                return e;
            });
            return item;
        });
    };

    return (
        <div className="Wrapper">
            <img src={image} alt={type} />
            <p className="productName">{Name}</p>
            <p className="productPrice">{`$${price}`}</p>
            <button onClick={() => HandleClick(id)}>
                Add to Cart {count !== 0 && `(${count})`}
            </button>
        </div>
    );
};

export default MainSection;
