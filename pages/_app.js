import '@/styles/globals.css'
import Navbar from "./components/Navbar";
import Link from "next/link";
import Script from "next/script";

// https://transform.tools/

export default function App({ Component, pageProps }) {
  return (
  <>
       <Navbar>  
          <Component {...pageProps} />
       </ Navbar>  
      
       <Script src="assets/vendor/purecounter/purecounter_vanilla.js"></Script>
       <Script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js" ></Script>
       <Script src="assets/vendor/glightbox/js/glightbox.min.js" ></Script>
       <Script src="assets/vendor/swiper/swiper-bundle.min.js" ></Script>      
       <Script src="assets/vendor/php-email-form/validate.js" ></Script>
       <Script  src="assets/vendor/typed.js/typed.min.js" ></Script> 
       <Script type='module' src="assets/js/main.js"></Script> 
  </>
  );
}
