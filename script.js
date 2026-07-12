const welcome = document.getElementById("welcome");
const invite = document.getElementById("invite");
const openBtn = document.getElementById("openBtn");

openBtn.addEventListener("click", () => {

    welcome.style.opacity = "0";
    welcome.style.transform = "scale(.95)";

    setTimeout(() => {

        welcome.style.display = "none";

        invite.classList.add("show");

        invite.scrollIntoView({
            behavior: "smooth"
        });

    },700);

});

const maps = document.getElementById("maps");

maps.href="https://maps.app.goo.gl/2vX8Ck9sQjZ2jzGx6";
