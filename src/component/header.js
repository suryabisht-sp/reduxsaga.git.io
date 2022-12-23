import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
    const result = useSelector((state) => state.cartData)
    return (
        <div>
            <div className=" header">
                <Link to="/">
                    <h1>LOGO</h1>
                </Link>
                <Link to="/cart">
                    <div className="cart_div">
                        <span>{result.length}</span>
                        <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="mgg" />
                    </div>
                </Link>
            </div>
        </div>)
}

export default Header;