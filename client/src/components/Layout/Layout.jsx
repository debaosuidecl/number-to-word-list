import classes from "./Layout.module.css"
import Header from "../Header/Header"

const Layout = ({ children }) => {
    return <div className={classes.Layout}>
        <Header />
        <div className={classes.Children}>{children}</div>
    </div>
}

export default Layout;