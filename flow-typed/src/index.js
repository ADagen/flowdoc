import * as React from 'react'

/**
 * Тип данных для svg иконки
 * @typedef {Object} iconSvgType
 * @property {string} [className] class name
 * @property {Object} [style] объект со стилями для реакт компонента
 */
declare type IconSvgType = {
	className?: string,
	style?: Object,
}

/**
 * Тип данных для компонента кнопки
 * @typedef {Object} buttonProps
 * @property {Function} onClick onClick
 * @property {React.Node} children children
 * @property {boolean} isDisabled isDisabled
 * @property {string} className className
 */
declare type ButtonProps = {
	onClick: Function,
	children: React.Node,
	isDisabled?: boolean,
	className?: string,
	type?: string,
}

/**
 * Дополнительный тип отображения для кнопки без бордера
 * @typedef {string} buttonNoBorderType
 * @example
 * link - текст кнопки с нижним подчеркиванием
 */
declare type ButtonNoBorderType = 'link' | null


/**
 * Тип данных для компонента кнопки
 * @typedef {Object} buttonNoBorderProps
 * @property {Function} onClick onClick
 * @property {React.Node} children children
 * @property {boolean} isDisabled isDisabled
 * @property {string} className className
 * @property {ButtonNoBorderType} type дополнительный тип отображения кнопки
 */
declare type ButtonNoBorderProps = ButtonProps & {
	type?: ButtonNoBorderType,
}

/**
 * Тип данных для опций форматирования числа
 * @typedef {Object} formatNumberOptions
 * @param {number} decimal length of decimal
 * @param {number} whole length of whole part
 * @param {string} wholeDelimiter sections delimiter
 * @param {string} decimalDelimiter decimal delimiter
 */
declare type FormatNumberOptions = {
	decimal?: number,
	whole?: number,
	wholeDelimiter?: string,
	decimalDelimiter?: string,
}

/**
 * Тип данных для компонента FormattedNum
 * @typedef {Object} formattedNumProps
 * @property {number} number число которое нужно отобразить
 * @property {FormatNumberOptions} options опции для formatNumber
 * @property {number} whole целая часть числа для отображения
 * @property {number} float дробная часть числа для отображения
 * @property {Object} formatOptions опции для функции форматированния числа(formatNumber)
 */
declare type FormattedNumProps = {
	number: number,
	decimal: number,
	wholeDelimiter: string,
	decimalDelimiter: string,
	whole: number,
	integer: number,
	float: number,
	text: string,
	className: string,
	classNameWhole: string,
	classNameFloat: string,
}
