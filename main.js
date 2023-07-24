//const myModal = document.getElementById('modal-contactame');
//const myElement = document.getElementById('contactame');

//myModal.addEventListener('shown.bs.modal', () => {
 //   myElement.focus();
//});

let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(1000)
  .typeString('PROYECTOS')
  .pauseFor(2000)
  .deleteChars(10)
  //.pauseFor(800)
  .start();