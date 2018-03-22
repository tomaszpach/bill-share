import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import rootReducer from './reducers'
import App from './components/App'

// Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
    red500,
    cyan700,
    grey600,
    pinkA100, pinkA200, pinkA400,
    fullWhite,
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';

const store = createStore(rootReducer);

const muiTheme = getMuiTheme({
    fontFamily: '\'Comfortaa\', cursive',
    palette: {
        // textColor: '#85bb65',
        primary1Color: '#85bb65',
        primary2Color: 'red',
        // primary3Color: grey600,
        // accent1Color: pinkA200,
        // accent2Color: pinkA400,
        // accent3Color: pinkA100,
        // secondaryTextColor: fade(fullWhite, 0.7),
        // alternateTextColor: '#303030',
        // canvasColor: '#303030',
        // borderColor: fade(fullWhite, 0.3),
        // disabledColor: fade(fullWhite, 0.3),
        // pickerHeaderColor: fade(fullWhite, 0.12),
        // clockCircleColor: fade(fullWhite, 0.12),
    },
    appBar: {
        height: 50,
    },
});

render(
    <Provider store={store}>
        <MuiThemeProvider muiTheme={muiTheme}>
            <App/>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);