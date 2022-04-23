import React from "react";
import Navigation from "../../shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import CampusFacilities from "../CampusFacilities/CampusFacilities";


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <CampusFacilities></CampusFacilities>
        </div>
    );
};
export default Home;