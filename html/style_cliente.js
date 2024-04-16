document.addEventListener("DOMContentLoaded", function() {
    var servicosbtn = document.getElementById("servicosbtn");
    var servicosDropdown = document.getElementById("servicosDropdown");

    servicosBtn.addEventListener("click", function() {
        servicosDropdown.style.display = servicosDropdown.style.display === "block" ? "none" : "block";
    });
});


