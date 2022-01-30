import classes from "./PhoneButton.module.css"
const PhoneButton = (props) => {
    return (
        <div className={classes.PhoneButton}>
            <p onClick={() => props.onSelectNumber(props.value)} >{props.value}
                <br />
                <span>{props.letters.join("").toUpperCase()}</span>
            </p>
        </div>
    )
}


export default PhoneButton