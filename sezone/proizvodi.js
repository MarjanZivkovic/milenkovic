// AOS init
AOS.init({
    duration: 3000
});

// meni dugme
const meniDugme = document.querySelector('#meni-dugme');
const linkovi = document.querySelector('.glavna-nav ul');

meniDugme.addEventListener('click', () => { 
    linkovi.classList.toggle('active');
    meniDugme.classList.toggle('active');
});

// kartica proizvoda
const krugovi = document.querySelectorAll('.krug');

krugovi.forEach( krug =>{
    krug.addEventListener('click', (e) =>{
        let brojSlike = e.target.getAttribute('data-broj-slike');
        let izvorSlike =  getComputedStyle(e.target.parentNode.parentNode).backgroundImage;
        let preseceniIzvor = izvorSlike.slice(0, -7);

        e.target.parentNode.parentNode.style.backgroundImage = preseceniIzvor + brojSlike + '.jpg")';
    });
});


const plusDugme = document.querySelectorAll('.plus');

plusDugme.forEach( dugme => {
    dugme.addEventListener('click', () =>{
        dugme.parentNode.nextElementSibling.classList.toggle('prikazan');
    })
});

// godina
const tekucaGodina = document.querySelector('.godina');

const danasnjiDatum = new Date();
const godina = danasnjiDatum.getFullYear();
tekucaGodina.textContent = godina;