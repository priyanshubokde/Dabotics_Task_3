const generateBtn = document.getElementById('generate-btn');
const qrCodeContainer = document.getElementById('qr-code-container');
const downloadLink = document.getElementById('download-link');

generateBtn.addEventListener('click', () => {
    const qrData = document.getElementById('qr-data').value;
    
    if (qrData.trim() === '') {
        alert('Please enter data to encode.');
        return;
    }

    qrCodeContainer.innerHTML = '';

    const qrCode = new QRCode(qrCodeContainer, {
        text: qrData,
        width: 200,
        height: 200,
    });

    const qrDataURL = qrCodeContainer.firstChild.toDataURL('image/png');
    
    downloadLink.href = qrDataURL;
    downloadLink.style.display = 'block';
    downloadLink.download = 'qrcode.png'; // Set a default file name for the download
});
