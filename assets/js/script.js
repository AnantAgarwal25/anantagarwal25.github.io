// ==============================
// Sticky Navbar Shadow on Scroll
// ==============================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 40){

        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.08)";

    }

    else{

        header.style.boxShadow = "none";

    }

});


// ==============================
// Smooth Fade-In (placeholder)
// ==============================

document.addEventListener("DOMContentLoaded",()=>{

    document.body.style.opacity="1";

});
