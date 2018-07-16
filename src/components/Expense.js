import React from 'react';

import {ListItem} from 'material-ui/List';
import Satisfied from 'material-ui/svg-icons/social/sentiment-very-satisfied';
import UnSatisfied from 'material-ui/svg-icons/social/sentiment-very-dissatisfied';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';

const Expense = (props) => {
    const id = props.expense.id,
        who = props.expense.who,
        cost = props.expense.cost,
        payback = +props.expense.payback,
        abs = Math.abs(payback); // Change negative value

    let color = '#F44336',
        text = 'Musisz oddać: ',
        value = abs,
        currency = '';

    if (payback === 0) {
        color = '#232dbb';
        text = null;
        value = null;
        currency = null;
    } else if (payback > 0) {
        color = '#85bb65';
        text = 'Musisz odzyskać: ';
        value = abs;
        currency = 'zł';
    }

    const info = {
        color: color,
        text: text,
        value: value,
        currency: currency

    };

    return (
        <ListItem primaryText={`${who} wydał(a): ${cost} zł.`}
                  secondaryText={<span style={{color: info.color}}>{info.text}<b>{value}</b> {currency}</span>}
                  rightIcon={<NavigationExpandMoreIcon data-id={id}/>}
                  leftIcon={payback > 0 ? <Satisfied/> : <UnSatisfied/>}
        />
    )
};

export default Expense;