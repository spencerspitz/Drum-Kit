var numDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}

document.addEventListener("keydown", function() {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {

  var audio = null;
  switch (key) {
    case "w":
      audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case "a":
      audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
    case "s":
      audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    case "d":
      audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case "j":
      audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case "k":
      audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case "l":
      audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    default:
      console.log(this.innerHTML);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
