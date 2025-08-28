const monthsRuArr = [
	"Января",
	"Февраля",
	"Марта",
	"Апреля",
	"Мая",
	"Июня",
	"Июля",
	"Августа",
	"Сентября",
	"Октября",
	"Ноября",
	"Декабря",
];
const zeroPad = (number: number) => number.toString().padStart(2, "0");

export const formatDate = (date: Date, format = "DD.MM.YYYY") => {
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();

	return format
		.replace("DD", zeroPad(day))
		.replace("MMMM", monthsRuArr[month - 1])
		.replace("MM", zeroPad(month))
		.replace("YYYY", year.toString())
		.replace("hh", zeroPad(hours))
		.replace("mm", zeroPad(minutes))
		.replace("ss", zeroPad(seconds));
};

// 'DD.MM.YYYY HH:mm:ss'
