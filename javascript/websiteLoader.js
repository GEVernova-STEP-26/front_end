document.addEventListener("DOMContentLoaded", function () {

    Promise.all([
        fetch("navbar.html").then(res => res.text()),
        fetch("footer.html").then(res => res.text())
    ])
    .then(([navbarHTML, footerHTML]) => {

        document.getElementById("navbar-container").innerHTML = navbarHTML;
        document.getElementById("footer-container").innerHTML = footerHTML;

    })
    .catch(err => console.error("Loading error:", err));

});
