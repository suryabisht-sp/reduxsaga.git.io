import { useSelector } from "react-redux";

const Header = () => {
    const result = useSelector((state) => state.cartData)
    //console.log("res", result)
    return (
        <div className="container">
        <div className=" header">
            <div className="cart_div">
                    <span>{result.length}</span>
                <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="mgg"/>
            </div>
        </div>
</div>    )
}

export default Header;