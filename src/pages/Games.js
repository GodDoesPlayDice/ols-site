import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing(15)
    },
}));

export default function Games() {
    const classes = useStyles();
    return (
        <>
            <Container className={classes.root}>
                <h1>Run use gun</h1>
                <p> Welcome to the world where robots have won! Humanity could not be saved, but before you die, you can take with you as many new masters of the planet as possible! Defeat iron enemies with the help of a lava bomb and your arsenal. Groundhog Day awaits you, but each time you will become stronger - more weapons, more health, more stamina.
                    <ul>
                        <li>completely free to play</li>
                        <li>endless meditative gameplay</li>
                        <li>the system of improvements will allow you to achieve the best result every time</li>
                        <li>modern 3D graphics with amazing effects</li>
                        <li>intuitive touch controls and full gamepad support</li>
                    </ul>
                </p>
            </Container>
        </>
    );
}