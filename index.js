const parseFlow = require('flow-parser').parse
const parseJsdoc = require('doctrine').parse

const tp = `
/**
 * @typedef {Object} dashboardToolbarPropsType
 * @property {Object} startDate дата с которой начинается временный промежуток выбора даных
 * @property {Object} endDate дата которой заканчивается временный промежуток выбора даных
 * @property {string} focusedInput имя инпута в datepicker на котором установлен фокус
 * @property {Function} handleDateFocus колбэк на изменение фокуса на инпуте datepicker
 * @property {Function} handleDatesChange колбэк на изменение дат в datepicker
 * @property {Function} handleDateClose колбэк на закрытие datepicker
 * @property {Function} loadDashboard redux action на загрузку данных
 * @property {Function} setStartDate устанавливает startDate в локакальном стейте
 * @property {Function} setEndDate устанавливает setEndDate в локакальном стейте
 * @property {Function} setFocusedInput устанавливает focusedInput в локакальном стейте
 * @property {Function} isFutureDay ограничивает возможность выбора дат больших чем текущая
 */
declare type DashboardToolbarPropsType = {
	startDate: moment$Moment,
	endDate: moment$Moment,
	focusedInput: null | 'startDate' | 'endDate',
	handleDateFocus: Function,
	handleDatesChange: Function,
	handleDateClose: Function,
	loadDashboard: Function,
	setStartDate: Function,
	setEndDate: Function,
	setFocusedInput: Function,
	isFutureDay: Function,
}`
const res = parseFlow(tp, {
	types: true,
})
const jsdoc = parseJsdoc(tp, { unwrap: true })

console.log(jsdoc)
console.log(res)
console.log(res.body[0].right.properties.length)
console.log(res.body[0].right.properties[2])
