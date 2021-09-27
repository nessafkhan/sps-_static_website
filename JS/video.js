const spsimg = document.querySelector(".spsimg");
const spsvideo = document.querySelector(".spsvideo");


const videoplacer = () =>{
    spsimg.classList.add("hidden");
    spsvideo.classList.remove("hidden");
    spsvideo.setAttribute(
        "src",
        "https://www.youtube.com/embed/I9QGnNvrmoY?autoplay=1"
    );
};

spsimg.addEventListener("click",videoplacer);