import React, { useEffect } from 'react';
import Head from 'next/head';

const Ads = () => {
  useEffect(() => {
    const screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    if (screenHeight < 1024) {
      window.googletag = window.googletag || {};
      window.googletag.cmd = window.googletag.cmd || [];
      window.googletag.cmd.push(function () {
        window.googletag.pubads().enableAsyncRendering();
        window.googletag.pubads().disableInitialLoad();
      });

      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.pauseAdRequests = 1;

      const handleTCFEvent = (tcData, success) => {
        if (success && tcData.unicLoad === true) {
          if (!window._initAds) {
            window._initAds = true;
            
            const script1 = document.createElement('script');
            script1.async = true;
            script1.src = 'https://dsh7ky7308k4b.cloudfront.net/publishers/mid-daycom.min.js';
            document.head.appendChild(script1);
            
            const script2 = document.createElement('script');
            script2.async = true;
            script2.src = '//btloader.com/tag?o=5184339635601408&upapi=true';
            document.head.appendChild(script2);
          }
        }
      };

      window.__tcfapi = window.__tcfapi || function() {};
      window.__tcfapi('addEventListener', 2, handleTCFEvent);
    }

    const unblockiaScript = document.createElement('script');
    unblockiaScript.defer = true;
    unblockiaScript.src = 'https://cdn.unblockia.com/h.js';
    document.head.appendChild(unblockiaScript);

    const izootoScript = document.createElement('script');
    izootoScript.async = true;
    izootoScript.src = 'https://cdn.izooto.com/scripts/b5eb5c6f9b4db25c26358ae5851ba6f6dd37cc80.js';
    document.head.appendChild(izootoScript);

    const insuradsScript = document.createElement('script');
    insuradsScript.async = true;
    insuradsScript.src = 'https://cdn.insurads.com/bootstrap/9AZRATN3.js';
    document.head.appendChild(insuradsScript);

    // Initialize izooto after loading the script
    window._izq = window._izq || [];
    window._izq.push(["init"]);

  }, []);

  return (
    <Head>
      <script src="https://cmp.uniconsent.com/v2/stub.min.js"></script>
      <script async src="https://cmp.uniconsent.com/v2/a635e66530/cmp.js"></script>
    </Head>
  );
};

export default Ads;
