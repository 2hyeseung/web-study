import PropTypes from 'prop-types';
import './PropsExercise.css';
import Book from './book.PNG';

const PropsExercise = (props) => {
    const {food, title, author, price, type} = props;
    return(
        <div>
            <div className="Food">
                맛있는 <b>{food}</b>
            </div>
            <div className="Book">
                <div className="BestSeller">이번주 베스트셀러</div>
                <img src={Book}></img>
                <div className="Title">{title}</div>
                <div className="Content">
                    저자: {author}<br/>
                    판매가: {price}<br/>
                    구분: {type}<br/>
                </div>
            </div>
        </div>
    );
}

PropsExercise.defaultProps = {
    food : '떡볶이',
};

PropsExercise.propTypes = {
}

export default PropsExercise;