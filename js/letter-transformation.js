  document.querySelectorAll("h1 a > span").forEach(span => {
    const start = (Math.random() * 20 - 10).toFixed(1) + "deg"; // -20 to 20
    const end   = (Math.random() * 20 - 10).toFixed(1) + "deg"; // another random angle
    const duration = (Math.random() * 2 + 1).toFixed(1) + "s"; // 2s – 5s

    span.style.setProperty("--start-angle", start);
    span.style.setProperty("--end-angle", end);
    span.style.animation = `wobble ${duration} ease-in-out infinite alternate`;
  });

// document.querySelectorAll("a.sticker").forEach(a => {
//   const spans = a.querySelectorAll("span");

//   spans.forEach(span => {
//     // Precompute random values for each span
//     const start = (Math.random() * 30 - 15).toFixed(1) + "deg"; 
//     const end   = (Math.random() * 30 - 15).toFixed(1) + "deg";
//     const duration = (Math.random() * 3 + 2).toFixed(1) + "s"; 

//     a.addEventListener("mouseenter", () => {
//       a.style.scale = '1';
//       a.style.rotate = Math.random() * 6 - 3 + `deg`;
//       span.style.setProperty("--start-angle", start);
//       span.style.setProperty("--end-angle", end);
//       span.style.animation = `wobble ${duration} ease-in-out infinite alternate`;
//     });

//     a.addEventListener("mouseleave", () => {
//       span.style.animation = "none"; 
//       a.style.scale = '1';
//       a.style.rotate = (Math.random() * 8 - 4) + `deg`;
//     });
//   });
// });

document.querySelectorAll("a.sticker").forEach(a => {
  const spans = a.querySelectorAll("span");

  a.addEventListener("mouseenter", () => {
    a.style.scale = "1";
    a.style.rotate = (Math.random() * 6 - 3) + "deg";

    spans.forEach(span => {
      const start = (Math.random() * 30 - 15).toFixed(1) + "deg"; 
      const end   = (Math.random() * 30 - 15).toFixed(1) + "deg";
      const duration = (Math.random() * 3 + 2).toFixed(1) + "s"; 

      span.style.setProperty("--start-angle", start);
      span.style.setProperty("--end-angle", end);
      span.style.animation = `wobble ${duration} ease-in-out infinite alternate`;
    });
  });

  a.addEventListener("mouseleave", () => {
    a.style.scale = "1";
    a.style.rotate = (Math.random() * 8 - 4) + "deg";

    spans.forEach(span => {
      span.style.animation = "none";
    });
  });
});