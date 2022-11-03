$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 15,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 5
        }
    }
})

AOS.init();



let previewContainer = document.querySelector('.product-preview');
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.item .card').forEach(card =>{
    card.onclick = () =>{
        previewContainer.style.display = 'flex';
        let name = card.getAttribute('data-name');
        previewBox.forEach(preview =>{
            let target = preview.getAttribute('data-target');
            if(name == target){
                preview.classList.add('active');
            }
        });
    };
});

previewBox.forEach(close =>{
    close.querySelector('.fa-times').onclick = () =>{
        close.classList.remove('active');
        previewContainer.style.display ='none';
    };
});