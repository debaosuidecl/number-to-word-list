import { useState } from 'react'
import PhoneButton from "../PhoneButton/PhoneButton"
import classes from "./PhoneButtonList.module.css"
const PhoneButtonList = (props) => {
    const [keyMap] = useState({

        "1": ["-"],
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"]
    })
    return (
        <ul className={classes.PhoneButtonList}>
            {
                Object.keys(keyMap).map(number => {
                    return <PhoneButton onSelectNumber={props.onSelectNumber} key={number} value={number} letters={keyMap[number]} />
                })
            }
        </ul>
    )
}

export default PhoneButtonList