import '@/styles/globals.css'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-V4SKVPGW7X"></Script>
      <Script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-V4SKVPGW7X');
        `}
      </Script>
      <Script src="https://www.google.com/recaptcha/api.js?render=6Ld0knQlAAAAACK-5SFSB5-VrsfIeQTI4KXd8O6T"></Script>
      <Component {...pageProps} />
    </>
  )
}
