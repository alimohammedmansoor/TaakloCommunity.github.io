const splash = document.getElementById("splash")
document.addEventListener("DOMContentLoaded", ()=> {
    setTimeout(()=> {
        splash.classList.add("splash__remove")
    }, 3000)
})
