import { grey, green, red, orange, blue, yellow, amber } from "@material-ui/core/colors";
import { APP_COLOR1, APP_COLOR2, APP_COLOR4 } from "../configs";

export const APP_SETTINGS = JSON.parse(localStorage.getItem('APP_SETTINGS')) !== null ? JSON.parse(localStorage.getItem('APP_SETTINGS')) : [{}];

export const drawerWidth = 240;
export const customStyle = (theme) => ({
    root: {
        display: 'flex',
        background: grey[200],
        '& .styles_scoreValue__2dBgK': {
            bottom: '130px !important',
            [theme.breakpoints.down('md')]: {
                bottom: '0px !important',
            }
        }
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0,0,0,0.7)'
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    cardWithdraw: {
        background: '#fff',
        color: grey[800],
        width: '40%',
        boxShadow: '2px 2px 3px' + grey[400],
        [theme.breakpoints.down('md')]: {
            width: '95%',
        }
    },
    tables: {
        [theme.breakpoints.down('md')]: {
            overflowX: 'auto'
        },
        '& .MuiGrid-container': {
            [theme.breakpoints.down('md')]: {
                width: '200%'
            },
        },
        '& span': {
            [theme.breakpoints.down('md')]: {
                position: 'relative'
            },
        }
    },
    tables2: {
        [theme.breakpoints.down('md')]: {
            overflowX: 'auto'
        },
        '& .MuiGrid-container': {
            [theme.breakpoints.down('md')]: {
                width: '250%'
            },
        },
        '& span': {
            [theme.breakpoints.down('md')]: {
                position: 'relative'
            },
        }
    },
    tables3: {
        [theme.breakpoints.down('md')]: {
            overflowX: 'auto'
        },
        '& .MuiGrid-container': {
            [theme.breakpoints.down('md')]: {
                width: '350%'
            },
        },
        '& span': {
            [theme.breakpoints.down('md')]: {
                position: 'relative'
            },
        }
    },
    cardHeaderSubtitle: {
        [theme.breakpoints.down('md')]: {
            margin: '2vh 3vh !important'
        },
    },
    hidden: {
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
    },
    btnFullwidth: {
        [theme.breakpoints.down('md')]: {
            width: '100% !important'
        },
    },
    view: {
        display: 'flex',
        float: 'right',
        marginTop: '0px',
        cursor: 'pointer'
    },
    grow: {
        flexGrow: 1
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        background: APP_SETTINGS.APP_COLOR1 ? APP_SETTINGS.APP_COLOR1 : APP_COLOR1
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    button: {
        color: '#fff',
        boxShadow: '0 0 0 0 #fff',
        background: APP_SETTINGS.APP_COLOR1 ? APP_SETTINGS.APP_COLOR1 : APP_COLOR1,
        '&:hover': {
            background: APP_SETTINGS.APP_COLOR2 ? APP_SETTINGS.APP_COLOR2 : APP_COLOR2
        },
        '&.Mui-disabled': {
            background: '#ddd',
        }
    },
    button2fa: {
        width: '25%',
        color: '#fff',
        boxShadow: '0 0 0 0 #fff',
        background: APP_SETTINGS.APP_COLOR1 ? APP_SETTINGS.APP_COLOR1 : APP_COLOR1,
        '&:hover': {
            background: APP_SETTINGS.APP_COLOR2 ? APP_SETTINGS.APP_COLOR2 : APP_COLOR2
        },
        '&.Mui-disabled': {
            background: '#ddd',
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        }
    },
    button2faCancel: {
        width: '25%',
        color: '#666',
        boxShadow: '0 0 0 0 #fff',
        marginTop: '1vh',
        background: '#ddd',
        '&:hover': {
            background: '#ccc',
        },
        '&.Mui-disabled': {
            background: '#ccc',
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        }
    },
    status2FADisabled: {
        width: '30%',
        margin: '0 35% 3vh',
        padding: '1vh',
        textAlign: 'center',
        borderRadius: '30px',
        background: red[100],
        color: red[900],
        border: '1px solid ' + red[600],
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        }
    },
    status2FAEnabled: {
        width: '30%',
        margin: '0 35% 3vh',
        padding: '1vh',
        textAlign: 'center',
        borderRadius: '30px',
        background: green[100],
        color: green[900],
        border: '1px solid ' + green[600],
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        }
    },
    flagForm: {
        width: '25px',
        height: '16px',
        position: 'relative',
        float: 'left',
        margin: '0 10px 0 5px'
    },
    selectCustom: {
        color: '#fff !important',
        background: grey[600],
        width: '100%',
        padding: '1.8vh',
        border: '1px solid ' + grey[900],
        borderRadius: '1vh'
    },
    customTextAreaAccount: {
        color: '#fff !important',
        background: grey[600],
        padding: '2vh',
        fontSize: '1rem',
        fontFamily: 'Roboto',
        marginTop: '3vh',
        border: '1px solid ' + grey[900]
    },
    customInputAccount: {
        width: '100%',
        '& input': {
            color: grey[900],
            background: grey[200]
        },
        '& fieldset': {
            borderColor: grey[200],
        },
        '&:hover label': {
            color: grey[900],
        },
    },
    customInputAmount: {
        width: '100%',
        '& input': {
            color: grey[900],
            background: '#f5f5f5'
        },
        '& fieldset': {
            borderColor: '#f5f5f5',
        },
        '&:hover label': {
            color: grey[900],
        },
    },
    formControl: {
        width: '100%',
        '& > label': {
            fontSize: '1.3em',
            fontWeight: 'bold',
            marginBottom: '2vh'
        }
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    menuLeft: {
        color: grey[700]
    },
    hide: {
        display: 'none',
        opacity: '0',
        transition: 'opacity 500ms ease-in-out',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        background: grey[200]
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    linkMenu: {
        color: grey[200],
        textDecoration: 'none',
        '& svg': {
            marginRight: '2vh'
        }
    },
    linkPadrao: {
        color: APP_SETTINGS.APP_COLOR1 ? APP_SETTINGS.APP_COLOR1 : APP_COLOR1,
        textDecoration: 'none',
        cursor: 'pointer',
        '&:hover': {
            color: APP_SETTINGS.APP_COLOR2 ? APP_SETTINGS.APP_COLOR2 : APP_COLOR2
        }
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    logo: {
        width: '100%',
        height: '45px'
    },
    card: {
        background: '#fff',
        color: grey[800],
        boxShadow: '2px 2px 3px' + grey[400]
    },
    CardHeader: {
        padding: '1.5vh 3vh',
        fontSize: '1.3em !important',
        background: grey[300],
        color: grey[800],
        '& .MuiCardHeader-title': {
            fontSize: '1.1em !important'
        },
        '& .MuiCardHeader-action': {
            alignSelf: 'self-end'
        },
        [theme.breakpoints.down('md')]: {
            '& .MuiCardHeader-title': {
                fontSize: '1em !important'
            }
        },
    },
    CardContentLoans: {
        [theme.breakpoints.down('md')]: {
            paddingTop: '70px'
        }
    },
    CardHeaderBalance: {
        padding: '2vh 3vh',
        background: grey[300],
        color: grey[800],
        '& span': {
            fontSize: '1.3em !important'
        }
    },
    header: {
        background: grey[300],
        color: grey[900],
        padding: '1.5vh 2vh 1vh 2vh',
        borderBottom: APP_SETTINGS.APP_COLOR1 ? '2px solid ' + APP_SETTINGS.APP_COLOR1 : '2px solid ' + APP_COLOR1
    },
    item: {
        padding: '2vh',
        color: grey[900],
        '&:not(:last-child)': {
            borderBottom: '2px solid ' + grey[400]
        },
        '& .MuiGrid-item': {
            wordWrap: 'break-word'
        },
        '&:nth-child(even)': {
            background: '#f5f5f5'
        }
    },
    itemClick: {
        cursor: 'pointer',
        padding: '2vh',
        color: grey[900],
        '&:not(:last-child)': {
            borderBottom: '2px solid ' + grey[400]
        },
        '& .MuiGrid-item': {
            wordWrap: 'break-word'
        },
        '&:hover': {
            background: '#eee'
        }
    },
    footer: {
        background: grey[300],
        margin: theme.spacing(3, 0, 0),
        padding: '2vh',
        color: grey[700]
    },
    alert: {
        margin: theme.spacing(0, 0, 3)
    },
    alertButton: {
        marginRight: '2vh',
        padding: '1vh',
        color: '#ffffff',
        border: '1px solid #ffffff',
        borderRadius: '1vh',
        textDecoration: 'none'
    },
    alertDocuments: {
        marginTop: '20px',
        background: yellow[200],
        fontSize: '1.2em',
        color: amber[900],
        border: '1px solid ' + amber[600],
        borderRadius: 10,
        padding: '15px !important',
        '& a': {
            color: amber[900]
        }
    },
    alertDocumentsGreen: {
        marginTop: '20px',
        background: green[200],
        fontSize: '1.2em',
        color: green[900],
        border: '1px solid ' + green[600],
        borderRadius: 10,
        padding: '15px !important',
        '& a': {
            color: green[900]
        }
    },
    alertDocumentsRed: {
        marginTop: '20px',
        background: red[100],
        fontSize: '1.2em',
        color: red[900],
        border: '1px solid ' + red[600],
        borderRadius: 10,
        padding: '15px !important',
        '& a': {
            color: red[900]
        }
    },
    customInput2FA_myaccount: {
        width: '25%',
        margin: theme.spacing(0, 0, 1),
        '& input': {
            textAlign: 'center',
            padding: 10,
            fontSize: '1.5em',
            letterSpacing: '0.7em'
        },
        '& input::placeholder': {
            letterSpacing: '0.1em'
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        }
    },
    socials: {
        textAlign: 'left',
        color: grey[500],
        margin: theme.spacing(2, 0, 0)
    },
    socialIcons: {
        '& svg': {
            margin: theme.spacing(1, 0.5, 0)
        },
        '& a': {
            color: grey[500]
        },
        '& a:hover': {
            color: APP_SETTINGS.APP_COLOR1 ? APP_SETTINGS.APP_COLOR1 : APP_COLOR1
        }
    },
    menuProfile: {
        background: APP_SETTINGS.APP_COLOR2 ? APP_SETTINGS.APP_COLOR2 : APP_COLOR2,
        color: '#ffffff'
    },
    menuProfileHome: {
        background: 'rgba(0,0,0,0.7)',
        color: '#ffffff'
    },
    tradingTicker: {
        display: 'none',
        background: grey[900],
        maxHeight: '70px',
        '& .tradingview-widget-copyright': {
            display: 'none'
        },
        '&a': {
            display: 'none'
        }
    },
    tradingStrategiesCardHead: {
        padding: '2vh 0 0 3vh',
        background: grey[900],
        color: '#fff'
    },
    tradingStrategiesCurrency: {
        background: APP_SETTINGS.APP_COLOR1 ? APP_SETTINGS.APP_COLOR1 : APP_COLOR1,
        color: '#fff',
        padding: '0.8vh 0',
        maxWidth: '20%',
        textAlign: 'center',
        borderRadius: '1vh'
    },
    tradingStrategiesCardContent: {
        padding: '2vh 3vh 5vh',
        background: grey[900],
        color: grey[200],
        '& .tradingview-widget-copyright': {
            display: 'none'
        },
        '&a': {
            display: 'none'
        }
    },
    tradingStrategiesDate: {
        padding: '1vh 0 0',
        textAlign: 'right'
    },
    tradingStrategiesShortDesc: {
        padding: '2vh 0 0',
        textAlign: 'justify'
    },
    tradingStrategiesImage: {
        height: '250px',
        marginBottom: '2vh'
    },
    tradingStrategiesLink: {
        textDecoration: 'none'
    },
    tradingviewWidget: {
        width: '100%',
        height: '780px',
        border: 0
    },
    iframeTradingViewFooterHide: {
        width: '100%',
        height: '20px',
        marginTop: '-4vh',
        position: 'relative',
        background: grey[900]
    },
    table_head: {
        marginTop: '2vh',
        background: grey[900],
        color: grey[200]
    },
    table_item: {
        color: '#fff',
        padding: '1vh'
    },
    statusConfirmed: {
        padding: '1vh 4.25vh',
        borderRadius: '1vh',
        background: green[600]
    },
    statusUnconfirmed: {
        padding: '1vh 3vh',
        borderRadius: '1vh',
        background: APP_SETTINGS.APP_COLOR1 ? APP_SETTINGS.APP_COLOR1 : APP_COLOR1
    },
    statusConfirmedIcon: {
        background: 'transparent',
        '& svg': {
            background: green[600],
            padding: '0 0.5vh',
            fontSize: '2em',
            borderRadius: '0.5vh'
        }
    },
    statusUnconfirmedIcon: {
        background: 'transparent',
        '& svg': {
            background: APP_SETTINGS.APP_COLOR1 ? APP_SETTINGS.APP_COLOR1 : APP_COLOR1,
            padding: '0 0.5vh',
            fontSize: '2em',
            borderRadius: '0.5vh'
        }
    },
    actionEdit: {
        background: 'transparent',
        marginRight: '1vh',
        '& svg': {
            background: APP_SETTINGS.APP_COLOR1 ? APP_SETTINGS.APP_COLOR1 : APP_COLOR1,
            padding: '0.5vh',
            fontSize: '2em',
            fill: '#fff',
            borderRadius: '0.5vh'
        }
    },
    actionRemove: {
        background: 'transparent',
        '& svg': {
            background: red[700],
            padding: '0.5vh',
            fontSize: '2em',
            fill: '#fff',
            borderRadius: '0.5vh'
        }
    },
    cardActions: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '0.7em',
        background: APP_SETTINGS.APP_COLOR1 ? APP_SETTINGS.APP_COLOR1 : APP_COLOR1,
        borderRadius: '1vh',
        padding: '1vh 2vh',
        '& span': {
            fontSize: '1rem',
            top: '-3px',
            position: 'relative'
        },
        '& svg': {
            fontSize: '1.2rem'
        }
    },
    radioSubscriptions: {
        color: APP_SETTINGS.APP_COLOR1 ? APP_SETTINGS.APP_COLOR1 : APP_COLOR1,
        '&.MuiRadio-colorSecondary.Mui-checked': {
            color: APP_SETTINGS.APP_COLOR1 ? APP_SETTINGS.APP_COLOR1 : APP_COLOR1 + '!important'
        },
        '& svg > path': {
            fill: APP_SETTINGS.APP_COLOR1 ? APP_SETTINGS.APP_COLOR1 : APP_COLOR1
        },
        '&:hover,:focus': {
            color: APP_SETTINGS.APP_COLOR1 ? APP_SETTINGS.APP_COLOR1 : APP_COLOR1
        }
    },
    home_heading: {
        flexBasis: '100%',
        flexShrink: 0,
        color: '#666',
        fontSize: '1.2em',
        fontWeight: 600,
        textAlign: 'left',
    },
    home_heading2: {
        flexBasis: '100%',
        flexShrink: 0,
        color: '#666',
        fontSize: '1.2em',
        fontWeight: 600,
        textAlign: 'right',
    },
    home_secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    balanceContainer: {
        background: '#eee'
    },
    balanceList: {
        listStyle: 'none',
        padding: '0',
        margin: '0',
        display: 'inline-flex',
        '& > li:not(:last-child)': {
            margin: '0 3vh 0 1vh',
            padding: '0 3vh 0 0',
            borderRight: '1px solid #fff'
        }
    },
    balanceHighlight: {
        background: APP_SETTINGS.APP_COLOR1 ? APP_SETTINGS.APP_COLOR1 : APP_COLOR1,
        padding: '0.2vh 2vh',
        textAlign: 'right',
        color: '#fff',
        marginTop: '-2px'
    },
    balanceHighlightRed: {
        background: red[700],
        padding: '0.2vh 2vh',
        textAlign: 'center',
        color: '#fff',
        marginTop: '-2px',
        minWidth: '15%'
    },
    balanceHighlightGreen: {
        background: green[700],
        padding: '0.2vh 2vh',
        textAlign: 'center',
        color: '#fff',
        marginTop: '-2px',
        minWidth: '15%'
    },
    input: {
        backgroundColor: '#fff !important',
        border: '2px solid #ddd',
        padding: '0.5vh 2vh',
        height: '42px',
        '& .MuiInput-underline:after': {
            display: 'none'
        },
        '& .MuiInput-underline:before': {
            display: 'none'
        }
    },
    input2: {
        backgroundColor: '#fff !important',
        border: '2px solid #ddd',
        marginTop: '0.3rem',
        marginBottom: '1rem',
        padding: '0.6rem',
        '& .MuiInput-underline:after': {
            display: 'none'
        },
        '& .MuiInput-underline:before': {
            display: 'none'
        }
    },
    inputTextArea: {
        backgroundColor: '#fff !important',
        border: '2px solid #ddd',
        padding: '0.9vh 2vh',
        width: '100%',
        minHeight: '60px',
        fontFamily: 'Roboto',
        fontSize: '1.2em'
    },
    inputSelect: {
        backgroundColor: '#fff !important',
        border: '2px solid #ddd',
        padding: '0.5vh 2vh',
        height: '42px',
        '&:before': {
            display: 'none'
        },
        '&:after': {
            borderBottom: '2px solid' + APP_SETTINGS.APP_COLOR1 ? APP_SETTINGS.APP_COLOR1 : APP_COLOR1
        }
    },
    inputSelect2: {
        backgroundColor: '#fff !important',
        border: '2px solid #ddd',
        padding: '0',
        height: '42px',
        '&:before': {
            display: 'none'
        },
        '&:after': {
            borderBottom: '2px solid' + APP_SETTINGS.APP_COLOR1 ? APP_SETTINGS.APP_COLOR1 : APP_COLOR1
        },
        '& .MuiFilledInput-input': {
            paddingTop: '1.5vh !important',
        },
        '& span': {
            position: 'relative',
            top: '5px',
            left: '5px'
        }
    },
    inputSelectDisabled: {
        backgroundColor: '#ccc !important',
        border: '2px solid #ddd',
        padding: '0.5vh 2vh',
        height: '42px',
        pointerEvents: 'none',
        '&:before': {
            display: 'none'
        },
        '&:after': {
            borderBottom: '2px solid' + APP_SETTINGS.APP_COLOR1 ? APP_SETTINGS.APP_COLOR1 : APP_COLOR1
        }
    },
    label: {
        '&.Mui-focused': {
            color: APP_SETTINGS.APP_COLOR1 ? APP_SETTINGS.APP_COLOR1 : APP_COLOR1
        },
        marginTop: '-1vh'
    },
    imgCurrencyInput: {
        width: '48px',
        position: 'absolute',
        marginLeft: '-50px',
        marginTop: '5px',
        background: '#fff',
        paddingLeft: '5px',
        paddingRight: '5px'
    },
    imgCurrencyInput2: {
        width: '30px',
        float: 'left',
        background: 'transparent',
        marginLeft: '-10px',
        paddingLeft: '0px',
        paddingRight: '5px',
        marginTop: '0px'
    },
    selectStatment: {
        '& span': {
            position: 'relative',
            top: '1px'
        }
    },
    confirm: {
        border: APP_SETTINGS.APP_COLOR1 ? '0.4vh solid ' + APP_SETTINGS.APP_COLOR1 : '0.4vh solid ' + APP_COLOR1,
    },
    confirmFilled: {
        border: 0,
        background: APP_SETTINGS.APP_COLOR1 ? APP_SETTINGS.APP_COLOR1 : APP_COLOR1,
        color: '#fff',
        '&:hover': {
            background: APP_SETTINGS.APP_COLOR2 ? APP_SETTINGS.APP_COLOR2 : APP_COLOR2,
        }
    },
    confirmFilledDisabled: {
        border: '0.4vh solid ' + grey[300],
        background: grey[200],
        color: grey[500]
    },
    confirmFilledCancel: {
        border: '0.4vh solid ' + grey[500],
        color: grey[600]
    },
    filters: {
        marginBottom: '1vh'
    },
    labelFilter: {
        '&.Mui-focused': {
            color: APP_SETTINGS.APP_COLOR1 ? APP_SETTINGS.APP_COLOR1 : APP_COLOR1
        },
        marginTop: '-1vh',
        [theme.breakpoints.up(1900)]: {
            marginTop: '-1.3vh',
            background: '#fff'
        }
    },
    inputSelectFilter: {
        backgroundColor: '#fff !important',
        border: '2px solid #ddd',
        padding: '0.5vh 2vh',
        height: '42px',
        '&:before': {
            display: 'none'
        },
        '&:after': {
            borderBottom: '2px solid' + APP_SETTINGS.APP_COLOR1 ? APP_SETTINGS.APP_COLOR1 : APP_COLOR1
        }
    },
    inputSelectFilterNoPlaceholder: {
        backgroundColor: '#fff !important',
        border: '2px solid #ddd',
        padding: '0vh 1vh',
        height: '42px',
        '&:before': {
            display: 'none'
        },
        '&:after': {
            borderBottom: '2px solid' + APP_SETTINGS.APP_COLOR1 ? APP_SETTINGS.APP_COLOR1 : APP_COLOR1
        },
        '& .MuiFilledInput-input': {
            paddingTop: '1.5vh !important',
        },
        '& span': {
            position: 'relative',
            top: '5px',
            left: '5px'
        }
    },
    inputSelectFilterBox: {
        backgroundColor: '#fff !important',
        border: '2px solid #ddd',
        padding: '0vh',
        height: '47px',
        '&:before': {
            display: 'none'
        },
        '&:after': {
            borderBottom: '2px solid' + APP_SETTINGS.APP_COLOR1 ? APP_SETTINGS.APP_COLOR1 : APP_COLOR1
        },
        '&.Mui-focused': {
            border: '0px solid #fff !important'
        },
        '& .MuiOutlinedInput-notchedOutline': {
            border: '0px solid #fff'
        },
        '& .Mui-focused': {
            color: APP_SETTINGS.APP_COLOR1 ? APP_SETTINGS.APP_COLOR1 : APP_COLOR1
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: APP_SETTINGS.APP_COLOR1 ? APP_SETTINGS.APP_COLOR1 : APP_COLOR1
        },
        '& .MuiInputLabel-formControl': {
            top: '-6px'
        },
        '& .MuiFormLabel-filled.MuiInputLabel-formControl': {
            top: '10px'
        },
        '& .Mui-focused.MuiInputLabel-formControl': {
            top: '0px'
        },
        '& .MuiInputBase-root': {
            height: '45px',
        },
        '& .MuiAutocomplete-endAdornment .MuiAutocomplete-clearIndicator': {
            display: 'none'
        }
    },
    filterIcon: {
        position: 'relative',
        display: 'block',
        float: 'right',
        marginRight: '5vh',
        cursor: 'pointer'
    },
    imgCryto: {
        width: '28px',
        height: '28px'
    },
    spanCrypto: {
        position: 'absolute',
        marginTop: '10px',
        marginLeft: '32px'
    },
    imgCrytoAccount: {
        width: '28px',
        height: '28px',
        position: 'absolute',
        marginTop: '4px'
    },
    viewPDF: {
        display: 'flex',
        float: 'right',
        marginLeft: '5px',
        cursor: 'pointer',
        color: red[700]
    },
    viewPDFContract: {
        display: 'flex',
        float: 'right',
        marginLeft: '5px',
        cursor: 'pointer',
        color: blue[700]
    },
    viewPDFDisabled: {
        display: 'flex',
        float: 'right',
        marginLeft: '5px',
        cursor: 'pointer',
        color: grey[700],
        pointerEvents: 'none'
    },
    balanceGreen: {
        color: green[700],
        margin: '0'
    },
    balanceRed: {
        color: red[700],
        margin: '0'
    },
    cancelTransaction: {
        display: 'flex',
        float: 'right',
        marginLeft: '5px',
        cursor: 'pointer',
        color: red[700]
    },
    paginationActive: {
        padding: '0',
        minWidth: '45px',
        height: '30px',
        margin: '0 0.5vh',
        background: APP_SETTINGS.APP_COLOR1 ? APP_SETTINGS.APP_COLOR1 : APP_COLOR1,
        color: '#fff',
        '&:hover': {
            background: APP_SETTINGS.APP_COLOR4 ? APP_SETTINGS.APP_COLOR4 : APP_COLOR4,
        }
    },
    paginationInactive: {
        padding: '0',
        minWidth: '45px',
        height: '30px',
        margin: '0 0.5vh',
        background: grey[400],
        color: '#fff',
        '&:hover': {
            background: APP_SETTINGS.APP_COLOR1 ? APP_SETTINGS.APP_COLOR1 : APP_COLOR1
        }
    },
    expand: {
        background: 'transparent',
        color: grey[500],
        padding: '0',
        fontSize: '2em',
        fontWeight: 'normal',
        marginTop: '1vh',
        cursor: 'pointer',
        float: 'right'
    },
    headActionsButton: {
        position: 'relative',
        float: 'right',
        marginTop: '-45px',
        marginRight: '50px',
        background: 'transparent',
        color: grey[800],
        padding: '1vh 2vh',
        height: '42px',
        margin: '0',
        boxShadow: '0 0 0 0 #fff',
        '&:hover': {
            background: APP_SETTINGS.APP_COLOR2 ? APP_SETTINGS.APP_COLOR2 : APP_COLOR2,
        },
        [theme.breakpoints.up('1400')]: {
            height: '45px',
        }
    },
    inputSelectFilter_account: {
        width: '94%',
        padding: '1vh 0',
        marginTop: '3.65vh',
        marginLeft: '3%',
        backgroundColor: '#fff !important',
        border: '1px solid #c4c4c4',
        height: '50px',
        '&:before': {
            display: 'none'
        },
        '&:after': {
            borderBottom: '1px solid' + APP_SETTINGS.APP_COLOR1 ? APP_SETTINGS.APP_COLOR1 : APP_COLOR1
        }
    },
    inputSelectFilterBox_account: {
        width: '94%',
        padding: '1vh 0',
        marginTop: '3.65vh',
        marginLeft: '3%',
        backgroundColor: '#fff !important',
        border: '1px solid #c4c4c4',
        height: '50px',
        '&:before': {
            display: 'none'
        },
        '&:after': {
            borderBottom: '2px solid' + APP_SETTINGS.APP_COLOR1 ? APP_SETTINGS.APP_COLOR1 : APP_COLOR1
        },
        '&.Mui-focused': {
            border: '0px solid #fff !important'
        },
        '& .MuiOutlinedInput-notchedOutline': {
            border: '0px solid #fff'
        },
        '& .Mui-focused': {
            color: APP_SETTINGS.APP_COLOR1 ? APP_SETTINGS.APP_COLOR1 : APP_COLOR1
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: APP_SETTINGS.APP_COLOR1 ? APP_SETTINGS.APP_COLOR1 : APP_COLOR1
        },
        '& .MuiInputLabel-formControl': {
            top: '-6px'
        },
        '& .MuiFormLabel-filled.MuiInputLabel-formControl': {
            top: '10px'
        },
        '& .Mui-focused.MuiInputLabel-formControl': {
            top: '0px'
        },
        '& .MuiInputBase-root': {
            height: '45px',
        },
        '& .MuiAutocomplete-endAdornment .MuiAutocomplete-clearIndicator': {
            display: 'none'
        }
    },
    customInputAccount_account: {
        width: '100%',
        minHeight: '45px',
        padding: '1vh',
        '& label': {
            marginTop: '0.5vh',
            marginLeft: '1vh'
        },
        '& input': {
            padding: '2.5vh',
        },
        [theme.breakpoints.down('md')]: {
            minHeight: '45px',
        }
    },
    labelFilter_account: {
        marginTop: '3vh',
        marginLeft: '1vh'
    },
    headActionsButton_account: {
        background: APP_SETTINGS.APP_COLOR1 ? APP_SETTINGS.APP_COLOR1 : APP_COLOR1,
        color: '#fff',
        padding: '0.5vh 2vh',
        fontSize: '0.7em',
        fontWeight: 'normal',
        marginTop: '1vh',
        float: 'right',
        '&:hover': {
            background: APP_SETTINGS.APP_COLOR1 ? APP_SETTINGS.APP_COLOR1 : APP_COLOR1,
            color: '#fff',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '0.5em',
        }
    },
    percentSelect: {
        margin: '3vh 2vh 1vh 0',
        color: grey[700],
        '&:hover': {
            borderColor: APP_SETTINGS.APP_COLOR1 ? APP_SETTINGS.APP_COLOR1 : APP_COLOR1,
            background: APP_SETTINGS.APP_COLOR4 ? APP_SETTINGS.APP_COLOR4 : APP_COLOR4,
            color: grey[900]
        },
        [theme.breakpoints.down('md')]: {
            margin: '1vh 0.5vh',
            padding: '1vh 0vh',
            minWidth: '50px'
        }
    },
    percentSelected: {
        margin: '3vh 2vh 1vh 0',
        borderColor: APP_SETTINGS.APP_COLOR1 ? APP_SETTINGS.APP_COLOR1 : APP_COLOR1,
        background: APP_SETTINGS.APP_COLOR4 ? APP_SETTINGS.APP_COLOR4 : APP_COLOR4,
        color: grey[900],
        [theme.breakpoints.down('md')]: {
            margin: '1vh 0.5vh',
            padding: '1vh 0vh',
            minWidth: '50px'
        }
    },
    headActionsButtonBillingsDays: {
        position: 'relative',
        float: 'right',
        fontSize: '2vh',
        width: '90%',
        marginTop: '-5.5vh',
        background: grey[300],
        color: grey[800],
        padding: '0.5vh',
        margin: '0',
        '&:hover': {
            color: APP_SETTINGS.APP_COLOR1 ? APP_SETTINGS.APP_COLOR1 : APP_COLOR1,
            background: grey[200],
            borderColor: APP_SETTINGS.APP_COLOR1 ? APP_SETTINGS.APP_COLOR1 : APP_COLOR1,
        }
    },
    headActionsButtonBillingsDaysSelected: {
        position: 'relative',
        float: 'right',
        fontSize: '2vh',
        width: '90%',
        marginTop: '-5.5vh',
        color: APP_SETTINGS.APP_COLOR1 ? APP_SETTINGS.APP_COLOR1 : APP_COLOR1,
        padding: '0.5vh',
        background: grey[200],
        borderColor: APP_SETTINGS.APP_COLOR1 ? APP_SETTINGS.APP_COLOR1 : APP_COLOR1,
        margin: '0',
        '&:hover': {
            color: APP_SETTINGS.APP_COLOR1 ? APP_SETTINGS.APP_COLOR1 : APP_COLOR1,
            background: grey[200],
            borderColor: APP_SETTINGS.APP_COLOR1 ? APP_SETTINGS.APP_COLOR1 : APP_COLOR1,
        }
    },
    headActionsButtonBillingsDaysMobile: {
        position: 'relative',
        float: 'right',
        fontSize: '2vh',
        width: '98%',
        marginBottom: '1vh',
        background: grey[300],
        color: grey[800],
        padding: '0.5vh',
        margin: '0',
        '&:hover': {
            color: APP_SETTINGS.APP_COLOR1 ? APP_SETTINGS.APP_COLOR1 : APP_COLOR1,
            background: grey[200],
            borderColor: APP_SETTINGS.APP_COLOR1 ? APP_SETTINGS.APP_COLOR1 : APP_COLOR1,
        }
    },
    headActionsButtonBillingsDaysSelectedMobile: {
        position: 'relative',
        float: 'right',
        fontSize: '2vh',
        width: '98%',
        marginBottom: '1vh',
        color: APP_SETTINGS.APP_COLOR1 ? APP_SETTINGS.APP_COLOR1 : APP_COLOR1,
        padding: '0.5vh',
        background: grey[200],
        borderColor: APP_SETTINGS.APP_COLOR1 ? APP_SETTINGS.APP_COLOR1 : APP_COLOR1,
        margin: '0',
        '&:hover': {
            color: APP_SETTINGS.APP_COLOR1 ? APP_SETTINGS.APP_COLOR1 : APP_COLOR1,
            background: grey[200],
            borderColor: APP_SETTINGS.APP_COLOR1 ? APP_SETTINGS.APP_COLOR1 : APP_COLOR1,
        }
    },
    loanStatus1: {
        minWidth: '80%',
        maxWidth: '80%',
        display: 'block',
        textAlign: 'center',
        border: '2px solid ' + orange[500],
        color: orange[500],
        padding: '3px 20px',
        borderRadius: 5,
        fontWeight: 'bold'
    },
    loanStatus2: {
        minWidth: '80%',
        maxWidth: '80%',
        display: 'block',
        textAlign: 'center',
        border: '2px solid ' + grey[700],
        color: grey[700],
        padding: '3px 20px',
        borderRadius: 5,
        fontWeight: 'bold'
    },
    loanStatus3: {
        minWidth: '80%',
        maxWidth: '80%',
        display: 'block',
        textAlign: 'center',
        border: '2px solid ' + blue[700],
        color: blue[700],
        padding: '3px 20px',
        borderRadius: 5,
        fontWeight: 'bold'
    },
    loanStatus4: {
        minWidth: '80%',
        maxWidth: '80%',
        display: 'block',
        textAlign: 'center',
        border: '2px solid ' + red[700],
        color: red[700],
        padding: '3px 20px',
        borderRadius: 5,
        fontWeight: 'bold'
    },
    loanStatus5: {
        minWidth: '80%',
        maxWidth: '80%',
        display: 'block',
        textAlign: 'center',
        border: '2px solid ' + green[700],
        color: green[700],
        padding: '3px 20px',
        borderRadius: 5,
        fontWeight: 'bold'
    },
    loanStepsDashboard: {
        textAlign: 'center',
        paddingTop: '0 !important',
        marginTop: '10vh !important',
        '& span': {
            width: '100%',
            display: 'block',
            borderTop: '0.5vh dashed #ccc',
            marginTop: '-35px',
            paddingTop: '30px'
        },
        '& svg': {
            fontSize: '4em !important',
            position: 'relative',
            background: 'white',
            width: '33%',
            margin: '0 33%'
        },
        [theme.breakpoints.down('md')]: {
            marginTop: '1vh !important',
            '& span': {
                float: 'left',
                width: '80%',
                borderTop: 0,
                padding: '0 10px',
                marginTop: '10px',
                textAlign: 'left',
            },
            '& svg': {
                float: 'left',
                width: '20%',
                margin: '0'
            },
        },
    },
    newloan_text: {
        fontWeight: '300',
        fontSize: '2.8vh',
        marginBottom: '3vh',
        [theme.breakpoints.down('md')]: {
            fontSize: '2vh',
        },
    },
    newloan_customInput: {
        width: '95%',
        fontSize: '2.5vh',
        marginBottom: '2vh',
        background: '#e5e5e5',
        padding: '5px 20px',
        color: '#222',
        border: '0px solid #fff',
        '&:placeholder': {
            color: '#999'
        },
        [theme.breakpoints.down('md')]: {
            width: '100%',
        },
    },
    newloan_customInputLoan: {
        fontSize: '2.5vh',
        marginBottom: '2vh',
        background: '#f5f5f5',
        padding: '5px 20px',
        minHeight: '45px',
        height: '45px',
        color: '#222',
        border: '1px solid #eee',
        '&:placeholder': {
            color: '#999'
        },
        [theme.breakpoints.down('md')]: {
            width: '100%',
        },
        [theme.breakpoints.up(1700)]: {
            height: '55px'
        },
    },
    newloan_inputSelectFilter: {
        fontSize: '1.2rem',
        marginBottom: '2vh',
        background: '#f5f5f5',
        padding: '5px 20px 5px 5px',
        minHeight: '45px',
        height: '45px',
        color: '#222',
        border: '1px solid #eee',
        '&:placeholder': {
            color: '#999'
        },
        '&.Mui-focused, &.Mui-focused .MuiSelect-select,&:hover': {
            background: '#f5f5f5'
        },
        '& .MuiSelect-filled': {
            padding: '0'
        },
        '& .MuiFilledInput-root': {
            background: 'transparent'
        },
        '& img': {
            width: '35px',
            marginLeft: '0px'
        },
        '& span': {
            float: 'left',
            marginLeft: '5px',
            marginTop: '7px'
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '2vh',
        },
        [theme.breakpoints.up(1700)]: {
            fontSize: '1.5rem',
            height: '55px',
            '& span': {
                marginTop: '0.2rem'
            },
        },
    },
    newloan_inputSelectFilterCountry: {
        fontSize: '2.5vh',
        marginBottom: '2vh',
        background: '#f5f5f5',
        padding: '0 20px',
        minHeight: '45px',
        color: '#222',
        border: '1px solid #eee',
        '&:placeholder': {
            color: '#999'
        },
        '&.Mui-focused, &.Mui-focused .MuiSelect-select,&:hover': {
            background: '#f5f5f5'
        },
        '& .MuiSelect-filled': {
            padding: '0'
        },
        '& .MuiFilledInput-root': {
            background: 'transparent'
        },
        '& .MuiInput-underline': {
            marginTop: '8px'
        },
        '& .MuiInput-underline::before, &:hover .MuiInput-underline::before, &:focus .MuiInput-underline::before, &:visited .MuiInput-underline::before, & .MuiInput-underline::after, &:hover .MuiInput-underline::after, &:focus .MuiInput-underline::after, &:visited .MuiInput-underline::after': {
            border: 0
        },
        '& .MuiInputLabel-formControl': {
            position: 'relative',
        }
    },
    newloan_customInputTextarea: {
        width: '85%',
        fontSize: '2.5vh',
        marginLeft: '2vh',
        minHeight: '75px',
        maxHeight: '75px',
        marginBottom: '2vh',
        background: '#e5e5e5',
        padding: '10px 20px',
        color: '#222',
        border: '0px solid #fff',
        '&:placeholder': {
            color: '#999'
        },
        [theme.breakpoints.down('md')]: {
            width: '90%',
            marginLeft: '0',
        },
    },
    newloan_buttonSend: {
        background: APP_SETTINGS.APP_COLOR1,
        color: '#fff',
        marginTop: '48px',
        padding: '2vh 8vh',
        borderRadius: '80px',
        '&:hover': {
            background: APP_SETTINGS.APP_COLOR4,
        },
        [theme.breakpoints.down('md')]: {
            marginTop: '1vh',
        },
    },
    newloan_imgCurrencyInput: {
        width: '20px',
        float: 'left',
        background: 'transparent',
        paddingLeft: '5px',
        paddingRight: '5px',
        [theme.breakpoints.up(1700)]: {
            marginTop: '0vh',
            width: '25px',
        },
        [theme.breakpoints.up(1900)]: {
            marginTop: '0vh',
            width: '31px',
        }
    },
    newloan_btnContractType: {
        background: '#f2f2f2',
        color: '#999',
        border: '2px solid #ccc'
    },
    newloan_btnContractTypeActive: {
        background: '#f2f2f2',
        border: '2px solid ' + APP_SETTINGS.APP_COLOR4,
        color: APP_SETTINGS.APP_COLOR4
    },
    newloan_listInstruction: {
        borderTop: '2px dashed #ccc',
        paddingTop: '4vh',
        paddingLeft: '1vh',
        fontSize: '2.5vh',
        color: '#888',
        fontWeight: '400',
        '& svg': {
            position: 'absolute',
            border: '5px solid #fff',
            marginTop: '-45px',
            marginLeft: '-1vh',
            fontSize: '7vh',
            background: '#fff'
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '2vh',
            paddingBottom: '5vh',
            '& svg': {
                fontSize: '5vh',
                marginTop: '-50px',
            },
        },
    },
    listInstruction: {
        color: '#888',
        fontSize: '1em',
        '& svg': {
            fontSize: '2.2em'
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '0.8em',
            padding: '10px',
            '& svg': {
                fontSize: '3em'
            },
        },
    },
    listInstructionDashed: {
        borderTop: '2px dashed #aaa',
        marginTop: '15px',
        [theme.breakpoints.up('1380')]: {
            borderTop: '3px dashed #aaa',
        },
    },
    listInstructionInfo: {
        paddingTop: '10px',
        [theme.breakpoints.down('md')]: {
            paddingTop: '5px',
        },
    },
    labelSwiftHidden: {
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
    },
    hiddenPaddingSwift: {
        [theme.breakpoints.down('md')]: {
            paddingTop: '0 !important'
        },
    },
    hiddenPaddingHolder: {
        [theme.breakpoints.down('md')]: {
            paddingBottom: '0 !important'
        },
    },
    newloan_loanSummary: {
        background: '#f5f5f5',
        padding: '5vh',
        borderLeft: '5vh solid #fff',
        [theme.breakpoints.down('md')]: {
            padding: '2vh',
            borderLeft: '0vh solid #fff',
        },
    },
    newloan_loanSummaryTitle: {
        marginBottom: '2vh',
        borderLeft: '5vh solid #fff',
        [theme.breakpoints.down('md')]: {
            marginTop: '0vh',
            borderLeft: '0vh solid #fff',
        },
    },
    newloan_btnConfirm: {
        background: APP_SETTINGS.APP_COLOR4,
        color: '#fff',
        '&:hover': {
            background: APP_SETTINGS.APP_COLOR2,
        },
        '&.Mui-disabled': {
            background: '#ddd',
        }
    },
    newloan_contracTypeBtnLeft: {
        borderRight: '2vh solid #fff',
        [theme.breakpoints.down('md')]: {
            borderRight: '0',
            marginBottom: 10
        }
    },
    newloan_contracTypeBtnRight: {
        borderLeft: '2vh solid #fff',
        [theme.breakpoints.down('md')]: {
            borderLeft: '0',
        }
    },
    rightDepositInstructions: {
        marginLeft: 30,
        paddingLeft: '30px !important',
        borderLeft: '1px solid #ddd',
        [theme.breakpoints.down('md')]: {
            borderLeft: '0px solid #ddd',
            marginLeft: 0,
            paddingLeft: '0 !important',
        },
    },
    wallet_status0: {
        background: yellow[700],
        color: '#fff',
        fontSize: '12px',
        width: '90%',
        textAlign: 'center',
        display: 'block',
        borderRadius: 3,
        padding: '2px 5px',
    },
    wallet_status1: {
        background: green[700],
        color: '#fff',
        fontSize: '12px',
        width: '90%',
        textAlign: 'center',
        display: 'block',
        borderRadius: 3,
        padding: '2px 5px',
    },
    wallet_status2: {
        background: orange[700],
        color: '#fff',
        fontSize: '12px',
        width: '90%',
        textAlign: 'center',
        display: 'block',
        borderRadius: 3,
        padding: '2px 5px',
    },
    wallet_status3: {
        background: red[700],
        color: '#fff',
        fontSize: '12px',
        width: '90%',
        textAlign: 'center',
        display: 'block',
        borderRadius: 3,
        padding: '2px 5px',
    },
    wallet_status4: {
        background: blue[700],
        color: '#fff',
        fontSize: '12px',
        width: '90%',
        textAlign: 'center',
        display: 'block',
        borderRadius: 3,
        padding: '2px 5px',
    },
    walletsIcon: {
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
            textAlign: 'left',
        }
    },
    walletsBalance: {
        fontSize: '16px',
        [theme.breakpoints.down('md')]: {
            textAlign: 'left',
            marginBottom: 10
        },
    },
    walletsBalanceLabel: {
        display: 'block',
        fontSize: '11px',
    },
    walletsBalanceValue: {
        display: 'block',
        fontSize: '16px',
        [theme.breakpoints.down('md')]: {
            fontWeight: 'bold',
            fontSize: '14px',
        }
    },
    walletsActions: {
        [theme.breakpoints.down('md')]: {
            textAlign: 'left',
        },
    },
    buttonFilter: {
        background: APP_SETTINGS.APP_COLOR1 ? APP_SETTINGS.APP_COLOR1 : APP_COLOR1,
        color: '#fff',
        padding: '1vh 4vh',
        margin: '0',
        height: '42px',
        boxShadow: '0 0 0 0 #fff',
        '&:hover': {
            background: APP_SETTINGS.APP_COLOR2 ? APP_SETTINGS.APP_COLOR2 : APP_COLOR2,
        }
    },
    scoreMenu: {
        marginTop: '-110px'
    },
    scoreDesktop: {
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
    },
    scoreMobile: {
        display: 'none',
        [theme.breakpoints.down('md')]: {
            display: 'inherit',
        },
    },
    score1: {
        background: '#c1341d',
        color: '#fff',
        padding: '0.5vh 1vh',
        marginRight: '1vh',
        [theme.breakpoints.down('md')]: {
            float: 'left',
            width: '100%',
        },
    },
    score2: {
        background: '#e19134',
        color: '#fff',
        padding: '0.5vh 1vh',
        marginRight: '1vh',
        [theme.breakpoints.down('md')]: {
            float: 'left',
            width: '100%',
        },
    },
    score3: {
        background: '#eabd40',
        color: '#fff',
        padding: '0.5vh 1vh',
        marginRight: '1vh',
        [theme.breakpoints.down('md')]: {
            float: 'left',
            width: '100%',
        },
    },
    score4: {
        background: '#91c149',
        color: '#fff',
        padding: '0.5vh 1vh',
        marginRight: '1vh',
        [theme.breakpoints.down('md')]: {
            float: 'left',
            width: '100%',
        },
    },
    score5: {
        background: '#5ba64e',
        color: '#fff',
        padding: '0.5vh 1vh',
        [theme.breakpoints.down('md')]: {
            float: 'left',
            width: '100%',
        },
    },
    scoreTitle: {
        color: APP_SETTINGS.APP_COLOR1 ? APP_SETTINGS.APP_COLOR1 : APP_COLOR1,
    },
    scoreSubtitle: {
        color: APP_SETTINGS.APP_COLOR1 ? APP_SETTINGS.APP_COLOR1 : APP_COLOR1,
        fontSize: '1.3em',
        textAlign: 'justify'
    },
    showPassMyAccount: {
        position: 'absolute',
        marginTop: '1.7rem',
        marginLeft: '-2.5rem',
        cursor: 'pointer',
        opacity: '0.7',
        color: APP_SETTINGS.APP_COLOR1 ? APP_SETTINGS.APP_COLOR1 : APP_COLOR1,
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    cardCourseImage: {
        width: '100%',
        height: '180px',
        marginBottom: '2vh'
    },
    cardCourseTitle: {
        fontSize: '1.5em'
    },
    cardCourseSubtitle: {
        fontSize: '1em',
        color: '#666'
    },
    cardCourseDescription: {
        borderTop: '1px solid #ccc',
        marginTop: '2vh',
        paddingTop: '2vh',
        fontSize: '0.8em'
    },
    cardCourseActions: {
        background: APP_SETTINGS.APP_COLOR1 ? APP_SETTINGS.APP_COLOR1 : APP_COLOR1,
        color: '#fff',
        padding: '0',
        '&:hover': {
            background: APP_SETTINGS.APP_COLOR1 ? APP_SETTINGS.APP_COLOR1 : APP_COLOR1
        }
    },
    cardCourseH2: {
        borderBottom: '2px solid #ddd',
        marginTop: '0'
    },
    cardCoursePrice: {
        fontSize: '1.2em',
        fontWeight: 'bold'
    },
    cardCourseBalance: {
        margin: '-1vh 0 0',
        float: 'right',
        fontSize: '0.8em'
    },
    cardCourseProgress: {
        float: 'left',
        background: '#ccc',
        width: '75%',
        marginTop: '1vh',
        padding: '3px'
    },
    cardCourseProgressTxt: {
        float: 'left',
        width: '20%',
        marginLeft: '1vh',
        fontSize: '0.9em'
    },
    cardCourseSectionTitle: {
        color: APP_SETTINGS.APP_COLOR1 ? APP_SETTINGS.APP_COLOR1 : APP_COLOR1,
        borderBottom: APP_SETTINGS.APP_COLOR1 ? '3px solid ' + APP_SETTINGS.APP_COLOR1 : '3px solid ' + APP_COLOR1,
        margin: '0 1.5vh',
        fontWeight: 'bold',
        fontSize: '1.5em'
    },
    accordionCourse: {
        marginBottom: '2vh'
    },
    accordionCourseModules: {
        padding: '0 2vh',
        borderBottom: '3px solid #ccc',
        background: '#f2f2f2',
        color: '#444',
        fontSize: '1.2em'
    },
    btnCoursesBack: {
        '& svg': {
            fontSize: '1.2em',
            position: 'relative'
        },
    },
    containerVimeo: {
        height: '600px',
        [theme.breakpoints.up(1900)]: {
            height: '800px',
        },
        [theme.breakpoints.down('md')]: {
            height: '250px',
        }
    },
    videoHtml: {
        height: '550px',
        '&::cue': {
            fontSize: '0.8rem',
            color: 'white'
        },
        [theme.breakpoints.up(1900)]: {
            height: '800px',
        },
        [theme.breakpoints.down('md')]: {
            height: '250px',
        }
    },
    selectPeriod: {
        cursor: 'pointer',
        color: '#fff',
        fontSize: '0.8rem',
        background: APP_SETTINGS.APP_COLOR1,
        margin: '0.5%',
        padding: '0.6rem 0.3rem',
        textAlign: 'center',
        float: 'left',
        width: '19%'
    },
    selectPeriodInactive: {
        cursor: 'pointer',
        color: '#999',
        fontSize: '0.8rem',
        background: '#eee',
        margin: '0.5%',
        padding: '0.6rem 0.3rem',
        textAlign: 'center',
        float: 'left',
        width: '19%'
    },
    checkbox: {
        '&:hover,&:focus,&:active,&:visited': {
            background: 'transparent'
        }
    },
    indicatorContainer: {
        textAlign: 'center',
        marginTop: '0.4rem',
    },
    indicator: {
        marginTop: '0.5rem',
        '& svg': {
            fontSize: '2rem',
            color: APP_SETTINGS.APP_COLOR1 ? APP_SETTINGS.APP_COLOR1 : APP_COLOR1,
        }
    },
    resumeStakingStep: {
        [theme.breakpoints.down('md')]: {
            paddingLeft: '1rem !important'
        }
    },
    stakingStatus0: {
        width: '90%',
        textAlign: 'center',
        background: grey[700],
        border: '1px solid ' + grey[700],
        borderRadius: 5,
        padding: '1px 4px',
        color: '#fff',
        float: 'left',
        [theme.breakpoints.up('1920')]: {
            padding: '0 4px',
        }
    },
    stakingStatus1: {
        width: '90%',
        textAlign: 'center',
        background: blue[600],
        border: '1px solid ' + blue[600],
        borderRadius: 5,
        padding: '1px 4px',
        color: '#fff',
        float: 'left',
        [theme.breakpoints.up('1920')]: {
            padding: '0 4px',
        }
    },
    stakingStatus2: {
        width: '90%',
        textAlign: 'center',
        background: green[600],
        border: '1px solid ' + green[600],
        borderRadius: 5,
        padding: '1px 4px',
        color: '#fff',
        float: 'left',
        [theme.breakpoints.up('1920')]: {
            padding: '0 4px',
        }
    }
})