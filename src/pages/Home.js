import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing(15)
    },
}));

export default function Home() {
    const classes = useStyles();
    return (
        <>
            <Container>
                <Typography variant="h4" className={classes.root} align="center">
                    Home page is in development
                </Typography>
            </Container>
        </>
    );
}