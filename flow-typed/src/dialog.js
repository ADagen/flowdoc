/**
 * @typedef {Object} dialogErrorPropsType
 * @property {boolean} isDialogOpen флаг определяющий показывать или нет диалог
 * @property {string} dialogMsg сообщение для диалога
 * @property {Function} setOpen хэндлер для стейта
 * @property {Function} handleOpen callback на открытие диалога
 * @property {Function} handleClose callback на закрытие диалога
 * @property {Function} uiHideDialog action закрытия диалога
 */

declare type DialogErrorPropsType = {
	isDialogOpen: boolean,
	dialogMsg: string,
	setOpen: Function,
	handleOpen: Function,
	handleClose: Function,
	uiHideDialog: Function,
}
