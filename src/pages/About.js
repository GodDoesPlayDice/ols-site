import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing(15)
    },
}));

export default function About() {
    const classes = useStyles();
    return (
        <>
            <Container>
                <Typography variant="h3" className={classes.root} align="left">
                    We are a small team that makes games.
                </Typography>
                <h1>Contact Us</h1>
                <p>Don't hesitate to contact us if you have any questions.</p>
                <ul><li>Via Email:  alik_okroyan@mail.ru</li><li>Via Phone Number:  +79186313258</li><li>Via this Link:  https://ordinaryleastsquares.ru/support</li><li>Via this Address: Russian Federation, Krasnodar, Yarkaya 15/37</li>
                </ul>
            </Container>
        </>
    );
}