import { useState } from "react"
import { useSelector, useDispatch } from "react-redux";

import classes from './PhonePredictor.module.css';
import Card from "../Card/Card"
import Input from '../Input/Input';
import Button from '../Button/Button';
import SuggestionList from '../SuggestionList/SuggestionList';
import { getSuggestions } from "../../store/actionCreators/prediction";

const PhonePredictor = () => {

    // Local State
    const [sequence, setSequence] = useState("")


    // Bring in redux state
    const suggestionList = useSelector(state => state.prediction.suggestions);

    // bring in dispatcher
    const dispatch = useDispatch()


    const getSuggestionHandler = () => {
        dispatch(getSuggestions(sequence))
    }
    return (
        <Card>
            <div className={classes.PhonePredictor}>
                <h1>Suggestion List</h1>
                <SuggestionList suggestionList={suggestionList} />
                <Input onChange={(e) => setSequence(e.target.value)} placeholder="Enter Number Sequence" type="number" />
                <Button disabled={!sequence} onClick={getSuggestionHandler}>Get Suggestions</Button>

            </div>
        </Card>
    )
}

export default PhonePredictor;