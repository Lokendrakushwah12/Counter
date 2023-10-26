let qr = document.querySelector('#qr');
let input = document.querySelector('#input');
let qrImg = document.querySelector('#qr-img');
const btn = document.querySelector('#btn1');

btn.addEventListener('click', () => {
    if (input.value === '') {
        alert('Please enter a valid url');
        return;
    }
    else {
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=1500x1500&data=" + input.value;
        qr.classList.add('show');
    }
})
