'use strict';

const body = document.querySelector('body');
const pageHeader = document.querySelector('.page-header');
const hamburgerList = pageHeader.querySelector('.hamburger__list');
const hamburgerBtn = pageHeader.querySelector('.hamburger__btn');

hamburgerBtn.addEventListener('click', () => {
	hamburgerList.classList.toggle("hamburger__toggle");
	pageHeader.classList.toggle("hamburger__toggle");
	body.classList.toggle("hamburger__toggle");
})

hamburgerList.addEventListener('click', (event) => {
	const target = event.target;

	if (target.tagName !== 'A') return;
	hamburgerList.classList.toggle("hamburger__toggle");
	pageHeader.classList.toggle("hamburger__toggle");
	body.classList.toggle("hamburger__toggle");
})
