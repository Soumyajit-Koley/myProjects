const body = document.querySelector("body");
const button = document.querySelectorAll(".button");

button.forEach(function (button) {
  button.addEventListener("click", function (event) {
    // if (event.target.id === "Red") {
    //   body.style.backgroundColor = event.target.id;
    // }
    // if (event.target.id === "Blue") {
    //   body.style.backgroundColor = event.target.id;
    // }
    // if (event.target.id === "Green") {
    //   body.style.backgroundColor = event.target.id;
    // }
    // if (event.target.id === "Black") {
    //   body.style.backgroundColor = "#212121";
    // }

    switch (event.target.id === "") {
      case event.target.id === "Red":
        body.style.backgroundColor = event.target.id;
        break;
      case event.target.id === "Blue":
        body.style.backgroundColor = event.target.id;
        break;
      case event.target.id === "Green":
        body.style.backgroundColor = event.target.id;
        break;
      case event.target.id === "Black":
        body.style.backgroundColor = event.target.id;
        break;
    }
  });
});
