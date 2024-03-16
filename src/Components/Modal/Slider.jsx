import React from "react";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function Slider(props) {
  return (
    <div className="slide">
      <AliceCarousel
        items={props.children ? props.children : props.items}
        responsive={props.responsive}
        controlsStrategy="alternate"
        // autoPlay={true}
        autoPlayInterval={1200}
        infinite={true}
        animationDuration={1500}
        fadeOutAnimation={true}
        disableDotsControls={true}
      />
    </div>
  );
}

export default Slider;
