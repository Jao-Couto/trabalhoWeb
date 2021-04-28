console.log("Hello World!")
console.log("Hello World!")

let opened = false

function openNav() {
    
    if(window.screen.width > 600){
        document.getElementById("sidenav").style.width = "250px";
        document.getElementById("main").animate([
            // keyframes
            { opacity: '100%' },
            { opacity: '50%', transform: blur(200)}
          ], {
            // timing options
            duration: 300,
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
            { opacity: '50%', transform: blur(2) },
            { opacity: '100%', transform: blur(0) }
        ], {
            // timing options
            duration: 300,
            fill: "forwards"
        })
} 

document.body.addEventListener("click", function(e){
    console.log(opened);
    console.log(e.target.id != "sidenav");
    console.log(e.target.parentElement.id != "sidenav");
    if (opened && e.target.id != "sidenav" && e.target.parentElement.id != "sidenav")
        closeNav()
})