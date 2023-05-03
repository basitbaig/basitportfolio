import '@/styles/globals.css'
import Navbar from "./components/Navbar";

import Link from "next/link";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
  <>
    <Navbar>  
       <Component {...pageProps} />
    </Navbar>  

  </>
  );
}
