import classes from './Toggler.module.css'
import { useState } from "react"

const Toggler = ({ title, isActive, onToggle, tooltipContent }) => {
    const [notificationClosed, setNotificationClosed] = useState(localStorage.getItem("notification_closed"))
    return <div className={classes.Toggler}>
        <p className={classes.title}>{title}</p>
        <div onClick={() => {
            setNotificationClosed(true)
            localStorage.setItem("notification_closed", true)
            onToggle()
        }} className={isActive ? [classes.ToggleBackground, classes.Active].join(" ") : classes.ToggleBackground}>
            <div className={classes.ToggleBall}></div>
        </div>
        {!notificationClosed ? <div className={classes.Tooltip}>
            <p>{tooltipContent}</p>
        </div> : null}
    </div>
}

export default Toggler;