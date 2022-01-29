import classes from './SuggestionItem.module.css'
const SuggestionItem = (props) => {
    return <li className={classes.SuggestionItem}>
        <p>{props.suggestion}</p>
    </li>
}

export default SuggestionItem