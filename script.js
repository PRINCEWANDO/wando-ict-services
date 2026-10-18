const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("contactForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const name = document.getElementById("visitorName").value.trim();
  const email = document.getElementById("visitorEmail").value.trim();
  const message = document.getElementById("visitorMessage").value.trim();
  const status = document.getElementById("formStatus");
  const subject = encodeURIComponent("Website enquiry from " + name);
  const body = encodeURIComponent(
    "Name: " + name + "\nEmail: " + (email || "Not provided") + "\n\nEnquiry:\n" + message
  );

  // No business email has been configured yet, so use WhatsApp as the working fallback.
  const whatsappText = encodeURIComponent(
    "Hello WANDO ICT SERVICES. Website enquiry:\nName: " + name +
    "\nEmail: " + (email || "Not provided") + "\nEnquiry: " + message
  );
  status.textContent = "Opening WhatsApp with your enquiry. You can review it before sending.";
  window.open("https://wa.me/2348081497519?text=" + whatsappText, "_blank", "noopener");
});
