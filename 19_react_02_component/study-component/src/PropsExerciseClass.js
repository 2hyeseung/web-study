import React from 'react';
import PropTypes from 'prop-types';
import './PropsExercise.css';

class PropsExerciseClass extends React.Component{
    render(){
        const {text, valid} = this.props;

        return(
            <div>
                <div className="Text">{text}</div>
                <button onClick={valid}>콘솔 메시지</button>
            </div>
        )
    }
}

PropsExerciseClass.defaultProps = {
    text : "이건 기본 text props입니다."
}
PropsExerciseClass.propTypes = {
    text : PropTypes.string.isRequired,
}

export default PropsExerciseClass;