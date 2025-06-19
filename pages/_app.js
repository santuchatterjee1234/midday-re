import Footer from "../src/components/layout/footer";
import Header from "../src/components/layout/header";
import "../styles/globals.css";
import "../styles/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  });

  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
