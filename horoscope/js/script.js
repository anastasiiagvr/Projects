let block = document.querySelectorAll('.image');

for (let item of block) {
    item.addEventListener('mouseenter', function(e) {
        e.target.lastElementChild.classList.toggle('txt');
        e.target.firstElementChild.style.transition = '2s';
        e.target.firstElementChild.style.opacity = '0.2';
        e.target.firstElementChild.style.transform = 'rotateY(360deg)';
    })

    item.addEventListener('mouseleave', function(e) {
        e.target.lastElementChild.classList.toggle('txt');
        e.target.firstElementChild.style.opacity = '1';
        e.target.firstElementChild.style.transform = 'rotateY(0deg)';
    })
}