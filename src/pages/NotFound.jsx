import {Link} from "react-router"


function NotFound() {
    return (
        <>
        <h1>404 - Page Not Found</h1>
        <p>This item does not exist.</p>
        <Link to="/"> Home Page</Link> 
        </>
    );
}

export default NotFound;
