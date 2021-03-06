import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Contacts from '@material-ui/icons/Contacts';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Map from '@material-ui/icons/Map';
import './Tabs.scss'
import Maps from '../Maps/Maps';
import Credentials from '../Credentials/Credentials'
import InsetDividers from '../Divider/InsetDividers'


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    marginTop: 135,
    // width: 700,
    backgroundColor: theme.palette.background.paper,
    
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
   
  

  return (
    <div className="material-box">
      <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab icon={<AccountCircle />} aria-label="AccountCircle" label="Sobre Mi" {...a11yProps(0)} />
          <Tab icon={<Map />} aria-label="Map" label="Dirección" {...a11yProps(1)} />
          <Tab icon={<Contacts />} aria-label="Contacts" label="Contacto" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <p className="description">El Servicio de Clínica Médica está compuesto por un equipo de profesionales que brinda asistencia médica a pacientes que consultan de manera ambulatoria (en consultorios externos), o que requieren internación por enfermedades agudas y crónicas o que requieren internación por enfermedades agudas y crónicas. o que requieren internación por enfermedades agudas y crónicas</p>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <p className="info-style-t">Consultorio Médico</p>
        <p className="info-style-d">Billinghurst 2356 PB 1</p>
        <p className="info-style-d">Capital Federal</p>
        <p className="info-style-t">Horarios de atención</p>
        <p className="info-style-d">Lunes a Viernes</p>
        <p className="info-style-d">18 hs a 21 hs</p>


       
        </TabPanel>
        
        <TabPanel value={value} index={2} dir={theme.direction}>
                <InsetDividers />
        </TabPanel>
      </SwipeableViews>
      
    </div>
    </div>
    
  );
}
