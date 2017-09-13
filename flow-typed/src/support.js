declare type SupportOnlineLangProps = {
	online: boolean,
	Local: Array<string>,
	GTM: Array<string>,
}

declare type SupportOnlineProps = {
	[key: string]: SupportOnlineLangProps
}

declare type SupportProps = {
	startChat: Function,
	onClickPhone: Function,
	onClickEmail: Function,
	onClickChat: Function,
	getTableData: Function,
	data: Object,
	supportOnline: SupportOnlineProps,
	phone: string,
	email: string,
}
