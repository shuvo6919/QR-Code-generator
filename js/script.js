function generateQR() {
  const QrField = document.getElementById("QR-code");
  const textField = document.getElementById("text-field");
  const text = textField.value;
  QrField.innerHTML = `<img
  src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}"
  alt=""
/>`;
}
