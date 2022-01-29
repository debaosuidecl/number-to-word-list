import { useSelector } from "react-redux";
import classes from './PhonePredictor.module.css';
import Card from "../Card/Card"
import Input from '../Input/Input';
import Button from '../Button/Button';
import SuggestionList from '../SuggestionList/SuggestionList';

const PhonePredictor = () => {

    const suggestionList = useSelector(state => state.prediction.suggestions);
    return (
        <Card>
            <div className={classes.PhonePredictor}>
                <h1>Suggestion List</h1>
                <SuggestionList suggestionList={suggestionList} />
                <Input placeholder="Enter a Numbers between 2 and 9" type="number" />
                <Button>Get Suggestions</Button>

            </div>
        </Card>
    )
}

export default PhonePredictor;