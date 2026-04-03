let menus = document.getElementById("menus");
let menuIcon = document.getElementById("menuIcon");
let menuItems = document.querySelectorAll("#menuItem");

menuIcon.onclick = () => {
    if(menus.style.display == "flex") {
        menus.style.display = "none";
    } else {
        menus.style.display = "flex";
    }
}
menus.onclick = (e) => {
    menus.display = "none";
}
menuItems.forEach(mi => mi.addEventListener("click",function() {
    menus.style.display = "none";
    switch (this.textContent) {
        case "home":
            window.location.href = "#home";
            break;
        case "about us":
            window.location.href = "#about";
            break;
        case "our services":
            window.location.href = "#ourServices";
            break;
        case "contact us":
            window.location.href = "#contact";
            break;
    }
}))