import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
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
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Teléfono Consultorio" secondary="11 4123 - 3434" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem key="Email" component="a" href="mailto:name@email.com" >
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText  primary="Email" secondary="sebastian@gmail.com"  />
          
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem key="Phone" component="a" href="https://api.whatsapp.com/send?phone=541131072033&amp;text=hola,%20me%20gustaría%20recibir%20mas%20información%20" >
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Celular" secondary="11 3102 2033" />
      </ListItem>
    </List>
  );
}
