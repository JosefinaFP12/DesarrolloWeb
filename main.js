let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style:"color:#007196">Estudiante de QFB y cofundadora de Hakioǔ.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
