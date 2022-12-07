import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
    return (
        <div className="ProductList">
            {products.map((product) => {
                return (
                    <ProductItem
                        key={product.id}
                        product={product}
                    ></ProductItem>
                );
            })}
        </div>
    );
};

export default ProductList;
