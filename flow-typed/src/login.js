import * as React from 'react'

/**
 * @typedef {Object} loginProps
 * @property {string} title
 * @property {*} user
 * @property {Function} sendGenerateCaptcha
 * @property {Function} sendLogin
 * @property {Function} handleSendLogin
 * @property {Function} handleSendForgot
 * @property {Function} handleSendRegister
 * @property {string} login
 * @property {string} password
 * @property {string} captcha
 * @property {Function} handleChangeLogin
 * @property {Function} handleChangePassword
 * @property {Function} handleChangeCaptcha
 * @property {Function} handleKeyDownCaptcha
 */
declare type LoginProps = {
	title: string,
	user: any,
	sendGenerateCaptcha: Function,
	sendLogin: Function,
	handleSendLogin: Function,
	handleSendForgot: Function,
	handleSendRegister: Function,
	login: string,
	password: string,
	captcha: string,
	handleChangeLogin: Function,
	handleChangePassword: Function,
	handleChangeCaptcha: Function,
	handleKeyDownCaptcha: Function,
	handleGenerateCaptcha: Function,
}

/**
 * @typedef {Object} loginEmailProps
 * @property {Children} children children
 * @property {string} login login
 * @property {Function} handleChangeLogin cb on change login
 */
declare type LoginEmailProps = {
	children?: React.ChildrenArray<any>,
	login: string,
	handleChangeLogin: Function,
}

/**
 * @typedef {Object} loginCaptchaProps
 * @property {Children} children children
 * @property {string} captcha captcha
 * @property {string} captchaUrl captchaUrl
 * @property {Function} handleChangeCaptcha cb on change captcha
 * @property {Function} handleGenerateCaptcha cb on generate captcha
 */
declare type LoginCaptchaProps = {
	children?: React.ChildrenArray<any>,
	captcha: string,
	captchaUrl: string,
	handleChangeCaptcha: Function,
	handleGenerateCaptcha: Function,
	handleKeyDownCaptcha: Function,
}

/**
 * @typedef {Object} loginEmailProps
 * @property {Children} children children
 * @property {string} password password
 * @property {Function} handleChangePassword cb on change password
 */
declare type LoginPasswordProps = {
	children?: React.ChildrenArray<any>,
	password: string,
	handleChangePassword: Function,
}
