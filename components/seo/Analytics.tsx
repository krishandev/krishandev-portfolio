import Script from "next/script";

export default function Analytics() {
  return (
    <>
      {/* Google Search Console */}
      <meta
        name="google-site-verification"
        content="WIYjHI-5TFUsCAQC-Kw4k2qTpqFt2UY1TaCFrC9aVAs"
      />

      {/* Google Analytics */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-N9PMK4VPJX"
      />

      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-N9PMK4VPJX');
          `,
        }}
      />
    </>
  );
}