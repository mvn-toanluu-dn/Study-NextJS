import React, { useEffect, useRef } from "react";

function FadeIn({
  productRef,
  infoRef,
  productListRef,
  productTextRef,
  productBtnRef,
}: any) {
  useEffect(() => {
    const onScroll = (scroll: Event) => {
      switch (true) {
        case window.scrollY >= 800:
          productTextRef.current?.classList.add("fade-left");
          productBtnRef.current?.classList.add("fade-right");
          break;
        case window.scrollY >= 200:
          productListRef.current?.classList.add("fade-in");
          break;
        case window.scrollY >= 120:
          productRef.current?.classList.add("fade-left");
          infoRef.current?.classList.add("fade-right");
          break;
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  });
  return <></>;
}

export default FadeIn;
