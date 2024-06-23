const qrGenerate = () => {
  let inputBox = document.querySelector('.inputBox');
  let qrImg = document.querySelector('.qr');

  qrImg.style.display = 'block';

  let randomQuote = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputBox.value}`;

  if (inputBox.value.length === 0) {
    alert('Enter text or URL');
  } else {
    qrImg.src = randomQuote;
  }
};
