// hamburger menu
const bar = document.querySelector('#bar');
const close = document.querySelector('#close');
const navBar = document.querySelector('#navBar');

if(bar) {
    bar.addEventListener('click',() => {
        navBar.classList.add('active');
        console.log('clicked')
    })
}
if(close) {
    close.addEventListener('click',() => {
        navBar.classList.remove('active');
        console.log('clicked')
    })
}

// singleProduct Page Image Changer
let mainImage = document.querySelector('#mainImage');
let smallImage = document.querySelectorAll('.smallImage');

for(let i = 0; i < smallImage.length; i++){
    smallImage[i].addEventListener('click', () =>{
        mainImage.src = smallImage[i].src;
    })
}

// adding onclick event to selected product item to open new html file
const product = document.querySelectorAll('.product');

for(let i = 0; i < product.length; i++){
    product[i].addEventListener('click', () => {
        // add `${product location or name}` when i understand database later
        window.location.href='singleProduct.html';
    })
}