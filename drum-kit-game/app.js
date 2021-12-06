const btn = document.querySelectorAll(".drum");

// click function
btn.forEach(function (button) {
  button.addEventListener("click", function (e) {
    let element = e.currentTarget.classList.value[0];
    keyPressed(element);
    soundPlay(element);
  });
});

// keypress function
document.addEventListener("keypress", function (e) {
  keyPressed(e.key);
  soundPlay(e.key);
});

// function for audio play
function soundPlay(value) {
  switch (value) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(key);
  }
}

// function to add and remove pressed class(box-shadow,opacity)
function keyPressed(currKey) {
  var clickedBtn = document.querySelector(`.${currKey}`);
  console.log(clickedBtn);
  clickedBtn.classList.add("pressed");
  setTimeout(function () {
    clickedBtn.classList.remove("pressed");
  }, 200);
}
