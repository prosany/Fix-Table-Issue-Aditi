import React from "react";
import Navigation from "../../shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import CampusFacilities from "../CampusFacilities/CampusFacilities";

import FaqQuestions from "../FaqQuestions/FaqQuestions";
import HolidaysCalander from "../HolidaysCalander/HolidaysCalander";


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <HolidaysCalander></HolidaysCalander>
            <br></br>
            <FaqQuestions></FaqQuestions>
            <br></br>
            <CampusFacilities></CampusFacilities>
        </div>
    );
};
export default Home;