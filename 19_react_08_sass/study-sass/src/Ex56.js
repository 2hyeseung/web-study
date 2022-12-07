import "./styles/Ex56.scss";
import Grass from "./grass.png";

const Ex56 = () => {
    return (
        <div className="Ex56">
            {/* process.env.PUBLIC.URL : pulbic 폴더 경로의 이미지 가져올 수 있음 */}
            {/* <img src={process.env.PUBLIC_URL='/image/grass.phg'}></img> */}
            <div className="grass">
                <img src={Grass}></img>
            </div>
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
            <div className="four"></div>
            <div className="five"></div>
            <div className="six"></div>
            <div className="seven"></div>
        </div>
    );
};
export default Ex56;
