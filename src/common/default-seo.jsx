import { NextSeo } from "next-seo";

const DefaultSeo = () =>{
    return(
        <>
        <NextSeo
            title="Using More of Config"
            description="This example uses more of the available config options."
            canonical="https://www.canonical.ie/"
            openGraph={{
              url: 'https://www.url.ie/a',
              title: 'Shop.co',
              description: 'An E-Commerce Application',
              images: [
                {
                  url: 'https://www.example.ie/og-image-01.jpg',
                  width: 800,
                  height: 600,
                  alt: 'Og Image Alt',
                  type: 'image/jpeg',
                },
                {
                  url: 'https://www.example.ie/og-image-02.jpg',
                  width: 900,
                  height: 800,
                  alt: 'Og Image Alt Second',
                  type: 'image/jpeg',
                },
              ],
              siteName: 'SiteName',
            }}/>
        </>
    );
}
export default DefaultSeo;