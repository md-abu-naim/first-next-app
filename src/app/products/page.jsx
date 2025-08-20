import Add from "../add-products/Add";

const Products = async() => {
    const res = await fetch('http://localhost:3000/api/items')
    const products = await res.json()
    console.log(products);
    return (
        <div>
            <h1 className="text-3xl">All Products {products?.length}</h1>
            <Add />
        </div>
    );
};

export default Products;