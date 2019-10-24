import React from 'react';
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";

export default function NotMach() {
  return (
    <>
      <section className="container no-match">
        <Helmet>
          <title>Página não encontrada - Instagram</title>
        </Helmet>

        <div className="content">
          <h2 className="no-match__title">
            Esta página não está disponível.
          </h2>

          <h4 className="no-match__subtitle">
            O link que você acessou pode estar quebrado ou a
            página pode ter sido removida. <Link to="/">Voltar para o Instagram.</Link>
          </h4>
        </div>
      </section>

      <Footer />
    </>
  )
}
