import ProductList from "../components/ProductList";

const ProductPage = ({ products }) => {
    return (
        <main className="ProductPage">
            <div>여기는 상품 목록</div>
            <ProductList products={products}></ProductList>
        </main>
    );
};

export default ProductPage;
