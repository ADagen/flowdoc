/**
 * @typedef {Object} headerProps
 * @property {boolean} authorized - флаг авторизованности, для страницы логина всегда false.
 * При false не надо показывать менюшку.
 */
declare type HeaderProps = {
	sendLogout: Function,
	navigateLogin: Function,
	user: Object,
	startChat: Function,
	authorized: boolean,
	toggleOpen: Function,

	items: Array<HeaderMenuItemConfig>,
	menuIsOpen: boolean,
	toggleMenu: Function,
}

/**
 * @typedef {Object} menuType
 * @property {Array} items
 * @property {string} [className]
 * @property {Function} markSelectedItem - обработчик, который помечает selected отдельный пункт
 * @property {Function} touchSelected - обработчик, который помечает selected пункты меню
 * @property {string} [selected] - показывает какой пункт меню теперь выбран
 */
declare type MenuType = {
	items: Array<HeaderMenuItemConfig>,
	selected?: MenuItemName,
	markSelectedItem: HeaderMenuItemConfig => HeaderMenuItemConfig,
	touchSelected?: () => Array<any>,
	className?: string,
}

/**
 * Тип пейлоада для события смены выбранного пункта меню.
 * @typedef {Object} menuSelectedPayload
 * @property {string} selected - показывает какой пункт меню теперь выбран
 */
declare type MenuSelectedPayload = {
	selected: MenuItemName,
}

/**
 * Перечисление с возможными значениями пунктов меню.
 * Значение 'none' необходимо для состояния работы вне основного спейса ЛК.
 * (например страница логина, регистрации, 500-ых и 400-ых)
 * @typedef {string} menuItemName
 */
declare type MenuItemName = 'none' | 'Dashboard' | 'Reports' | 'Promo' | 'Support'

/**
 * Тип для описания пункта меню для конфига, передаваемого в Header.js в компоненты меню
 * @typedef {Object} headerMenuItemConfig
 * @property {string} text - показываемый в пункте меню текст
 * @property {MenuItemName} id - для установки в html-атрибут id
 * @property {MenuItemName} tag - строка, передаваемая обработчику и врапперу
 * @property {boolean} [selected] - флаг показывает, выбран ли сейчас пункт меню
 */
declare type HeaderMenuItemConfig = {
	text: string,
	id: MenuItemName,
	tag: MenuItemName,
	url: string,
	selected?: boolean,
}
