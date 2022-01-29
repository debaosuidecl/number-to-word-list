import classes from "./Input.module.css"


const Input = (props) => {
    return <div className={classes.Input}>
        <input   {...props} />
    </div>
}

export default Input;