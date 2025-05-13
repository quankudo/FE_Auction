const clickImgBank = document.querySelector('#bank');
const qrBank = document.querySelector('.qr-bank');

clickImgBank.addEventListener('click', () => {
    qrBank.classList.add('active');
    console.log("holaace");
});

qrBank.addEventListener('click', () => {
    qrBank.classList.remove('active');
});



