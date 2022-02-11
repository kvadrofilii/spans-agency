'use strict';

const hamburgerList = document.querySelector('.hamburger__list');
const hamburgerBtn = document.querySelector('.hamburger__btn');

hamburgerBtn.addEventListener('click', () => {
	hamburgerList.classList.toggle("hamburger__toggle");
	hamburgerBtn.classList.toggle("hamburger__toggle");
})

hamburgerList.addEventListener('click', (event) => {
	const target = event.target;

	if (target.tagName !== 'A') return;
	hamburgerList.classList.toggle("hamburger__toggle");
	hamburgerBtn.classList.toggle("hamburger__toggle");
})
