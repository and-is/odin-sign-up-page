const ps1 = document.querySelector("#password");
const ps2 = document.querySelector("#password2");
const p = document.querySelector(".warning");
const submitBtn = document.querySelector(".btn");
ps2.addEventListener("input", () => {
  if (ps1.value !== ps2.value) {
    ps1.classList.add("wrong");
    ps2.classList.add("wrong");
    p.innerHTML = "Passwords do not match";
    submitBtn.disabled = true;
  } else {
    p.innerHTML = "";
    submitBtn.disabled = false;
  }
});
