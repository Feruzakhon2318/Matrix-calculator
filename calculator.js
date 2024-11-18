function calculateMatrix() {
  const input = document.getElementById('birthdate').value;
  const resultDiv = document.getElementById('result');

  // Проверка формата даты
  const regex = /^(\d{2})\.(\d{2})\.(\d{4})$/;
  const match = input.match(regex);

  if (!match) {
    resultDiv.innerHTML = 'Введите дату в формате дд.мм.гггг';
    return;
  }

  const [_, day, month, year] = match.map(Number);

  // Функция для суммы цифр числа
  const sumDigits = (num) => num.toString().split('').reduce((a, b) => a + +b, 0);

  // 1. Первое дополнительное число
  const PDC = sumDigits(day) + sumDigits(month) + sumDigits(year);

  // 2. Второе дополнительное число
  const SDC = sumDigits(PDC);

  // 3. Третье дополнительное число
  const thirdDigit = day.toString()[0] !== '0' ? day.toString()[0] : day.toString()[1];
  const TDC = PDC - 2 * thirdDigit;

  // 4. Четвертое дополнительное число
  const FDC = sumDigits(TDC);

  // Число судьбы
  let destinyNumber = SDC;
  if (SDC !== 11) {
    destinyNumber = sumDigits(SDC);
  }

  // Вывод результатов
  resultDiv.innerHTML = `
    <p><strong>Дата рождения:</strong> ${input}</p>
    <p><strong>Первое доп. число:</strong> ${PDC}</p>
    <p><strong>Второе доп. число:</strong> ${SDC}</p>
    <p><strong>Третье доп. число:</strong> ${TDC}</p>
    <p><strong>Четвертое доп. число:</strong> ${FDC}</p>
    <p><strong>Число судьбы:</strong> ${destinyNumber}</p>
  `;
}
