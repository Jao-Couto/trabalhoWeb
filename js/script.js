
let opened = false

function openNav() {
    
    if(window.screen.width > 600){
        document.getElementById("sidenav").style.width = "25%";
        document.getElementById("main").animate([
            // keyframes
            { opacity: '100%' },
            { opacity: '50%', filter: 'blur(.1vh)'}
          ], {
            // timing options
            duration: 300,
            easing: "ease",
            fill: "forwards"
          })
    }else{
        console.log("Tela de dispositivo mobile!");
        document.getElementById("sidenav").style.width = "100%";
    }
    setTimeout(function(){
        opened = true
    }, 500)
}

function closeNav() {
    opened = false
    document.getElementById("sidenav").style.width = "0";
    if( document.getElementById("sidenav").style.width != "100%" )
        document.getElementById("main").animate([
            // keyframes
            { opacity: '50%', filter: 'blur(.1vh)' },
            { opacity: '100%', filter: 'blur(0)' }
        ], {
            // timing options
            duration: 300,
            fill: "forwards"
        })
} 

document.body.addEventListener("click", function(e){
    if (opened && e.target.id != "sidenav" && e.target.parentElement.id != "sidenav")
        closeNav()
})