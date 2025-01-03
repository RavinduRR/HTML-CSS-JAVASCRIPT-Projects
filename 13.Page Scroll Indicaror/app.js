let indictor = document.querySelector(".scroll-indictor .progress");
let scrollHeight = document.documentElement.scrollHeight - document.documentElement.scrollHeight - document.documentElement.clientHeight

window.addEventListener('scroll',  scroll)

function scroll(){
    let scrollTop = document.documentElement.scrollTop;
    let scrolled = (scrollTop/scrollHeight)*100
    indictor.computedStyleMap.width = `${scrolled}%`
}




// let indictor = document.querySelector(".scroll-indictor .progress");
// let scrollHeight =
//     document.documentElement.scrollHeight - document.documentElement.clientHeight;

// window.addEventListener("scroll", scroll);

// function scroll(){
//     let scrollTop = document.documentElement.scrollTop;
//     let scrolled = (scrollTop / scrollHeight) * 100
//     indictor.computedStyleMap.width = '${scrolled}%';
// }