// Your code goes here

const links = document.querySelectorAll('.nav a');
const headerImg = document.querySelector('.intro img');
const button = document.querySelectorAll('.btn');
const destination = document.querySelectorAll('.destination');
const contentImgs = document.querySelectorAll('.img-content img')
const title = document.querySelector('.logo-heading');
const destinationImg = document.querySelector('.content-destination img')
const destinationTitle = document.querySelector('.content-destination h2');


links.forEach(link => {
    link.addEventListener('click', e => {  //1
        e.preventDefault();
    })

    link.addEventListener('mouseenter', e => { //2
        e.target.style.transform = 'scale(1.1)';
        e.target.style.transition = 'transform 0.1s';
        e.target.style.filter = 'blur(1px)';
    });
    link.addEventListener('mouseleave', e => {  //3
        e.target.style.transform = 'initial';
        e.target.style.filter = 'blur(0)';
    });
});

window.addEventListener('scroll', () => {  //4
    headerImg.style.filter = 'blur(4px)';
});

button.forEach(btn => {
    btn.addEventListener('click', e => { 
        e.target.style.display = 'none';
    });
});

destination.forEach(dest => {
    dest.addEventListener('dblclick', e => {  //5
        if(e.target.nodeName == 'H4') {
            e.target.innerHTML = `Secret message`;
        } else if(e.target.nodeName == 'P') {
            e.target.innerHTML = `Don't do it! It's a trap!`;
        };
    });
});

contentImgs.forEach(img => {

    img.addEventListener('mousedown', e => {  //6
        e.target.style.filter = 'grayscale(100%';
        e.target.style.transition = 'all 0.4s';
        img.addEventListener('transitionend', e => {  //7
            e.target.style.transform = 'scale(1.2)';    
        })
    });
    img.addEventListener('mouseup', e => {  //8
        e.target.style.filter = 'grayscale(0%)';
        img.addEventListener('transitionend', e => {
            e.target.style.transform = 'scale(1)';    
        })
    });
});


title.addEventListener('mouseover', e => {  //9
    e.target.style.transform = 'scale(5)'
    e.target.style.filter = 'blur(75px)'
    e.target.style.transition = 'all 0.3s';
    e.target.style.visibility = 'hidden';
});

title.addEventListener('mouseleave', e => {
    e.target.style.transform = 'scale(1)';
    e.target.style.filter = 'blur(0)';
    e.target.style.visibility = 'visible';
});

destinationImg.addEventListener('mousemove', () => {  //10
    let num1 = Math.floor(Math.random() * 256);
    let num2 = Math.floor(Math.random() * 256);
    let num3 = Math.floor(Math.random() * 256);
    
    destinationTitle.style.color = `rgba(${num1},${num2},${num3})`;
});
