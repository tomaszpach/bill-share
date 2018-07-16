import React from 'react';

import {ListItem} from 'material-ui/List';
import Satisfied from 'material-ui/svg-icons/social/sentiment-very-satisfied';
import UnSatisfied from 'material-ui/svg-icons/social/sentiment-very-dissatisfied';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';

const Expense = (props) => {
    const id = props.expense.id,
        who = props.expense.who,
        cost = props.expense.cost,
        payback = props.expense.payback,
        abs = Math.abs(payback); // Change negative value

    return (
        <ListItem primaryText={`${who} wydał(a): ${cost} zł.`}
                  secondaryText={
                      <span
                          style={{color: payback < 0 ? '#F44336' : '#85bb65'}}>{payback < 0 ? 'Musisz oddać: ' : 'Musisz odzyskać: '}
                          <b>{abs}</b> zł</span>
                  }
                  rightIcon={<NavigationExpandMoreIcon data-id={id}/>}
                  leftIcon={payback < 0 ? (
                      <UnSatisfied/>
                  ) : (
                      <Satisfied/>
                  )}/>
    )
};

export default Expense;