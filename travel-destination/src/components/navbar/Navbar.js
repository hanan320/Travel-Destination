import { Link } from "react-router-dom"
function Navbar() {
    return (
        <>
            <nav>
                <Link className='home-link' to={'/'}>Home</Link>
            </nav>
        </>
    )
}

export default Navbar