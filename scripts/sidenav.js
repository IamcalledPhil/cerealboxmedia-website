/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("screen-overlay").classList.remove("hidden");
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("screen-overlay").classList.add("hidden");
}

function toggleElement(elementToShow) {
    document.getElementById(elementToShow).classList.toggle("hidden");
}