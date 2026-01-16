document.addEventListener("DOMContentLoaded", () => {

  // BOTÃO CONTATO
  document.querySelector(".cta-button").addEventListener("click", () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=lucasmlimasantos18@gmail.com",
      "_blank"
    );
  });

  // SCROLL SUAVE POR ETAPAS
  document.querySelectorAll(".content2 a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      const sectionId = link.dataset.section;
      document.getElementById(sectionId).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });

});



