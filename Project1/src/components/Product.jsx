

const Product = () => {
    return (
    <Items
        name='Laptop'
        price= '$5000'
        />
    );
};
const Items = ({ name, price }) => {
    return (
        <div>
            <h1>Product: {name}</h1>
            <p>Amount: {price}</p>
        </div>
    );
};

export default Product;
