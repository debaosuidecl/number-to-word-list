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

const PhonePredictor = () => {

    // Local State
    const [sequence, setSequence] = useState("")
    const [isUsingRealWordFilter, setIsUsingRealWordFilter] = useState(false)


    // Bring in redux state
    const suggestionList = useSelector(state => state.prediction.suggestions);

    // bring in dispatcher
    const dispatch = useDispatch()


    const getSuggestionHandler = () => {
        dispatch(getSuggestions(sequence))
    }
    const selectNumberHandler = (number) => {
        setSequence(state => `${state}${number}`)
    }
    const keyDownHandler = (evt) => {
        return evt.key.match(/[a-z\+\-]/gi) && !evt.key.match(/arrow|back/gi) && evt.preventDefault()
    }
    return (
        <Card>
            <div className={classes.PhonePredictor}>
                <SuggestionHeader />
                <Toggler title="Real World Filter" isActive={isUsingRealWordFilter} onToggle={() => setIsUsingRealWordFilter(state => !state)} />
                <SuggestionList suggestionList={suggestionList} />
                <Input
                    onKeyDown={keyDownHandler}
                    value={sequence}
                    onChange={(e) => setSequence(e.target.value)}
                    placeholder="Enter Number Sequence"
                    type="number" />
                <PhoneButtonList onSelectNumber={selectNumberHandler} />
                <Button disabled={!sequence} onClick={getSuggestionHandler}>Get Suggestions</Button>

            </div>
        </Card>
    )
}

export default PhonePredictor;