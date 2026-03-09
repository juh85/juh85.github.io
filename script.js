window.addEventListener("scroll", function () {
  const elements = document.querySelectorAll("section");

  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (position < screenPosition) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
});

// maquina de escrever
function typeWrite(letras){
  const textArray = letras.innerHTML.split('');
  letras.innerHTML = '';

  textArray.forEach(function(letra, i){
    setTimeout(function(){
      letras.innerHTML += letra;
    }, 300 * i);
  });
}

const maquinaTxtNome = document.querySelector(".maquina-txt");
typeWrite(maquinaTxtNome);


// EMAILJS
(function(){
emailjs.init("6uVPOjXhAZOhoF6R0");
})();

const formEmail = document.querySelector("#form");

formEmail.addEventListener("submit", function(e) {
  e.preventDefault();
  console.log("Formulário enviado!");

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;

  if(name === "" || email === "" || message === ""){
    alert("Preencha todos os campos!");
    return;
  }

  emailjs.send("service_aj842zd", "template_ehr2yfk", {
    name: name,
    email: email,
    message: message
  })
  .then(function() {
    alert("Mensagem enviada com sucesso!");
    formEmail.reset();
  })
  .catch(function(error) {
    alert("Erro ao enviar mensagem.");
    console.log(error);
  });

});
