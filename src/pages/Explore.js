import React from "react";
import Footer from "../components/Footer/Footer";
import CarouselUsers from "../components/Carousel/CarouselUsers";
import CardImage from "../components/Card/CardImage";

export default function Explore() {
  const items = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];

  return (
    <>
      <section className="container">
        <div className="content">
          <CarouselUsers />
          {/* page content */}
          <div className="explore-content">
            <h2 className="explore-content__title">Explorar</h2>

            <div className="explore-content__card-group">
              <div className="row">
                {items.map(item => (
                  <div key={item} className="col-md-4">
                    <CardImage />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
