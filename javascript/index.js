const mobMenu = document.querySelector(".menu");

function showNav()
{
    if(mobMenu.style.display == "none")
    {
        mobMenu.style.display = "block"
    }
    else{
        mobMenu.style.display = "none"
    }
}