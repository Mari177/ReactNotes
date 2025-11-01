import ReactDOM from "react-dom/client";
import { CDN_URL } from "./utils/constants";
import { RESTAURANT_LIST } from "./utils/mockData";


function Header() {
    let logo = new URL("./images/appLogo.jpg", import.meta.url);
    return (
        <div className="header-container">
            <div className="logo-container">
                <img src={logo} className="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

const RestaurantCard = (props) => {
    const { resData } = props;
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla : {deliveryTime}
    } = resData?.info;

    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img
                className="res-logo"
                alt="res-logo"
                src={CDN_URL + cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h4>{cuisines?.join(",")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    );
}

const Body = function () {
    const restaurants = RESTAURANT_LIST?.data?.cards[5]?.card.card.gridElements?.infoWithStyle?.restaurants;
    return (
        <div className="body-container">
            <div className="search">Search</div>
            <div className="res-container">
                {
                //    restaurants.map((restaurant, index) => (
                //      <RestaurantCard key = {index} resData = {restaurant} />
                //    )) 

                // Not recommended using index as keys -> Better to use unique ids (Better practice)
                   restaurants.map((restaurant)=>(
                    <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                   ))
                }
            </div>
        </div>
    );
}


const AppLayout = () => {
    return (
        <div className="foodApp">
            <Header />
            <Body />
        </div>
    );
}


let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

