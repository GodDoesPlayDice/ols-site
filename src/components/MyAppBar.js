import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import LinkButton from "../components/LinkButton";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

export default function MyAppBar() {
	const classes = useStyles();
	const theme = useTheme();
	const isMobile = !useMediaQuery('(min-width:770px)');
	let history = useHistory();

	let [drawer, toggleDrawer] = React.useState(false);

	return (
		<div className={classes.root}>
			<AppBar position="fixed">
				<Toolbar>
					{isMobile &&
						<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
							onClick={() => {
								toggleDrawer(!drawer);
							}}
						>
							<MenuIcon />
						</IconButton>
					}
					<Typography
						variant="h6"
						className={classes.title}
						onClick={() => { history.push("/") }}
					>
						Ordinary Least Squares
          			</Typography>
					{!isMobile &&
						<>
							<LinkButton
								to='/'
							>
								Home
          					</LinkButton>
							<LinkButton
								to='/games'
							>
								Games
          					</LinkButton>
							<LinkButton
								to='/about'
							>
								About us
          					</LinkButton>
							<LinkButton
								to='/support'
							>
								Support
          					</LinkButton>
							<LinkButton
								to='/privacy'
							>
								Privacy policy
          					</LinkButton>
						</>
					}

				</Toolbar>
				<Drawer anchor="left" open={drawer} onClose={() => toggleDrawer(false)}>
					<List
					>
						<ListItem button>
							<LinkButton
								to='/'
								onClick={() => toggleDrawer(false)}
							>
								Home
          					</LinkButton>
						</ListItem>
						<ListItem button>
							<LinkButton
								to='/games'
								onClick={() => toggleDrawer(false)}
							>
								Games
          					</LinkButton>
						</ListItem>
						<ListItem button>
							<LinkButton
								to='/about'
								onClick={() => toggleDrawer(false)}
							>
								About us
          					</LinkButton>
						</ListItem>
						<ListItem button>
							<LinkButton
								to='/support'
								onClick={() => toggleDrawer(false)}
							>
								Support
          					</LinkButton>
						</ListItem>
						<ListItem button>
							<LinkButton
								to='/privacy'
								onClick={() => toggleDrawer(false)}
							>
								Privacy policy
          					</LinkButton>
						</ListItem>
					</List>
				</Drawer>
			</AppBar>
		</div>
	);
};