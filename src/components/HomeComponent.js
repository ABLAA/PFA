import React from "react";
import CarouselHome from "./CarouselComponent";
import Category from "./CategoryComponent";

class Home extends React.Component {
  render() {
    return (
      <div>
        <CarouselHome />
        <Category />
        <img width="1303" src="assets/images/cover2.jpg" />
        <img width="1303" src="assets/images/cover.jpg" />
        <center className="mt-5">
          <h1>CarMaster </h1>
          <p>
            Our vehicles surround you and your passengers with a comprehensive
            bundle of advanced safety and convenience features. From cameras to
            ultrasonic sensors to radars, our sophisticated network of sensors
            acts as extra sets of eyes when you drive or park. You call it peace
            of mind. We call it Hyundai SmartSense.
          </p>
        </center>
      </div>
    );
  }
}
export default Home;
