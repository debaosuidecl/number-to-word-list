import classes from './Toggler.module.css'


const Toggler = ({ title, isActive, onToggle }) => {
    return <div className={classes.Toggler}>
        <p className={classes.title}>{title}</p>
        <div onClick={onToggle} className={isActive ? [classes.ToggleBackground, classes.Active].join(" ") : classes.ToggleBackground}>
            <div className={classes.ToggleBall}></div>
        </div>
    </div>
}

export default Toggler;