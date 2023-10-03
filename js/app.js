'use strict';
// const formEl = document.querySelector('form');
// const formByPosition = document.forms[0];
// const formByName = document.forms['formName'];

// console.log(formByQuery.elements[0]);
// console.log(formByQuery.action, formByQuery.method);
// console.log(formByQuery.noValidate);
// console.log(formByQuery.autocomplete);
// for (const el of formEl.elements) {
//   console.log(el);
// }
// console.log(formEl.elements[0], formEl.elements['inputName']);

// formEl.action = 'http://devmentor.pl';
// // ustawiamy nowa wartość
// console.log(formEl.action);

// formEl.method = 'GET';

// console.log(window.location.href);

// const search = window.location.search;
// // np. '?inputName=devmentor.pl'
// const searchParams = new URLSearchParams(search);

// for (const [key, value] of searchParams) {
//   console.log(key, '=>', value);
// }

// formEl.noValidate = true;
// formEl.autocomplete = 'off';

// formEl.addEventListener('reset', function (e) {
//   const userConfirm = confirm('Are you sure?');
//   if (!userConfirm) {
//     e.preventDefault();
//   }
// });

// formEl.addEventListener('submit', function (e) {
//   e.preventDefault();
//   // zatrzymujemy domyslna akcje formularza

//   const company = e.target.elements.company;
//   //wyszukuje odpowiedni element
//   console.log(company.value);
// });

// const formEl = document.querySelector('form');

// const handleChange = function (e) {
//   console.log(e.target.name, e.target.value);
// };

// for (const el of formEl.elements) {
//   el.addEventListener('change', handleChange);
//   // dla kazdego elementu formularza nasluchuj zdarzenia [change] czyli po zmianei wartosci pola uruchom callback [handleChange]
// }

// const inputEl = document.querySelector('input');
// inputEl.addEventListener('keyup', insertNumbers);

// function insertNumbers(e) {
//   const val = e.target.value;
//   const len = val.length;
//   if (isNaN(val)) {
//     // jesli ciag znakow po konwersji na Number daje wartosc Not a Number tzw. NaN
//     e.target.value = val.slice(0, len - 1);
//     //to ucinamy ostatni znak
//   }
// }

// const inputEl = document.querySelector('input');
// inputEl.addEventListener('paste', saveNumbers);

// function saveNumbers(e) {
//   e.preventDefault();

//   let inputValue = '';
//   const userData = e.clipboardData.getData('Text');
//   // pobieram dane ze schowka

//   for (const char of userData) {
//     inputValue += isNaN(char) ? '' : char;
//     // zapisuje tylko liczny
//   }
//   e.target.value = inputValue;
//   // przypisuje tylko liczby
// }

// const btnEl = document.querySelector('button');
// btnEl.addEventListener('click', changeInputType);

// function changeInputType(e) {
//   const defaultType = 'password';
//   const inputEl = e.target.previousElementSibling;
//   const currentType = inputEl.getAttribute('type');
//   if (currentType === defaultType) {
//     // jesli [type] jest równe [password]
//     inputEl.removeAttribute('type');
//     // usuwam atrybut [type], czyli ustawiam domyslna wartosc, tj, [text]
//   } else {
//     inputEl.setAttribute('type', defaultType);
//   }
// }

// const timeEl = document.querySelector('input[name="time"]');
// const formEl = document.querySelector('form');
// formEl.addEventListener('submit', handleSubmit);

// function handleSubmit(e) {
//   e.preventDefault();
//   timeEl.value = e.timeStamp;
//   console.log(timeEl.value);
//   // w momencie wyslania formularza aktualizuje [input] o nazwie [time], ktory przechowuje czas w milisekundach, jaki uplynal od uruchomienai strony do momentu wyslania formularza
// }

// const fileEl = document.querySelector('input');
// fileEl.addEventListener('change', showInfoFile);

// function showInfoFile(e) {
//   const file = e.target.files[0];
//   //pobieram informacje o wybranym pliku
//   console.log(file.name, file.size, file.type);
// }

// const fileEl = document.querySelector('input');
// fileEl.addEventListener('change', readFile);
// function readFile(e) {
//   const file = e.target.files[0];
//   if (file && file.type.includes('image')) {
//     const reader = new FileReader();

//     readFile.onload = function (readerEvemt) {
//       const newImg = document.createElement('img');
//       newImg.src = readerEvemt.target.result;

//       document.body.appendChild(newImg);
//     };
//     reader.readAsDataURL(file);
//   }
// }

// const pElement = document.querySelector('p');
// const fileEl = document.querySelector('input');
// fileEl.addEventListener('change', readFile);

// function readFile(e) {
//   const file = e.target.files[0];
//   if (file && file.type.includes('text')) {
//     const reader = new FileReader();
//     reader.onload = function (readerEvent) {
//       const content = readerEvent.target.result;
//       pElement.textContent = content;
//     };
//     reader.readAsText(file, 'UTF-8');
//   } else {
//     alert('Wybierz plik tekstowy!');
//   }
// }
// const labelEl = document.querySelector('label');
// const sizeList = document.querySelectorAll('[type="radio"]');

// labelEl.addEventListener('click', showSizes);
// // wykorzystuje propagacje eventu

// function showSizes(e) {
//   sizeList.forEach(function (e) {
//     console.log(e.value, ' => ', e.checked);
//   });
// }
// const formEl = document.querySelector('form');
// formEl.addEventListener('submit', handleSubmit);

// function handleSubmit(e) {
//   e.preventDefault();

//   const confirm = e.target.elements['confirm'];
//   // wyszukuje element o nazwie [confirm]
//   if (!confirm.checked) {
//     // jesli [checkbox] nie jest zaznaczony
//     const numberAgreement = confirm.value;
//     // pobieram wartosc dla [input]
//     alert('Confirm agreement no: ' + numberAgreement);
//     // wyswietlam alert
//   } else {
//     alert('Thank you! Data was send.');
//   }
// }

// const defaultRangeValue = 50;
// const spanEl = document.querySelector('span');
// const rangeEl = document.querySelector('input');
// rangeEl.addEventListener('mouseover', showValue);
// rangeEl.addEventListener('change', showValue);
// spanEl.innerText = defaultRangeValue;
// rangeEl.value = defaultRangeValue;

// function showValue(e) {
//   const isMouseMoveEvent = e.type === 'mouseover';
//   const isMouseLeftButtonPress = e.buttons === 1;
//   if ((isMouseMoveEvent && isMouseLeftButtonPress) || !isMouseMoveEvent) {
//     spanEl.innerText = e.target.value;
//   }
// }

// const colorEl = document.querySelector('input');
// colorEl.addEventListener('change', changeBgColor);

// function changeBgColor(e) {
//   const body = document.body;
//   const color = e.target.value;
//   body.style.backgroundColor = color;
//   body.style.color = invertColor(color);
// }
// function invertColor(hex) {
//   let color = '#';
//   for (let i = 1; i <= 6; i = i + 2) {
//     const dec = 255 - parseInt(hex.substr(i, 2), 16);
//     color += (dec < 16 ? '0' : '') + dec.toString(16);
//   }
//   return color;
// }

// const selectEl = document.querySelector('select');
// selectEl.addEventListener('change', showUser);

// function showUser(e) {
//   console.log(e.target.value, e.target.selectedIndex, selectEl.selectedOptions);
// }

// const selectEl = document.querySelector('select');
// selectEl.addEventListener('change', showOptionsInfo);

// function showOptionsInfo(e) {
//   const valueList = [];
//   const optionList = Array.from(e.target.options);
//   // tworze tablice z przekazanych danych
//   // dzieki temu bede mogl wykorzystac [forEach]
//   optionList.forEach(function (option) {
//     if (option.selected) {
//       // jestli element jest wybrany
//       valueList.push(option.value);
//       // to dodaj go do listy
//     }
//   });
//   console.log(valueList);
// }

// const textEl = document.querySelector('textarea');
// textEl.addEventListener('change', showText);
// textEl.addEventListener('input', prepareHeight);
// function showText(e) {
//   console.log(e.target.value);
//   // pobieram zawartosc, gdy sie ona zmieni. Tzn. w momencie opuszczenia pola
// }

// function prepareHeight(e) {
//   const item = e.target;
//   if (item.scrollHeight > item.offsetHeight) {
//     //wysokosc zawartosci textarea jest wieksza od wysokosci elementu
//     item.style.height = item.scrollHeight + 'px';
//     // zwiekszam wysokosc elementu
//   }
// }

// const spanEl = document.querySelector('span');
// const inputEl = document.querySelector('input');

// inputEl.addEventListener('input', checkEmail);

// function checkEmail(e) {
//   const self = e.target;
//   const email = self.value;
//   if (!email.includes('@')) {
//     // jesli adres email nie posiada znaku @ to...
//     self.style.border = '1px solid red';
//     spanEl.innerText = 'Where is @?';
//   } else {
//     self.style.border = '1px solid green';
//     spanEl.innerText = '';
//   }
// }

// const ulEl = document.querySelector('ul');
// const formEl = document.querySelector('form');
// formEl.addEventListener('submit', checkData);

// function checkData(e) {
//   const name = e.target.elements.name.value;
//   const email = e.target.elements.email.value;
//   const errors = [];
//   if (name.length === 0) {
//     errors.push('Field name is required!');
//   }
//   if (!email.includes('@')) {
//     errors.push('Email need @ sign!');
//   }
//   // cdn.
//   if (errors.length > 0) {
//     e.preventDefault();
//     // zatrzymaj wysylanie, gdy dane sa niepoprawne
//     ulEl.innerHTML = '';
//     // usun z [ul] poprzednie bledy
//     errors.forEach(function (err) {
//       const newLi = document.createElement('li');
//       newLi.innerText = err;
//       ulEl.appendChild(newLi);
//       // dodaj informacje o nowych bledach
//     });
//   }
//   // jesli dane sa poprawne, to je wyslij
// }
// const textEl = document.querySelector('textarea');
// const btnEl = document.querySelector('input');
// const ulEl = document.querySelector('ul');

// btnEl.addEventListener('click', addComment);

// function addComment(e) {
//   const text = textEl.value;
//   const newLi = document.createElement('li');
//   newLi.innerText = text;

//   ulEl.appendChild(newLi);
// }

// const inpList = document.querySelectorAll('input');
// const spanEl = document.querySelector('span');

// inpList.forEach(function (input) {
//   input.addEventListener('input', calculate);
// });

// function calculate(e) {
//   let sum = 0;
//   inpList.forEach(function (inp) {
//     sum += Number(inp.value);
//   });
//   spanEl.innerText = sum;
// }
// const inputEl = document.querySelector('input');

// inputEl.style.outline = 'none';
// // uwuam outline w celu lepszej prezentacji, docelowo outline wspiera UX, wiec warto go zostawic
// inputEl.addEventListener('input', checkAge);

// function checkAge(e) {
//   const age = e.target.value;

//   if (isNaN(age)) {
//     e.target.style.border = '1px solid red';
//   } else {
//     e.target.style.border = '1px solid green';
//   }
// }
