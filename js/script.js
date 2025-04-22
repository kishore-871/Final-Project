window.addEventListener("load", function () {
    const body = document.querySelector("body");
    body.classList.add("fade-in");

    const links = document.querySelectorAll("a[href]");
    links.forEach(link => {
      link.addEventListener("click", function (e) {
        // Skip external, anchor, or new-tab links
        if (
          link.target === "_blank" ||
          link.href.includes("#") ||
          link.hostname !== window.location.hostname
        ) return;

        e.preventDefault();
        body.classList.remove("fade-in");
        body.classList.add("fade-out");

        setTimeout(() => {
          window.location.href = link.href;
        }, 300);
      });
    });
  });


document.addEventListener("DOMContentLoaded", function () {
    const toggleCards = document.querySelectorAll(".toggle-card");
  
    toggleCards.forEach(card => {
      card.addEventListener("click", toggleCard);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggleCard.call(card);
        }
      });
  
      function toggleCard() {
        const desc = this.querySelector(".artist-desc");
        const players = this.querySelectorAll(".spotify");
  
        desc?.classList.toggle("hidden");
  
        players.forEach(player => {
          player.classList.toggle("hidden");
        });
      }
    });
  });
  