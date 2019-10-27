import React from 'react';
import Slider from "react-slick";
import SuggestionCard from "../../Card/SuggestionCard";
import { settings } from "./carouselSettings";

function CarouselUsers(props) {
  return (
    <div className="slide-content">
      <h2 className="slide-content__title">
        Encontre pessoas
        <a href="#!top">Ver tudo</a>
      </h2>

      <Slider {...settings} {...props}>
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
      </Slider>
    </div>
  );
}

export default CarouselUsers;
