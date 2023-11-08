function toggleDarkMode() {
    var body = document.getElementsByTagName("body")[0];
    var textBox = document.querySelector(".text-box");
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        textBox.style.color = "white";
        document.querySelector(".background-image").style.backgroundImage = "url('https://img.freepik.com/free-vector/dark-green-abstract-background_1340-17018.jpg?w=1480&t=st=1698964322~exp=1698964922~hmac=74d1d7fc428156d24e75fd1641b22d9d2c890f945f36ed02010b1db9cae77daa')";
        localStorage.setItem("theme", "dark");
    } else {
        textBox.style.color = "black";
        document.querySelector(".background-image").style.backgroundImage = "url('https://img.freepik.com/free-vector/green-curve-frame-template-vector_53876-113965.jpg?w=1380&t=st=1698963501~exp=1698964101~hmac=03e822a69934e394bc40c6fe46bb1b25a2aa68cb7e6c76e464105a636e129cdc')";
        localStorage.setItem("theme", "light");
    }
    var darkModeButton = document.querySelector(".dark-mode");
    if (body.classList.contains("dark")) {
        darkModeButton.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        darkModeButton.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

function toggleMenu() {
    var x = document.getElementsByClassName("menu")[0];
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}

window.onload = function () {
    var theme = localStorage.getItem("theme");
    if (theme === "dark") {
        document.getElementsByTagName("body")[0].classList.add("dark");
        document.querySelector(".text-box").style.color = "white";
        document.querySelector(".background-image").style.backgroundImage = "url('https://img.freepik.com/free-vector/dark-green-abstract-background_1340-17018.jpg?w=1480&t=st=1698964322~exp=1698964922~hmac=74d1d7fc428156d24e75fd1641b22d9d2c890f945f36ed02010b1db9cae77daa')";
        document.querySelector(".dark-mode").innerHTML = '<i class="fas fa-moon"></i>';
    }
};
