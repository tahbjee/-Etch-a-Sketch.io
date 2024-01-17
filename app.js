const resetButton = document.querySelector("button");
const container = document.querySelector(".container");

function getRandomColor() {
  let randomR = Math.floor(Math.random() * 256);
  let randomG = Math.floor(Math.random() * 256);
  let randomB = Math.floor(Math.random() * 256);
  let randomO = Math.floor(Math.random() * 256);

  return `rgb(${randomR},${randomG},${randomB}, ${randomO})`;
}

const createGrid = (amtOfGrids) => {
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");

  for (let i = 0; i < amtOfGrids; i++) {
    const row = document.createElement("div");
    row.classList.add("grid-row");
    // wrapper.classList.add("wrapper");

    for (let j = 0; j < amtOfGrids; j++) {
      const widthAndHeight = 700 / amtOfGrids;
      const gridBox = document.createElement("div");
      gridBox.classList.add("grid-box");
      gridBox.style.width = `${widthAndHeight}px`;
      gridBox.style.height = `${widthAndHeight}px`;
      // let elements = document.querySelectorAll(".grid-box");

      const bgColor = getRandomColor();

      gridBox.addEventListener("mouseenter", () => {
        gridBox.style.backgroundColor = bgColor;
      });

      row.appendChild(gridBox);
    }
    wrapper.appendChild(row);
  }
  container.appendChild(wrapper);
};

resetButton.addEventListener("click", () => {
  let userSize = Number(prompt("Select the size"));

  while (userSize > 100) {
    userSize = Number(
      prompt("Make sure to select a number that is equal to or less than 100. ")
    );
  }
  const wrapper = document.querySelector(".wrapper");

  if (!wrapper) {
    createGrid(userSize);
  } else {
    wrapper.remove();
    createGrid(userSize);
  }
});

// const resetButton = document.querySelector("button");
// const container = document.querySelector(".container");

// function getRandomColor() {
//   let randomR = Math.floor(Math.random() * 256);
//   let randomG = Math.floor(Math.random() * 256);
//   let randomB = Math.floor(Math.random() * 256);
//   let randomO = Math.floor(Math.random() * 256);

//   return `rgb(${randomR},${randomG},${randomB}, ${randomO})`;
// }

// const createGrid = (amtOfGrids) => {
//   const wrapper = document.createElement("div");
//   wrapper.classList.add("wrapper");

//   for (let i = 0; i < amtOfGrids; i++) {
//     const row = document.createElement("div");
//     row.classList.add("grid-row");

//     for (let j = 0; j < amtOfGrids; j++) {
//       const widthAndHeight = 500 / amtOfGrids;
//       const gridBox = document.createElement("div");
//       gridBox.classList.add("grid-box");
//       gridBox.style.width = `${widthAndHeight}px`;
//       gridBox.style.height = `${widthAndHeight}px`;

//       const bgColor = getRandomColor();

//       gridBox.addEventListener("mouseenter", () => {
//         gridBox.style.backgroundColor = bgColor;
//       });

//       row.appendChild(gridBox);
//     }
//     wrapper.appendChild(row);
//   }
//   container.appendChild(wrapper);
// };

// resetButton.addEventListener("click", () => {
//   let userSize = Number(prompt("Select the size"));

//   while (userSize > 100) {
//     userSize = Number(
//       prompt("Make sure to select a number that is equal to or less than 100.")
//     );
//   }
//   const wrapper = document.querySelector(".wrapper");

//   if (!wrapper) {
//     createGrid(userSize);
//   } else {
//     wrapper.remove();
//     createGrid(userSize);
//   }
// });
