/**
 * @typedef {Object} restErrorPropsType
 * @property {string} name имя ошибки
 * @property {Object} error объект ошибки
 * @property {Object} payload объект данных с котороми словили ошибку
 */

declare type RestErrorPropsType = {
	name : string,
	error : Object,
	payload? : ?Object,
}

/**
 * @typedef {Object} applyErrorPropsType
 * @property {string} name name
 * @property {Object} error error
 * @property {Object} payload payload
 */

declare type ApplyErrorPropsType = {
	name: string,
	error: Object,
	payload?: ?Object
}
