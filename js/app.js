const bellBtn = document.querySelector(".bell__btn");
const profileBtn = document.querySelector(".profile__btn");
const notifications = document.querySelector(".notifications");
const settings = document.querySelector(".settings");

bellBtn.addEventListener("click", () => {
  notifications.classList.toggle("active");
});

profileBtn.addEventListener("click", () => {
  settings.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".notifications") && !e.target.closest(".bell__btn")) {
    notifications.classList.remove("active");
  }

  if (!e.target.closest(".settings") && !e.target.closest(".profile__btn")) {
    settings.classList.remove("active");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && notifications.classList.contains("active")) {
    notifications.classList.remove("active");
  }

  if (e.key === "Escape" && settings.classList.contains("active")) {
    settings.classList.remove("active");
  }
});
