import "./globals.css";
import Header from "@/app/ui/header/header";
import Footer from "@/app/ui/footer/footer";
import Script from "next/script";

export const metadata = {
  title: "QUICK FIX Samui",
  description: "Quick Fix - The reliable solution for construction and repair",
  keywords:
    " Construction, Repair, Samui, building, house, electrician, Plumber, builder, handyman, handcraft, koh Samui, craftsman, Constructionwork,",
  metadataBase: new URL("https://quickfix-samui.com/"),
  authors: [
    {
      name: "Igor Sobolev",
      url: "https://www.linkedin.com/in/igor-sobolev-33433724a/",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-PR8J2YGMEN" />
        <Script id={"google-analytics"}>
          {`
          window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-PR8J2YGMEN');
        `}
        </Script>
        <Script id={"Yandex metrika"}>
          {`
             (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(95702893, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
            `}
        </Script>
        <header>
          <Header />
        </header>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
