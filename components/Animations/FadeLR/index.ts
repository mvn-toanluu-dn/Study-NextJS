export const onScroll = (animate :any) => {
  const windowHeight = window.innerHeight;
    
    for (let i = 0; i < animate.length; i++) {
      const elementTop = animate[i].getBoundingClientRect().top;
      if (elementTop < windowHeight - 30) {
        animate[i].classList.add("active");
      }
    } 

};


