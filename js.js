document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const dots     = document.querySelectorAll(".nav-dots a");
    const contents = document.querySelectorAll(".section-content, .section-image");
  
    // 1) Fade-in obsahu (tvůj stávající observer)
    const fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        entry.target.classList.toggle("active", entry.isIntersecting);
      });
    }, { threshold: 0.3 });
    contents.forEach(el => fadeObserver.observe(el));
  
    // 2) Aktivace navigačních teček
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        // zrušíme všechny active
        dots.forEach(dot => dot.classList.remove("active"));
        // najdeme tečku se správným href
        const dot = document.querySelector(`.nav-dots a[href="#${entry.target.id}"]`);
        if (dot) dot.classList.add("active");
      });
    }, {
      threshold: 0.6   // sekce je považována za aktivní, když je alespoň 60 % vidět
    });
    sections.forEach(section => navObserver.observe(section));
  });
  

 

