let spinBtn = document.getElementById("spinBtn");

let spinAngle = 0;
let wheelTotalSegments = 12; // Number of slices on the wheel

function handleSpin() {
    const spinDegree = Math.floor(Math.random() * (1800 - 360 + 1)) + 360;  // Random number between 360 and 1800
//   const spinDegree = 45;  // Adjust the degree for the spin direction
  spinAngle += spinDegree;

  // Apply the rotation to the wheel
  document.getElementById("wheel").style.transition = "transform 2s ease-out"; // Adjust speed and easing
  document.getElementById("wheel").style.transform = `rotate(${spinAngle}deg)`;

  // Wait for the spin to complete
  setTimeout(() => {
    // The degree for each segment is 360 / number of slices (12 in this case)
    const segmentDegree = 360 / wheelTotalSegments;

    // Normalize the spin angle to a value between 0 and 360 (modulo 360)
    // const normalizedAngle = (spinAngle % 360 + 360) % 360;
    const normalizedAngle = spinAngle % 360;
    console.log('====================================');
    console.log(`Normalized Angle: ${normalizedAngle}`);  // Shows normalized angle
    console.log('====================================');

    // Adjust for the 15-degree offset and keep the clockwise direction calculation
    const resultIndex = Math.floor((360 - (normalizedAngle - 30)) / segmentDegree) - 1;  // Fix this to reflect clockwise direction

    console.log(`The wheel landed on segment: ${resultIndex + 1}`); // +1 to match segment 1-12
  }, 2000); // Duration of the transition (2 seconds)
}

spinBtn.addEventListener("click", handleSpin);
