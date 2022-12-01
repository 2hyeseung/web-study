import PropTypes from 'prop-types';

// function FuncComponent(){
//     const teacher = '션';
//     return(
//         <div>
//             <h1>Hi! {teacher}</h1>
//             <p>여기는 Functional Component!!</p>
//         </div>
//     );
// }

// const FuncComponent = ({ name, students }) => {
const FuncComponent = (props) => {
    const teacher = '션';
    const {name, students} = props;

    return(
        <div>
            <h1>Hi! {teacher}</h1>
            <p>여기는 Functional Component!!</p>
            <p>{props.name} 학생수는 {props.students}명</p>
            <p>{name} 학생수는 {students}명</p>
        </div>
    );
}

FuncComponent.defaultProps = {
    name : '얏호',
};

FuncComponent.propTypes = {
    name : PropTypes.string,
    // students : PropTypes.number.isRequired,
}

export default FuncComponent;