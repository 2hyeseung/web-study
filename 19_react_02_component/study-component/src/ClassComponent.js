import React from 'react';
import PropTypes from 'prop-types';

class ClassComponent extends React.Component{
    render(){
        const teacher = 'Sean';
        const {name, students} = this.props;

        return(
            <>
                <h1>Hello, {teacher}</h1>
                <p>여기는 Class Component</p>
                {/* <p>{this.props.name} 수업시간! 학생 수는 {this.props.students}명입니다.</p> */}
                <p>{name} 수업시간! 학생 수는 {students}명입니다.</p>
            </>
        )
    }
    // [방법1]
    // static defaultProps = {
    //     name : '얏호',
    // }
    // static propTypes = {
    //     name : PropTypes.string,
    //     students : PropTypes.number.isRequired
    // }
}

// [방법2]
ClassComponent.defaultProps = {
    name : '얏호',
}
ClassComponent.propTypes = {
    name : PropTypes.string,
    students : PropTypes.number.isRequired
}

export default ClassComponent;