import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        height: '100vh',
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
        marginTop : '13px',
        padding: '13px 0'
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
