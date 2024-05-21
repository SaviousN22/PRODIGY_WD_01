let interval = document.querySelector('section');
let navtags = document.querySelector('header nav a');

window.onscroll=() =>{
    interval.forEach(element => {
    let top = window.scrollY;
    let offset = element.offsetTop;
    let ht = element.offsetHeight;
    let id = element.getAttribute('id');
    if(top >= offset && top < offset + ht){
        navtags.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a [href*='+ id + ']').classList.add('active');
        });
    };
    
});

};
