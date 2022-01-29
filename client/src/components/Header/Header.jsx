import classes from "./Header.module.css"


const Header = () => {
    return (
        <header className={classes.header}>
            <h1>Word Predict</h1>
            <nav>
                <ul>
                    <li>
                        {/* <CartButton /> */}
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
