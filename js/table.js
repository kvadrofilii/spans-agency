'use strict';

let ratioDB = [
	{
		season: 'Сезон 2021/2020',
		number: 5,
		gol: 218,
		pass: 146,
		golPass: 364,
		ratio: 89.40
	},
	{
		season: 'Сезон 2020/2019',
		number: 5,
		gol: 242,
		pass: 122,
		golPass: 364,
		ratio: 89.40
	},
	{
		season: 'Сезон 2019/2018',
		number: 6,
		gol: 173,
		pass: 164,
		golPass: 337,
		ratio: 89.40
	},
	{
		season: 'Сезон 2018/2017',
		number: 7,
		gol: 157,
		pass: 145,
		golPass: 302,
		ratio: 89.40
	},
	{
		season: 'Сезон 2017/2016',
		number: 9,
		gol: 174,
		pass: 102,
		golPass: 276,
		ratio: 89.40
	},
];
const table = document.querySelector('.ratio-section__table');
const sort = table.querySelectorAll('.ratio-section__title');
const ico = table.querySelectorAll('.ratio-section__sort-ico');
const key = ['number', 'gol', 'pass', 'golPass', 'ratio'];
let isSort = [false, false, false, false, false];


outputTable();

sort[1].addEventListener('click', () => {
	ico[0].classList.toggle('ratio-section__sort-ico_invert')
	cleanTable();
	sorting(0);
	outputTable();
});

sort[2].addEventListener('click', () => {
	ico[1].classList.toggle('ratio-section__sort-ico_invert')
	cleanTable();
	sorting(1);
	outputTable();
});

sort[3].addEventListener('click', () => {
	ico[2].classList.toggle('ratio-section__sort-ico_invert')
	cleanTable();
	sorting(2);
	outputTable();
});

sort[4].addEventListener('click', () => {
	ico[3].classList.toggle('ratio-section__sort-ico_invert')
	cleanTable();
	sorting(3);
	outputTable();
});

sort[5].addEventListener('click', () => {
	ico[4].classList.toggle('ratio-section__sort-ico_invert')
	cleanTable();
	sorting(4);
	outputTable();
});


function sorting(item) {
	isSort[item] = !isSort[item];
	isSort[item]
		?
		ratioDB = ratioDB.sort((x, y) => x[key[item]] - y[key[item]])
		:
		ratioDB = ratioDB.sort((x, y) => y[key[item]] - x[key[item]]);
}

function cleanTable() {
	const cell = table.querySelectorAll('.ratio-section__cell_output');
	cell.forEach((item) => {
		item.remove();
	})
}

function outputTable() {
	ratioDB.forEach((item) => {
		for (let key in item) {
			table.insertAdjacentHTML('beforeend',
				`<div class="ratio-section__cell ratio-section__cell_output"> ${item[key]}</li>`);
		}
	});
}
