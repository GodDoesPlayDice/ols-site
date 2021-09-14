import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing(15)
    },
}));

export default function Support() {
    const classes = useStyles();
    return (
        <>
            <Container className={classes.root}>
                <h1>Have any questions or suggestions? Use this form.</h1>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdmH5bomprMu3sg5UyYOvQClGJgi-bezzIgMuZoNpr9JjTgMA/viewform?embedded=true" width="640" height="677" frameborder="0" marginheight="0" marginwidth="0">Загрузка…</iframe>
            </Container>
        </>
    );
}