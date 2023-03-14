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

// pretraga proizvoda
const lupa = document.querySelector('#lupa');
const inputPretraga = document.querySelector('.input-pretraga');
const proizvodi = document.querySelectorAll('.proizvod');
const nemaProizvoda = document.querySelector('.nema-prizvoda');

lupa.addEventListener('click', () =>{ inputPretraga.classList.toggle('aktivna') });
inputPretraga.addEventListener('blur', () =>{ inputPretraga.classList.toggle('aktivna') });


function nijePronadjeno (){
    let nizProizvoda = [];
    const none = (nijedan) => nijedan === 'none';
    proizvodi.forEach(pro =>{
        nizProizvoda.push(getComputedStyle(pro).display);
    });
    
    if( nizProizvoda.every(none)){
        nemaProizvoda.classList.add('prikazan');
    } else {
        nemaProizvoda.classList.remove('prikazan');
    }
}

inputPretraga.addEventListener('input', (e) =>{
    proizvodi.forEach( proizvod => { 
        if (proizvod.id.toLowerCase().includes( e.target.value.toLowerCase())){
            proizvod.style.display = 'block';
        } else {
            proizvod.style.display = 'none';
        }
    })
    nijePronadjeno();
})

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