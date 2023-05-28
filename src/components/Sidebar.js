import { Link } from "react-router-dom"

function Sidebar() {
    return (
        <>
            <ul className="list-unstyled sidebar">
                <li>
                    <Link to={'/products'}><button className="btn btn-secondary">Get All Products</button></Link>
                </li>
                <li>
                    <li>
                        <Link to={'/Categories'}><button className="btn btn-secondary">Get All Categories</button> </Link>
                    </li>
                </li>
            </ul>
        </>
    )
}
export default Sidebar