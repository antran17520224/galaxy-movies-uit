import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        height: '100vh',


    },

    image: {
        backgroundImage: 'url(https://c4.wallpaperflare.com/wallpaper/764/590/391/inception-leonardo-dicaprio-movie-posters-2400x3500-entertainment-movies-hd-art-wallpaper-preview.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
        "& p": {
            color: '#b40843',
            margin: '0',
            "&::before": {
                content: "'⚠'",
                marginRight: '4px'
            }
        },
    },
    submit: {
        margin: theme.spacing(3, 0, 0),
        fontWeight: 600
    },
    colorButtonFaceBook: {
        backgroundColor: '#4465ac',
        color: '#fff',
        "&:hover": {
            backgroundColor: '#3b5999',
        }
    },
    colorButtonGoogle: {
        backgroundColor: '#dd4b39',
        color: '#fff',
        "&:hover": {
            backgroundColor: '#b34638',
        }
    },
    marginTop: {
        marginTop: '16px'
    },

    textField: {
        width: '100%',
    },
    forgotPassword : {
        textAlign : 'center',
        marginTop : '13px'
    },
    createAccount : {
        backgroundColor: '#42b72a',
        color: '#fff',
        "&:hover": {
            backgroundColor: '#40a02c',
        }
    },
    textButton : {
        textTransform : 'inherit',
        fontSize: '17px',
    }
}));
export default useStyles;
