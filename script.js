// AOS init
AOS.init();

// meni dugme
const meniDugme = document.querySelector('#meni-dugme');
const linkovi = document.querySelector('.glavna-nav ul');

meniDugme.addEventListener('click', () => { 
    linkovi.classList.toggle('active');
    meniDugme.classList.toggle('active');
});

// slajder funkcija
const sliderContainer = document.querySelector('.slider-container');
const leftSlides = document.querySelector('.left-slides-container');
const rightSlides = document.querySelector('.right-slides-container');
const upButton = document.querySelector('.btn-up');
const downButton = document.querySelector('.btn-down');
const slidesLength = rightSlides.querySelectorAll('div').length

let activeSlideIndex = 0;

leftSlides.style.top = `-${(slidesLength -1) * 95}vh`

function changeSlides( direction ){
    const hight = sliderContainer.clientHeight;

    if ( direction === 'up' ){
        activeSlideIndex++;
        if ( activeSlideIndex >  slidesLength - 1){
            activeSlideIndex = 0;
        }
    } else if ( direction === 'down' ){
        activeSlideIndex--;
        if( activeSlideIndex < 0 ){
            activeSlideIndex = slidesLength -1;
        }
    }

    rightSlides.style.transform = `translateY(-${activeSlideIndex * hight}px)`;
    leftSlides.style.transform = `translateY(${activeSlideIndex * hight}px)`;
}

upButton.addEventListener('click', () => { changeSlides('up')});
downButton.addEventListener('click', () => { changeSlides('down')});
// Mozda dodati evente na key up and down za istu funkciju

// Testimonials
const paragraf = document.querySelector('.testimonials-p');
const ime = document.querySelector('.testimonials-name');

const testimonials = [
    {
        text : 'Prelepo cveće, odlični četinari, vrhunska usluga...',
        osoba : 'Zoran, Leskovac'
    },
    {
        text : 'PORODICA ZA PRIMER… A CVEĆE IM JE FANTASTIČNO.',
        osoba : 'Slave, Turekovac'
    },
    {
        text: 'Biljke iz rasadnika mi se uvek dobro prime. Uvek nađem ono što mi treba. Sve pohvale!',
        osoba: 'Marija, Vlasotince'
    },
    {
        text: 'Cene su pristupačne, a kvalitet cveća na visokom nivou. Prezadovoljna sam!',
        osoba: 'Jelena, Leskovac'
    },
    {
        text: 'Impresioniran sam izborom četinara. Drveće je zdravo i izgleda odlično.',
        osoba: 'Miloš, Beograd'
    }
]
let activeIndex = 1

paragraf.textContent = testimonials[0].text;
ime.textContent = testimonials[0].osoba;

function promeniTestimonial(){
    paragraf.textContent = testimonials[activeIndex].text;
    ime.textContent = testimonials[activeIndex].osoba;

    activeIndex++;
    if ( activeIndex > testimonials.length - 1){
        activeIndex = 0;
    }
}

setInterval( promeniTestimonial, 8000);

// Godina i radno vreme
const tekucaGodina = document.querySelector('.godina');
const otvoreno = document.querySelector('.otvoreno');
const zatvoreno = document.querySelector('.zatvoreno');

const danasnjiDatum = new Date();
const godina = danasnjiDatum.getFullYear();

tekucaGodina.textContent = godina;

if(danasnjiDatum.getHours() > 7 && danasnjiDatum.getHours() < 17){
    otvoreno.style.display = 'block';
    zatvoreno.style.display = 'none';
} else {
    otvoreno.style.display = 'none';
    zatvoreno.style.display = 'block'; 
}