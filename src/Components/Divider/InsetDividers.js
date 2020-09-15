import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';
import './inseetDividers.scss'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // maxWidth: 600,
    backgroundColor: theme.palette.background.paper,
  },
}));



export default function InsetDividers(props) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem key="Phone" component="a" href="tel:+5491131072033" >
        <ListItemAvatar>
          <Avatar>
            <PhoneIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Teléfono Consultorio" secondary="4407-9488" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem key="Email" component="a" href="mailto:sesantamconsult@gmail.com" >
        <ListItemAvatar>
          <Avatar>
            <AlternateEmailIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText  primary="Email" secondary="sesantamconsult@gmail.com"  />
          
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem key="Phone" component="a" href="https://api.whatsapp.com/send?phone=5491144079488" >
        <ListItemAvatar>
          <Avatar>
            <PhoneIphoneIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Celular" secondary="+54 9 11 4407-9488" />
      </ListItem>
    </List>
  );
}
