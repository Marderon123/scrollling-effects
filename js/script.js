document.addEventListener("DOMContentLoaded", function(){
    let stars = document.getElementById('stars');
    let moon = document.getElementById('moon');
    let mountains_behind = document.getElementById('mountains_behind');
    let mountains_front = document.getElementById('mountains_front');
    let btn = document.getElementById('btn');
    let text = document.getElementById('text');
    //let header = document.querySelector('header');

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    mountains_behind.style.top = value * 0.5 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
})
});
//header.style.top = value * 0.5 + 'px'; Para determinar hacia donde se mueve el header y la distancia que coge 

document.addEventListener("DOMContentLoaded", function () {
    let header = document.querySelector('header');

    window.addEventListener('scroll', function () {
        let value = window.scrollY;
        // Change header background color gradually
        let opacity = Math.min(1, value / 300); // Adjust the threshold as needed
        header.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
    });
});
