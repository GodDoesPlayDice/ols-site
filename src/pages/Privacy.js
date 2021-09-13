
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
        marginTop: theme.spacing(10)
	},
}));

export default function Privacy() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container>
                <Typography
                    align="center"
                    variant="h3"
                >
                    Privacy policy
                </Typography>
            </Container>
        </div>
    );
}