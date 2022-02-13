'use strict';

let ratioDB = [
	{
		season: 'Сезон 2021/2020',
		number: 5,
		gol: 218,
		pass: 146,
		golPass: 364,
		ratio: 89.80
	},
	{
		season: 'Сезон 2020/2019',
		number: 5,
		gol: 242,
		pass: 122,
		golPass: 364,
		ratio: 89.20
	},
	{
		season: 'Сезон 2019/2018',
		number: 6,
		gol: 173,
		pass: 164,
		golPass: 337,
		ratio: 89.30
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
		ratio: 89.10
	},
];
const table = document.querySelector('.table');
const sort = table.querySelectorAll('.table__title');
const ico = table.querySelectorAll('.table__sort-ico');
const key = ['number', 'gol', 'pass', 'golPass', 'ratio'];
let isSort = [false, false, false, false, false];

// Дефолтный вывод таблицы
outputTable();

// Обработчики событий для сортировки
for (let i = 0; i < 5; i++) {
	sort[i + 1].addEventListener('click', () => {
		ico[i].classList.toggle('table__sort-ico_invert')
		cleanTable();
		sorting(i);
		outputTable();
	});
}

// Сортировка таблицы
function sorting(item) {
	isSort[item] = !isSort[item];
	isSort[item]
		?
		ratioDB = ratioDB.sort((x, y) => x[key[item]] - y[key[item]])
		:
		ratioDB = ratioDB.sort((x, y) => y[key[item]] - x[key[item]]);
}

// Удаление всех ячеек таблицы кроме заголовка
function cleanTable() {
	const cell = table.querySelectorAll('.table__cell_output');
	cell.forEach((item) => {
		item.remove();
	})
}

// Вывод всех ячеек таблицы кроме заголовка
function outputTable() {
	ratioDB.forEach((item) => {
		for (let key in item) {
			table.insertAdjacentHTML('beforeend',
				`<div class="table__cell table__cell_output"> ${item[key]}</li>`);
		}
	});
}
