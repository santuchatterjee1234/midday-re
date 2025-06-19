import { useEffect } from 'react';

const useStickyAds = (elementId = 'sticky-ads', triggerPoint = 1000, bottomOffset = 500) => {
  useEffect(() => {
    // Define the scroll handler function
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const offsetHeight = document.documentElement.offsetHeight;
      const innerHeight = window.innerHeight;

      const stickyElement = document.getElementById(elementId);
      if (!stickyElement) return;

      if (scrollY > triggerPoint && offsetHeight - scrollY - innerHeight > bottomOffset) {
        stickyElement.classList.add("sticky_sticked");
      } else {
        stickyElement.classList.remove("sticky_sticked");
      }
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [elementId, triggerPoint, bottomOffset]); // Dependencies array
};

export default useStickyAds;
