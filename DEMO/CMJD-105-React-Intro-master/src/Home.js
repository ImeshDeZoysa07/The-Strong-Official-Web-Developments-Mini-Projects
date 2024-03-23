import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>Welcome to Home!</h1>

            <ul>
                <li>
                    <Link to="/users">Users</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
            </ul>
        </div>
    )
}

export default Home;