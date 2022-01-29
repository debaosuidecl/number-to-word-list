import classes from './SuggestionList.module.css'
import SuggestionItem from '../SuggestionItem/SuggestionItem'
const SuggestionList = (props) => {
    return <ul className={classes.SuggestionList}>

        {
            props.suggestionList && props.suggestionList.map((suggestion, i) => <SuggestionItem suggestion={suggestion} key={i} />)
        }

        {
            props.suggestionList && props.suggestionList.length <= 0 ? <p className={classes.w100}>No suggestions to display</p> : null}


    </ul>
}

export default SuggestionList