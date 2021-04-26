console.log("Hello World!")

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    if(window.screen.width > 600){
        document.getElementById("sidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        setTimeout(function(){ 
            document.getElementById("main").style.width = "calc(100% - 250px)";
        }, 450);
    }else{
        console.log("Tela de dispositivo mobile!");
        document.getElementById("sidenav").style.width = "100%";
    }
   
    
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    if(window.screen.width < 600 && document.getElementById("sidenav").style.width == "100%"){
        console.log("Tela de dispositivo mobile!");
        document.getElementById("sidenav").style.width = "0";
    }else{
        document.getElementById("main").style.marginLeft = "0";
        document.getElementById("sidenav").style.width = "0";
        document.getElementById("main").style.width = "100%"
    }
} 