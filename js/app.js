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

const formEl = document.querySelector('form');

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
