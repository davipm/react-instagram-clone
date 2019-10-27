import React from "react";
import Footer from "../components/Footer/Footer";
import CarouselUsers from "../components/Carousel/CarouselUsers";

export default function Explore() {
  return (
    <>
      <section className="container">
        <div className="content">
          <CarouselUsers />
          {/* page content */}
          <div className="explore-content">
            <h2 className="explore-content__title">Explorar</h2>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
