const password = "Deepak@123";
const btn = document.querySelector("button");
const pw = document.querySelector("#password");
const container = document.querySelector(".container");
const text = document.querySelector("#text");

btn.addEventListener("click", () => {
  if (pw.value == password) {
    container.style.display = "none";
  } else {
    alert("Wrong Password ! Try again");
  }
});
