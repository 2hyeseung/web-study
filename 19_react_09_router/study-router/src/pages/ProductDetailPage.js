import { useParams, useNavigate } from "react-router-dom";

const ProductDetailPage = ({ products }) => {
    const { productId } = useParams();
    const [targetProduct] = products.filter((p) => p.id === Number(productId));
    // [targetProduct] => [{}] or []
    // console.log(targetProduct); // {} or undefined

    const navigate = useNavigate();

    if (!targetProduct) {
        return (
            <div className="ProductDetailPage">존재하지 않는 상품입니다.</div>
        );
    }

    return (
        <main className="ProductDetailPage">
            <div>여기는 상품 디테일</div>
            {/* +1은 뒤로가기 한 기록이 있을때 */}
            <button onClick={() => navigate(-1)}>목록보기</button>
            <button onClick={() => navigate("/")}>홈으로</button>
            <ul>
                <li>판매번호 : {targetProduct.id}</li>
                <li>상품명 : {targetProduct.name}</li>
                <li>판매자 : {targetProduct.email}</li>
                <li>상세설명 : {targetProduct.body}</li>
            </ul>
        </main>
    );
};
export default ProductDetailPage;
