import '@/styles/globals.css'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Link from "next/link";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
  <>
       <Navbar />  
       <Component {...pageProps} />

       <Footer />

        <Script src="assets/vendor/purecounter/purecounter_vanilla.js" />
        <Script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js" />
        <Script src="assets/vendor/glightbox/js/glightbox.min.js" />
        <Script src="assets/vendor/swiper/swiper-bundle.min.js" />
        <Script src="assets/vendor/typed.js/typed.min.js" />
        <Script src="assets/vendor/php-email-form/validate.js" />
        <Script src="assets/js/main.js"/>        
  </>
  );
}
