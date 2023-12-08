const clock = document.querySelector('contenner');
setInterval(function () {
  let date = new Date();

  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
