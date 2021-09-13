import '../NavBar/style.css'
const NavBar = (props) => {

    return(
        <nav className="navbar">
            <ul className="navbar-nav">
            { props.children}
            </ul>
        </nav>
    )
}   


export default NavBar;