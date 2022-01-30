import classes from "./Header.module.css"
import { LinearProgress } from "@material-ui/core"
import { Fragment } from "react"
import { useSelector } from 'react-redux'

const Header = () => {
    const uiLoading = useSelector(state => state.ui.loading)
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>iPredict</h1>
            </header>
            {uiLoading ?? <LinearProgress />}
        </Fragment>
    )
}

export default Header
