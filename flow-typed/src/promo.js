/**
 * @typedef {Object} promoProps
 * @property {Array.<string>} promoList
 * @property {Array.<string>} themesList
 * @property {Array.<string>} sizesList
 * @property {Array.<string>} availableLocales
 * @property {string} currentLocale
 * @property {Object} localeDict
 * @property {string} size
 * @property {string} lang
 * @property {string} type
 * @property {string} theme
 * @property {number} showId
 * @property {number} position
 * @property {Function} handleChangeSize
 * @property {Function} handleChangeLang
 * @property {Function} handleChangeType
 * @property {Function} handleChangeTheme
 * @property {Function} setShowId
 * @property {Function} setPosition
 */
declare type PromoProps = {
	promoList         : Array<string>,
	themesList        : Array<string>,
	sizesList         : Array<string>,
	availableLocales  : Array<string>,
	currentLocale     : string,
	localeDict        : Object,
	size              : string,
	lang              : string,
	type              : string,
	theme             : string,
	showId            : number,
	position          : number,
	handleChangeSize  : Function,
	handleChangeLang  : Function,
	handleChangeType  : Function,
	handleChangeTheme : Function,
	setShowId         : Function,
	setPosition       : Function,
}

/**
 * @typedef {Object} bannerTypesMap
 * @property {any} flash
 * @property {mixed} flash
 */
declare type BannerTypesMap = {
	flash  : any,
	static : any,
}

/**
 * @typedef {('flash'|'static')} bannerType
 */
declare type BannerType = $Keys<BannerTypesMap>

/**
 * @typedef {Object} banner
 * @property {number} id
 * @property {string} theme
 * @property {string} lang
 * @property {string} src
 * @property {string} size
 * @property {string} source
 * @property {number} height
 * @property {number} width
 * @property {BannerType} type
 */
declare type Banner = {
	id     : number,
	theme  : string,
	lang   : string,
	src    : string,
	size   : string,
	source : string,
	height : number,
	width  : number,
	type   : BannerType,
}

/**
 * @typedef {Object} promoBannerPropType
 * @property {Banner} banner
 * @property {boolean} shouldFitToSize
 * @property {Function} showCodeBar
 * @property {boolean} inConfigurator флаг того что баннер показывается в конфигураторе
 * @property {Function} registerChild сохраняет ref
 * @property {Object} clientRect объект getBoundingClientRect элемента враппера
 * @property {string} id id баннера
 * @property {string} src src баннера
 * @property {string} width width баннера
 * @property {string} height height баннера
 */
declare type PromoBannerPropType = {
	banner: Banner,
	shouldFitToSize: boolean,
	showCodeBar: Function,
	inConfigurator: boolean,
	clientRect?: Object,
	id?: string,
	src?: string,
	width?: number,
	height?: number,
	makeRightSize?: Function,
}

/**
 * @typedef {Object} flashBannerOwnProps
 * @property {Object} currentRef currentRef
 * @property {Function} setCurrentRef currentRef
 * @property {Function} registerChild registerChild
 * @property {Function} onDidMount onDidMount
 * @property {Function} setWidth setWidth
 * @property {Function} setHeight setHeight
 * @property {Function} setIsResized setIsResized
 */
declare type FlashBannerOwnProps = {
	currentRef    : Element,
	setCurrentRef : Function,
	registerChild : Function,
	onDidMount    : Function,
	setWidth      : Function,
	setHeight     : Function,
	isResized     : boolean,
	setIsResized  : Function,
}

declare type FlashBannerPropType = PromoBannerPropType & FlashBannerOwnProps

/**
 * @typedef {Object} optionsListProps
 * @property {mixed} currentValue
 * @property {Array} list
 * @property {Array} availableList
 * @property {Function} pickAnother
 */
// TODO: вместо any тут должен быть специальный тип, который объединяет значения
declare type OptionsListProps = {
	currentValue  : any,
	list          : Array<*>,
	availableList : Array<*>,
	pickAnother   : Function,
}

/**
 * @typedef {Object} promoCodeBarProps
 * @property {string} id
 * @property {Function} showCodeBar
 * @property {Function} close
 * @property {Banner} banner
 * @property {Banner} temporalBanner
 * @property {string} className
 * @property {mixed} summary
 * @property {Array.<Banner>} promoList
 * @property {Array.<Banner>} themed
 * @property {Array.<string>} sizesList
 * @property {Array.<string>} langsList
 * @property {Function} pickAnotherSize
 * @property {Function} pickAnotherLang
 * @property {Function} setTemporalBanner
 * @property {string} currentLang
 * @property {string} currentSize
 * @property {Function} setCurrentLang
 * @property {Function} setCurrentSize
 * @property {Array.<string>} availableLangs
 * @property {Array.<string>} availableSizes
 * @property {function(PromoCodeBarProps)} setAvailableLangs
 * @property {boolean} isSnackOpen
 * @property {function(PromoCodeBarProps)} setIsSnackOpen
 * @property {string} snackMsg
 * @property {function(PromoCodeBarProps)} setSnackMsg
 * @property {function(PromoCodeBarProps)} openSnack
 * @property {function(PromoCodeBarProps)} closeSnack
 * @property {function(PromoCodeBarProps)} copyLink
 */
declare type PromoCodeBarProps = {
	id              : string,
	showCodeBar     : Function,
	close           : Function,
	banner          : Banner,
	temporalBanner  : Banner,
	className       : string,
	summary         : any,
	promoList       : Array<Banner>,
	themed          : Array<Banner>,
	sizesList       : Array<string>,
	langsList       : Array<string>,
	pickAnotherSize : Function,
	pickAnotherLang : Function,
	setTemporalBanner : Function,
	currentLang     : string,
	currentSize     : string,
	setCurrentLang  : Function,
	setCurrentSize  : Function,
	availableLangs  : Array<string>,
	availableSizes  : Array<string>,
	setAvailableLangs : Function,
	setAvailableSizes : Function,
	isSnackOpen       : boolean,
	setIsSnackOpen    : Function,
	snackMsg          : MessageDescriptor,
	setSnackMsg       : Function,
	openSnack         : Function,
	closeSnack        : Function,
	copyLink          : Function,
}

/**
 * @typedef {Object} promoListProps
 * @property {number} showId
 * @property {Function} setShowId
 * @property {number} position
 * @property {Function} setPosition
 * @property {Array.<Banner>} promoList
 * @property {Array.<Banner>} filteredList
 * @property {Object} localeDict
 * @property {Array.<string>} sizesList
 * @property {Array.<string>} themesList
 * @property {Banner} temporalBanner
 * @property {Function} setTemporalBanner
 */
declare type PromoListProps = {
	showId        : number,
	setShowId     : Function,
	position      : number,
	setPosition   : Function,
	promoList     : Array<Banner>,
	filteredList  : Array<Banner>,
	localeDict    : Object,
	sizesList     : Array<string>,
	themesList    : Array<string>,
	temporalBanner : Banner,
	setTemporalBanner : Function,
}

/**
 * @typedef {Object} promoStoreState
 * @property {Array.<Banner>} data
 * @property {{ count : number }} totals
 * @property {boolean} error
 * @property {boolean} loaded
 * @property {boolean} loading
 * @property {Array.<string>} [availableTypes]
 * @property {Array.<string>} [availableLangs]
 * @property {Array.<string>} [availableSizes]
 */
declare type PromoStoreState = {
	data    : Array<Banner>,
	totals  : { count : number },
	error   : boolean,
	loaded  : boolean,
	loading : boolean,
	availableTypes : ?Array<string>,
	availableLangs : ?Array<string>,
	availableSizes : ?Array<string>,
}

/**
 * @typedef {Object} bannerButtonProps
 * @property {Function} onTouchTap
 * @property {Function} onTouchTapHandler
 * @property {number} bannerId
 */
declare type BannerButtonProps = {
	onTouchTap : Function,
	onTouchTapHandler : Function,
	bannerId   : $PropertyType<Banner, 'id'>,
}
