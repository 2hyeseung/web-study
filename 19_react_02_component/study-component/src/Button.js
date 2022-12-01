import './Button.css';

const Button = (props) =>{

    const {link, children} = props;
    return(
        <a href={link}>
            <button className="Button">{children}</button>
        </a>
    )
}

Button.defaultProps = {
    children : '네이버',
    link: 'https://www.naver.com',
}

export default Button;