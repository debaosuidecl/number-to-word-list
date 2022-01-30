import { useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import classes from './PhonePredictor.module.css';
import Card from "../Card/Card"
import Input from '../Input/Input';
import Button from '../Button/Button';
import SuggestionList from '../SuggestionList/SuggestionList';
import { getSuggestions } from "../../store/actionCreators/prediction";
import PhoneButtonList from "../PhoneButtonList/PhoneButtonList";
import SuggestionHeader from "../SuggestionHeader/SuggestionHeader";
import Toggler from "../Toggler/Toggler";
import { predictionActions } from "../../store/slices/prediction";

const PhonePredictor = () => {

    // Local State
    const [sequence, setSequence] = useState("")
    const [isUsingRealWordFilter, setIsUsingRealWordFilter] = useState(true)

    // Bring in redux state
    const suggestionList = useSelector(state => state.prediction.suggestions);

    // bring in dispatcher
    const dispatch = useDispatch();

    const getSuggestionHandler = () => {
        dispatch(getSuggestions({ sequence, filterForWords: isUsingRealWordFilter }))
    }
    const selectNumberHandler = (number) => {
        setSequence(state => `${state}${number}`)
    }
    const keyDownHandler = (evt) => {
        // Prevent symbols and letters from entering inputt on type
        return evt.key.match(/[a-z\+\-]/gi) && !evt.key.match(/arrow|back/gi) && evt.preventDefault()
    }
    const clearHandler = () => {
        setSequence("")
        dispatch(predictionActions.clearSuggestions())
    }
    return (
        <Card>
            <div className={classes.PhonePredictor}>
                <SuggestionHeader />
                <Toggler
                    title={isUsingRealWordFilter ? "Filtering for real words" : "Not filtering for real words"}
                    isActive={isUsingRealWordFilter}
                    onToggle={() => setIsUsingRealWordFilter(state => !state)}
                />
                <SuggestionList suggestionList={suggestionList} />
                <Input
                    onKeyDown={keyDownHandler}
                    value={sequence}
                    onChange={(e) => setSequence(e.target.value)}
                    placeholder="Enter Number Sequence"
                    type="number" />
                <PhoneButtonList onSelectNumber={selectNumberHandler} />
                <Button disabled={!sequence} onClick={getSuggestionHandler}>Get Suggestions</Button>
                <Button onClick={clearHandler}>Clear</Button>

            </div>
        </Card>
    )
}

export default PhonePredictor;