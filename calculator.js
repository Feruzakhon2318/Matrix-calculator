function calculateMatrix() {
  const input = document.getElementById('birthdate').value;
  const resultDiv = document.getElementById('result');

  const regex = /^(\d{2})\.(\d{2})\.(\d{4})$/;
  const match = input.match(regex);

  if (!match) {
    resultDiv.innerHTML = '<div class="alert">Введите дату в формате дд.мм.гггг</div>';
    return;
  }

  const [_, day, month, year] = match.map(Number);
  const sumDigits = (num) => num.toString().split('').reduce((a, b) => a + +b, 0);

  const PDC = sumDigits(day) + sumDigits(month) + sumDigits(year);
  const SDC = sumDigits(PDC);
  const thirdDigit = day.toString()[0] !== '0' ? day.toString()[0] : day.toString()[1];
  const TDC = PDC - 2 * thirdDigit;
  const FDC = sumDigits(TDC);
  let destinyNumber = SDC !== 11 ? sumDigits(SDC) : 11;

  resultDiv.innerHTML = `
    <p><strong>Дата рождения:</strong> ${input}</p>
    <p><strong>Первое доп. число:</strong> ${PDC}</p>
    <p><strong>Второе доп. число:</strong> ${SDC}</p>
    <p><strong>Третье доп. число:</strong> ${TDC}</p>
    <p><strong>Четвертое доп. число:</strong> ${FDC}</p>
    <p><strong>Число судьбы:</strong> ${destinyNumber}</p>
  `;
}
