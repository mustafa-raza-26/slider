let slider = document.getElementById('slider'); 
let leftBtn = document.getElementById('left');
let rightBtn = document.getElementById('right');
let images = [
    'url(img/img1.jpg)',
    'url(img/img2.jpg)',
    'url(img/img3.jpg)',
    'url(img/img4.jpeg)'   
];
let count = 0 ;

slider.style.backgroundImage = images[count] ;

rightBtn.addEventListener('click', function () {
    ++count
    if (count >= images.length) {
        count = 0 ;
    }
    slider.style.backgroundImage = images[count];    
})

leftBtn.addEventListener('click', function () {
    --count
    if (count < 0) {
        count = images.length - 1 ;
    }
    slider.style.backgroundImage = images[count] ;
})
