(() => {
    const menuBtnRef = document.querySelector("[data-plus-icon]");
    const mobileMenuRef = document.querySelector("[data-lesson-item]");
    const menuBtnRef2 = document.querySelector("[data-plus-icon2]");
    const mobileMenuRef2 = document.querySelector("[data-lesson-item2]");
    const menuBtnRef3 = document.querySelector("[data-plus-icon3]");
    const mobileMenuRef3 = document.querySelector("[data-lesson-item3]");
    const menuBtnRef4 = document.querySelector("[data-plus-icon4]");
    const mobileMenuRef4 = document.querySelector("[data-lesson-item4]");
    const menuBtnRef5 = document.querySelector("[data-plus-icon5]");
    const mobileMenuRef5 = document.querySelector("[data-lesson-item5]");
    const menuBtnRef6 = document.querySelector("[data-plus-icon6]");
    const mobileMenuRef6 = document.querySelector("[data-lesson-item6]");
  
    menuBtnRef.addEventListener("click", () => {
      const expanded =
        menuBtnRef.getAttribute("aria-expanded") === "true" || false;
  
      menuBtnRef.classList.toggle("is-open");
      menuBtnRef.setAttribute("aria-expanded", !expanded);
    
      mobileMenuRef.classList.toggle("is-open");

      mobilePart.classList.toggle("is-open");
    });
    menuBtnRef2.addEventListener("click", () => {
        const expanded =
          menuBtnRef2.getAttribute("aria-expanded") === "true" || false;
    
        menuBtnRef2.classList.toggle("is-open");
        menuBtnRef2.setAttribute("aria-expanded", !expanded);
      
        mobileMenuRef2.classList.toggle("is-open");
  
        mobilePart.classList.toggle("is-open");
      });
      menuBtnRef3.addEventListener("click", () => {
        const expanded =
          menuBtnRef3.getAttribute("aria-expanded") === "true" || false;
    
        menuBtnRef3.classList.toggle("is-open");
        menuBtnRef3.setAttribute("aria-expanded", !expanded);
      
        mobileMenuRef3.classList.toggle("is-open");
  
        mobilePart.classList.toggle("is-open");
      });
      menuBtnRef4.addEventListener("click", () => {
        const expanded =
          menuBtnRef4.getAttribute("aria-expanded") === "true" || false;
    
        menuBtnRef4.classList.toggle("is-open");
        menuBtnRef4.setAttribute("aria-expanded", !expanded);
      
        mobileMenuRef4.classList.toggle("is-open");
  
        mobilePart.classList.toggle("is-open");
      });
      menuBtnRef5.addEventListener("click", () => {
        const expanded =
          menuBtnRef5.getAttribute("aria-expanded") === "true" || false;
    
        menuBtnRef5.classList.toggle("is-open");
        menuBtnRef5.setAttribute("aria-expanded", !expanded);
      
        mobileMenuRef5.classList.toggle("is-open");
  
        mobilePart.classList.toggle("is-open");
      });
      menuBtnRef6.addEventListener("click", () => {
        const expanded =
          menuBtnRef6.getAttribute("aria-expanded") === "true" || false;
    
        menuBtnRef6.classList.toggle("is-open");
        menuBtnRef6.setAttribute("aria-expanded", !expanded);
      
        mobileMenuRef6.classList.toggle("is-open");
  
        mobilePart.classList.toggle("is-open");
      });
  })();