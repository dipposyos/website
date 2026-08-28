// EDIT: ganti dengan email bisnis resmi. Jangan simpan password/API key di sini.
const CONTACT_EMAIL = "export@example.com";

document.documentElement.classList.add("js");
const menuButton = document.querySelector("#menu-toggle");
const menu = document.querySelector("#menu");
menuButton.hidden = false;
function closeMenu() {
  menu.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}
menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  menu.classList.toggle("open", !open);
});
menu.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && menu.classList.contains("open")) {
    closeMenu();
    menuButton.focus();
  }
});
document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector("#inquiry").addEventListener("submit", event => {
  event.preventDefault();
  const status = document.querySelector("#form-status");
  if (CONTACT_EMAIL.endsWith("@example.com")) {
    status.textContent = "Demo only: the website owner must configure a business email before inquiries can be prepared.";
    return;
  }
  const values = new FormData(event.currentTarget);
  const body = ["Company: " + values.get("company"), "Email: " + values.get("email"),
    "Destination: " + values.get("destination"), "", String(values.get("brief"))].join("\n");
  window.location.href = "mailto:" + CONTACT_EMAIL + "?subject=" +
    encodeURIComponent("Green Coffee Sourcing Inquiry") + "&body=" + encodeURIComponent(body);
  status.textContent = "Opening your email app. Review the draft and press Send there.";
});

