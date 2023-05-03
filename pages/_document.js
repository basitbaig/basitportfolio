import { Html, Head, Main, NextScript } from 'next/document'
import Link from "next/link";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />

      <title>DevMan Bootstrap Portfolio</title>
      <meta content="" name="description" />
      <meta content="" name="keywords" />

      <link href="assets/img/favicon.png" rel="icon" />
      <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
      <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
      <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
      <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
      <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
      <link href="assets/css/style.css" rel="stylesheet" />

      </Head>
      <body>
        <Main />
        <NextScript />

        <Script src="assets/vendor/purecounter/purecounter_vanilla.js" />
        <Script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js" />
        <Script src="assets/vendor/glightbox/js/glightbox.min.js" />
        <Script src="assets/vendor/swiper/swiper-bundle.min.js" />
        <Script src="assets/vendor/typed.js/typed.min.js" />
        <Script src="assets/vendor/php-email-form/validate.js" />
        <Script src="assets/js/main.js"/> 

      </body>
    </Html>
  )
}
