// Your code here
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#000000";
dodger.style.backgroundColor = "#FF69B4";

dodger.style.bottom = "100px";
dodger.style.bottom = "0px";


document.addEventListener("keydown", function (event) {
    document.addEventListener("keydown", function (event) {
        if (event.key === "ArrowLeft") {
          const leftNumbers = dodger.style.left.replace("px", "");
          const left = parseInt(leftNumbers, 10);
      
          dodger.style.left = `${left - 1}px`;

        }
      });
  });

  function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

  

// Function to move the dodger to the right
function moveDodgerRight() {
  // Get the current position of the dodger
  const left = parseInt(dodger.style.left.replace('px', ''));

  if (left > 0) {
  dodger.style.left = `${left + 1}px`;
}

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
    moveDodgerRight();
    }
  });
 
}
