import classes from './Button.module.css'
import Colors from "../../constants/colors"
const Button = (props) => {
    return <button className={classes.Button} style={{
        background: Colors.primaryColor,
        color: Colors.textColor
    }}  {...props} >

        {
            props.children
        }

    </button>
}

export default Button