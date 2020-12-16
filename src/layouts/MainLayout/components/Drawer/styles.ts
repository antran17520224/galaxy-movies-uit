import { makeStyles, createStyles, Theme, fade } from '@material-ui/core/styles';
const useStyles = makeStyles((theme: Theme) => createStyles({
	list: {
		width: 230,
	},
	fullList: {
		width: 'auto',
	},
	drawerPaper: {
		// width: 240,
		// zIndex: 99,
		// maxWidth: 240,
		// height: '100%',
		// position: 'relative',
	},
}));
export default useStyles;
