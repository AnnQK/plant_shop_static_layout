'use strict';
import './styles/main.scss';

// variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.modal-close');
const btnCancelModal = document.querySelector('.btn-cancel');
const btnOpenModal = document.querySelector('.modal-open');
const inputName = document.getElementById('input-name');
const inputPhone = document.getElementById('input-phone');
const btnSubmit = document.querySelector('.btn-send');
const tableData = document.querySelector('.table-data');

// Modal

// modal open
function openModalWindow(e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  document.body.classList.add('stop-scroll');
}

// close modal
function closeModalWindow(e) {
  e.preventDefault();
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  document.body.classList.remove('stop-scroll');
}

// Change UI
// function showTable() {
//   tableData.classList.remove('hidden');
//   document.querySelector('.modal__logo').classList.add('hidden');
//   document.querySelector('.modal__info').classList.add('hidden');
//   document.querySelector('.modal__form').style.display = 'none';
// }

// Form validation

// getting data
// async function showUsers() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/todos');
//   const data = await response.json();
//   const users = data.filter(
//     (item) => item.completed === false && item.userId === 5
//   );

//   users.forEach((user) => {
//     const newRow = document.createElement('tr');
//     newRow.insertAdjacentHTML(
//       'beforeend',
//       `<td>${user.userId}</td>
// <td>${user.id}</td>
// <td>${user.title}</td>
// <td>${user.complete}</td>
// `
//     );

//     tableData.append(newRow);
//   });

//   showTable();
// }

// function validation(e) {
//   e.preventDefault();
//   if (inputName.value.trim().length >= 3) {
//     nameInfo = inputName.value.trim();
//   } else {
//     throw Error('Invalid name!');
//   }
//   if (
//     (inputPhone.value.trim()[0] === '8' &&
//       inputPhone.value.trim().length === 11) ||
//     (inputPhone.value.trim().slice(0, 2) === '+7' &&
//       inputPhone.value.trim().length === 12)
//   ) {
//     phoneInfo = inputPhone.value.trim();
//   } else {
//     throw Error('Invalid phone number!');
//   }
//   showUsers();
// }

btnOpenModal.addEventListener('click', openModalWindow);
btnCancelModal.addEventListener('click', closeModalWindow);
btnCloseModal.addEventListener('click', closeModalWindow);
// btnSubmit.addEventListener('click', validation);
