import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
	rootBox: {
		[theme.breakpoints.down('md')]: {
			justifyContent: 'center',
		},
	},
	footerNav: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
		marginRight: 'auto',
		marginLeft: theme.spacing(3),
		marginBottom: theme.spacing(0),

		[theme.breakpoints.down('md')]: {
			width: '100%',
			marginLeft: 'auto',
			marginTop: theme.spacing(3),
			marginBottom: theme.spacing(2),
		},
	},
	footerLink: {
		marginLeft: theme.spacing(3),
		marginRight: theme.spacing(3),
		[theme.breakpoints.down('md')]: {
			marginBottom: theme.spacing(2),
		},
	},
}));

export default function Footer(props) {
	const classes = useStyles();

	const content = {
		brand: {
			image: '/favicon.png',
			width: 110,
		},
		copy: '© 2022 Obsidian All rights reserved.',
		link1: 'Home',
		link2: 'Career Development',
		link3: 'Employers',
        link4: 'Fashion Jobs',
        link5: 'Twitter',
		...props.content,
	};

	let brand;

	if (content.brand.image) {
		brand = (
			<img
				src={content.brand.image}
				alt=""
				width={content.brand.width}
			/>
		);
	} else {
		brand = content.brand.text || '';
	}

	return (
		<footer>
			<Container
				maxWidth="lg"
				style={{ backgroundColor: '#000' }}
			>
				<Box
					py={1}
					display="flex"
					flexWrap="wrap"
					alignItems="center"
					className={classes.rootBox}
					style={{ backgroundColor: '#000', color: '#fff' }}
				>
					<Link href="#" color="inherit" underline="none">
						{brand}
					</Link>
					<Box
						component="nav"
						className={classes.footerNav}
					>
						<Link
							href="#"
							variant="body1"
							color="#fff"
							className={classes.footerLink}
							style={{ color: '#fff' }}
						>
							{content['link1']}
						</Link>
						<Link
							href="#"
							variant="body1"
							color="#fff"
							className={classes.footerLink}
							style={{ color: '#fff' }}
						>
							{content['link2']}
						</Link>
						<Link
							href="#"
							variant="body1"
							color="#fff"
							className={classes.footerLink}
							style={{ color: '#fff' }}
						>
							{content['link3']}
						</Link>
						<Link
							href="#"
							variant="body1"
							color="#fff"
							className={classes.footerLink}
							style={{ color: '#fff' }}
						>
							{content['link4']}
						</Link>
					</Box>

					<Typography
						color="#fff"
						component="p"
						variant="caption"
						gutterBottom={false}
						style={{ fontSize: '1rem' }}
					>
						{content['copy']}
					</Typography>
					<div
						className="social-icons"
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center',
							width: '50%',
							paddingLeft: '2rem',
						}}
					>
						<a href="https://twitter.com/ObsidianAfrica">
							<img src="/twitter.png" alt="" height={40} />
						</a>
						<a href="https://web.facebook.com/profile.php?id=10008321676772">
							<img
								src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-facebook_-512.png"
								alt=""
								height={40}
							/>
						</a>
						<a href="https://www.instagram.com/obsidianadvisory/">
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
								alt=""
								height={40}
							/>
						</a>
						<a href="https://www.youtube.com/channel/UCHSCEBHBiNO6-iTYyrOpohA">
							<img
								src="https://www.freeiconspng.com/thumbs/youtube-logo-png/hd-youtube-logo-png-transparent-background-20.png"
								alt=""
								height={50}
							/>
						</a>
					</div>
				</Box>
			</Container>
		</footer>
	);
}
