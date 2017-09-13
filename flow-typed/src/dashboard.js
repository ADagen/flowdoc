/* eslint-disable max-len*/

/**
 * Тип данных репорта для графика дашборда по rewards
 * @typedef {Object} reportRewardsData
 * @property {number} reward_date reward_date
 * @property {number} amount amount
 * @property {number} volume_mln_usd volume_mln_usd
 * @property {number} volume_lots volume_lots
 * @property {number} reward reward
 * @property {number} reward_usd reward_usd
 * @property {number} orders_count orders_count
 */

declare type ReportRewardsData = {
	reward_date: number,
	amount: number,
	volume_mln_usd: number,
	volume_lots: number,
	reward: number,
	reward_usd: number,
	orders_count: number,
}

/**
 * Тип данных репорта для графика дашборда по clients
 * @typedef {Object} reportClientsData
 * @property {number} reg_date reg_date
 * @property {number} amount amount
 * @property {number} volume_mln_usd volume_mln_usd
 * @property {number} volume_lots volume_lots
 * @property {number} reward reward
 * @property {number} reward_usd reward_usd
 */

declare type ReportClientsData = {
	reg_date: number,
	amount: number,
	volume_mln_usd: number,
	volume_lots: number,
	reward: number,
	reward_usd: number,
}

/**
 * @typedef {Object} chartValues
 * @property {number} data значение для отображения на графике
 * @property {number} day день
 */

declare type ChartValues = {
	data: number,
	day: number,
}

declare type ChartValuesProps = $Shape<ReportRewardsData & ReportClientsData>

/**
 * @typedef {Object} chartProps
 * @property {string} id id графика
 * @property {MessageDescriptor} title текст в графике
 * @property {Array.<ChartValues>} values массиы данных по графику
 * @property {Array.<number>} verticalValues значения для вертикального legend
 * @property {Array.<number>} verticalHeights значения координат по высоте для вертикальных линий
 * @property {Array.<PolygonPointsType>} polylinePoints значения для линии графика
 * @property {Array.<string>} horizontalLegend значения для горизонтального legend
 * @property {number} width ширина svg
 * @property {number} height высота svg
 * @property {Function} setWidth установит ширину svg
 * @property {Function} setHeight установит высоту svg
 * @property {string} rewardIntegerPart целая часть числа для chart head
 * @property {string} rewardRestPart дробная часть числа для chart head
 * @property {string} rewardCurrency rewardCurrency
 * @property {number} rewardAmount rewardAmount
 * @property {number} clientsAmount clientsAmount
 * @property {Function} registerChild registerChild
 * @property {boolean} isResized isResized
 * @property {Function} setIsResized setIsResized
 */
declare type ChartProps = {
	id: string,
	title: MessageDescriptor,
	values: Array<ChartValues>,
	verticalValues: Array<number>,
	verticalHeights: Array<number>,
	polylinePoints: Array<PolygonPointsType>,
	horizontalLegend: Array<string>,
	width: number,
	height: number,
	setWidth: Function,
	setHeight: Function,
	rewardIntegerPart: string,
	rewardRestPart: ?string,
	rewardCurrency: string,
	rewardAmount: number,
	clientsAmount: number,
	registerChild: Function,
	isResized: boolean,
	setIsResized: Function,
	total: React.Node,
	totalText: string,
}

/**
 * @typedef {Object} dashboardProps
 * @property {Array.<ReportRewardsData>} rewardsDate массив для графика по reward
 * @property {ReportRewardsData} rewardsTotals объект totals для графика по reward
 * @property {Array.<ReportClientsData>} clientsData массив данных графика по clients
 * @property {ReportClientsData} clientsTotals объект totals для графика по clients
 * @property {MessageDescriptor} rewardsChartMsg текстовые сообщения для графика по reward
 * @property {MessageDescriptor} clientsChartMsg текстовые сообщения для графика по clients
 * @property {ChartProps} rewardsChartProps rewardsChartProps
 * @property {ChartProps} clientsChartProps clientsChartProps
 * @property {number} rewardAmount rewardAmount
 * @property {number} clientsAmount clientsAmount
 * @property {string} rewardCurrency rewardCurrency
 */

declare type DashboardProps = {
	rewardsData: Array<ReportRewardsData>,
	rewardsTotals: ReportRewardsData,
	clientsData: Array<ReportClientsData>,
	clientsTotals: ReportClientsData,
	rewardsChartMsg: MessageDescriptor,
	clientsChartMsg: MessageDescriptor,
	rewardsChartProps: ChartProps,
	clientsChartProps: ChartProps,
	rewardAmount: number,
	clientsAmount: number,
	rewardCurrency: string,
}

/**
 * @typedef {Object} dashboardToolbarProps
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

declare type DashboardToolbarProps = {
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
}

/**
 * @typedef {Object} dashboardDatePickerProps
 * @property {Object} startDate дата с которой начинается временный промежуток выбора даных
 * @property {Object} endDate дата которой заканчивается временный промежуток выбора даных
 * @property {string} focusedInput имя инпута в datepicker на котором установлен фокус
 * @property {Function} handleDateFocus колбэк на изменение фокуса на инпуте datepicker
 * @property {Function} handleDatesChange колбэк на изменение дат в datepicker
 * @property {Function} handleDateClose колбэк на закрытие datepicker
 * @property {Function} isFutureDay ограничивает возможность выбора дат больших чем текущая
 */

declare type DashboardDatePickerProps = {
	startDate: moment$Moment,
	endDate: moment$Moment,
	focusedInput: null | 'startDate' | 'endDate',
	handleDateFocus: Function,
	handleDatesChange: Function,
	handleDateClose: Function,
	isFutureDay: Function,
}

/**
 * @typedef {Object} dashboardBalanceProps
 * @property {string} rewardWholePart rewardWholePart
 * @property {string} rewardDecimalPart rewardDecimalPart
 * @property {string} rewardCurrency rewardCurrency
 * @property {string} rewardCurrency rewardCurrency
 * @property {string} rewardTotal rewardTotal
 * @property {number} rewardAmount rewardAmount
 * @property {string} equityCurrency equityCurrency
 * @property {number} equityAmount equityAmount
 */

declare type DashboardBalanceProps = {
	rewardWholePart: string,
	rewardDecimalPart: string,
	rewardCurrency: string,
	rewardTotal: string,
	rewardAmount: number,
	equityCurrency: string,
	equityAmount: number,
	rewardIntegerPart: string,
	rewardRestPart: string,
	rewardTotal: string,
}

/**
 * @typedef {Object} dashboardLevelProps
 * @property {string} status status
 * @property {string} percentage percentage
 */

declare type DashboardLevelProps = {
	status: string,
	percentage: string,
	rewardTotal: string,
}

/**
 * @typedef {Object} dashboardPartnerLinkProps
 * @property {MessageDescriptorMap} messages текстовые сообщения для компонента
 * @property {string} partnerLink партнерская ссылка
 * @property {boolean} isSnackOpen флаг определяющий показывать или нет попап результата
 *   копировании ссылки
 * @property {MessageDescriptor} snackMsg объект текстового сообщения для попапа с результатом
 *   копирования ссылки
 * @property {Function} copyLink копирует ссылку
 * @property {Function} openSnack открывает попап с результатом копирования
 * @property {Function} closeSnack закрывает попап с результатом копирования
 * @property {Function} setIsSnackOpen устанваливает isSnackOpen в локальном стейте
 * @property {Function} setSnackMsg устанавливает snackMsg в локальном стейте
 */

declare type DashboardPartnerLinkProps = {
	messages: MessageDescriptorMap,
	partnerLink: string,
	isSnackOpen: boolean,
	snackMsg: MessageDescriptor,
	copyLink: Function,
	openSnack: Function,
	closeSnack: Function,
	setIsSnackOpen: Function,
	setSnackMsg: Function,
}

/**
 * @typedef {Object} dashboardDatesProps
 * @property {string} from время from в формате YYYY-MM-DD
 * @property {string} to время to в формате YYYY-MM-DD
 */

declare type DashboardDatesProps = {
	from: string,
	to: string,
}

/**
 * @typedef {Object} polygonPointsType
 * @property {number} [left] left
 * @property {number} [top] top
 */
declare type PolygonPointsType = {
	left?: number,
	top?: number,
}

/**
 * Данные представляющие максимальное и минимальное значения
 * @typedef {Object} minMaxBound
 * @property {number} maxVal max
 * @property {number} minVal min
 */
declare type MinMaxBound = {
	maxVal: number,
	minVal: number,
}
