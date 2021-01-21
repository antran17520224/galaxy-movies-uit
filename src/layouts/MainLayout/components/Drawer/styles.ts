import { makeStyles, createStyles, Theme, fade } from '@material-ui/core/styles';
const useStyles = makeStyles((theme: Theme) => createStyles({
	list: {
		width: 230,
	},
	fullList: {
		width: 'auto',
	},
	drawerPaper: {
		'& a' : {
			color : 'rgba(0, 0, 0, 0.87)'
		}
	},
}));
export default useStyles;
