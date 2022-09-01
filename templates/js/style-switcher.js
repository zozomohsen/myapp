/*swicher*/
const styleswitchertoggler  = document.querySelector(".style-switcher-toggler ");
styleswitchertoggler.addEventListener("click", () => {
document.querySelector(".style-switcher").classList.toggle("open");

})
//swicher on scrol
window.addEventListener("scroll",() =>{
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");

    }
    
})
//swicher colors//
const alternatestyles = document.querySelectorAll(".alternate-style");
function setActivestyle(color)
{
   alternatestyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled" ,"true");

        }
    })
}
//light and drak mode//
const daynight = document.querySelector(".day-night");
daynight.addEventListener("click", () =>{
    daynight.querySelector("i").classList.toggle("fa-sun");
    daynight.querySelector("i").classList.toggle("fa-moon");
   document.body.classList.toggle("dark");
})
window.addEventListener("load", () =>{
    if(document.body.classList.contains("dark"))
    {
        daynight.querySelector("i").classList.add("fa-sun");

    }
    else
    {
        daynight.querySelector("i").classList.add("fa-moon");

    }
})