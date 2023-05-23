let popup = document.querySelector("#popup");
let book = document.querySelector("#book");
let close = document.querySelector("#close");

book.addEventListener("click", displayPopup);
close.addEventListener("click", closePopup);


function displayPopup() {
  popup.style.display = "flex";
}

function closePopup() {
  popup.style.display = "none";
}

var courierBoxes = document.querySelectorAll(".courier-box");

courierBoxes.forEach(function(courierBox) {
  var checkbox = courierBox.querySelector(".cbxinp");
  
  courierBox.addEventListener("click", function() {
    checkbox.checked = !checkbox.checked;
  });
});



var minusBtns = document.querySelectorAll(".minus-btn");
var plusBtns = document.querySelectorAll(".plus-btn");
var valueDisplays = document.querySelectorAll(".value");

// Add event listeners to each set of buttons
minusBtns.forEach(function(minusBtn, index) {
  var valueDisplay = valueDisplays[index];
  var value = 0;

  minusBtn.addEventListener("click", function() {
    if (value > 0) {
      value--;
      valueDisplay.textContent = value;
    }
  });

  plusBtns[index].addEventListener("click", function() {
    value++;
    valueDisplay.textContent = value;
  });
});





const moveUpBoxes = gsap.utils.toArray('.move-up');
moveUpBoxes.forEach(box => {
  gsap.to(box, {
    y: -80,
    scrollTrigger: {
      trigger: box,
      start: "center 75%",
      end: "center 35%",
      scrub: true
    }
  })
});

const moveDownBoxes = gsap.utils.toArray('.move-down');
moveDownBoxes.forEach(box => {
  gsap.to(box, {
    y: 90,
    scrollTrigger: {
      trigger: box,
      start: "center 75%",
      end: "center 35%",
      scrub: true
    }
  })
});

const moveUpFromBoxes = gsap.utils.toArray('.move-up-from');
moveUpFromBoxes.forEach(box => {
  gsap.from(box, {
    y: 80,
    scrollTrigger: {
      trigger: box,
      start: "center 65%",
      end: "center 35%",
      scrub: true
    }
  })
});

const moveUpFBoxes = gsap.utils.toArray('.move-up-f');
moveUpFBoxes.forEach(box => {
  gsap.to(box, {
    y: -40,
    scrollTrigger: {
      trigger: box,
      start: "center 65%",
      end: "center 55%",
      scrub: true
    }
  })
});


const moveLeftBoxes = gsap.utils.toArray('.move-left');
moveLeftBoxes.forEach(box => {
  gsap.to(box, {
    x: -200,
    scrollTrigger: {
      trigger: box,
      start: "top 85%",
      end: "top 25%",
      scrub: true
    }
  })
});

const moveLeftFromBoxes = gsap.utils.toArray('.move-left-from');
moveLeftFromBoxes.forEach(box => {
  gsap.from(box, {
    x: 400,
    opacity: 0,
    scrollTrigger: {
      trigger: box,
      start: "center 80%",
      end: "center 55%",
      scrub: true
    }
  })
});


const moveRightFromBoxes = gsap.utils.toArray('.move-right-from');
moveRightFromBoxes.forEach(box => {
  gsap.from(box, {
    x: -400,
    opacity: 0,
    scrollTrigger: {
      trigger: box,
      start: "center 80%",
      end: "center 55%",
      scrub: true
    }
  })
});

const moveLeftFBoxes = gsap.utils.toArray('.move-left-f');
moveLeftFBoxes.forEach(box => {
  gsap.to(box, {
    x: -50,
    scrollTrigger: {
      trigger: box,
      start: "top 50%",
      end: "bottom 100%",
      scrub: true
    }
  })
});

const moveRightBoxes = gsap.utils.toArray('.move-right');
moveRightBoxes.forEach(box => {
  gsap.to(box, {
    x: 200,
    scrollTrigger: {
      trigger: box,
      start: "top 85%",
      end: "top 25%",
      scrub: true
    }
  })
});


const hideUpBoxes = gsap.utils.toArray('.hide-up');
hideUpBoxes.forEach(box => {
  gsap.to(box, {
    opacity: 0,
    scrollTrigger: {
      trigger: box,
      start: "center 20%",
      end: "center 2%",
      scrub: true
    }
  })
});
