import "./style.scss";

const MainSection = ({ Data, setData }) => {
    return (
        <section>
            <div className="mainContainer">
                <h1 className="title">Shopping Cart</h1>
                <div>
                    <div className="display">
                        {Data.map((item, index) => (
                            <Cart
                                currentProd={item}
                                key={index}
                                setData={setData}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const Cart = ({ currentProd, setData }) => {
    const { image, type, Name, price, id, count } = currentProd;

    const HandleClick = (id) => {
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
