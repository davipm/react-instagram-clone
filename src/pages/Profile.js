import React from 'react';
import Footer from "../components/Footer/Footer";
import CardImage from "../components/Card/CardImage";
import Tabs from "../components/Tabs";

export default function Profile() {
  const items = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];

  return (
    <>
      <section className="container">
        <div className="content">
          <div className="explore-content">
            <div className="profile-header">
              <div className="profile-header__img-content">
                <div className="user__img-list user__img-list--profile">
                  <img
                    src="https://via.placeholder.com/150x150"
                    alt=""
                    className="img-rounded"
                  />
                </div>
              </div>
              <div className="profile-header__content">
                <h1 className="profile-header__name">
                  inosuke_hashibira
                </h1>
                <div className="profile-follows">
                  <ul className="profile-follows__list">
                    <li className="profile-follows__item">
                      <strong>571</strong> publicações
                    </li>
                    <li className="profile-follows__item">
                      <strong>28,1mil</strong> seguidores
                    </li>
                    <li className="profile-follows__item">
                      <strong>344</strong>  seguindo
                    </li>
                  </ul>
                </div>
                <div className="profile-info">
                  <p>Inosuke Hashibira</p>
                </div>
              </div>
            </div>

            <div className="explore-content__card-group">
              <Tabs>
                <div label="Publicações">
                  <div className="row">
                    {items.map(item => (
                      <div key={item} className="col-md-4">
                        <CardImage />
                      </div>
                    ))}
                  </div>
                </div>
                <div label="Marcado">
                  <div className="row">
                    {items.map(item => (
                      <div key={item} className="col-md-4">
                        <CardImage />
                      </div>
                    ))}
                  </div>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
