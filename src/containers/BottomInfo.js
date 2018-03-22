import React from 'react'

// Material UI
import {Card, CardHeader, CardText} from 'material-ui/Card';

export default class bottomHeader extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }

    render() {
        return (
            <div className='bottom-info'>
                <Card>
                    <CardHeader
                        title="Jak to działa?"
                        actAsExpander={true}
                        showExpandableButton={true}
                    />
                    <CardText expandable={true}>
                        <p>Wpisz powyżej ile Ty i Twoi znajomi wydaliście na wspólne zakupy, a aplikacja obliczy wspólny
                            rachunek i wskaże, który znajomy jest na <b style={{color: '#85bb65'}}>plusie</b> i musi odzyskać pieniądze, lub jest na
                            <b style={{color: '#f44336'}}> minusie</b> i musi oddać pieniądze.</p>
                        <p>Aplikacja sumuje wszystkie poniesione koszty i dzieli je na liczbę uczestników. Następnie
                            aplikacja oblicza różnicę pomiędzy tym ile każdy powinien wydać, a tym ile wydał. Na tej
                            podstawie jest w stanie wskazać kto nadpłacił, a kto musi oddać pieniądzę, tak by wszyscy
                            zapłacili po równo.</p>
                    </CardText>
                </Card>

                <Card>
                    <CardHeader
                        title="Przykład"
                        actAsExpander={true}
                        showExpandableButton={true}
                    />
                    <CardText expandable={true}>
                        <h3>Organizujesz grilla wraz ze znajomymi</h3>
                        <p>Tomek wydał 13zł, Krzysiek 31zł, Mariusz 2zł. </p>
                        <h4>Podsumowanie</h4>
                        <p>Udział wzięło: <b>3</b> osoby</p>
                        <p>Lącznie wydano: <b>46</b> zł</p>
                        <p>Podzielony koszt: <b>15.33</b> zł</p>
                        <ul>
                            <li>Tomek wydał: 13 zł. <span style={{color: '#f44336'}}>Musi oddać: <b>2.33</b> zł</span></li>
                            <li>Krzysiek wydał: 31 zł. <span style={{color: '#85bb65'}}>Musi odzyskać: <b>15.67</b> zł</span></li>
                            <li>Mariusz wydał: 2 zł. <span style={{color: '#f44336'}}>Musi oddać: <b>13.33</b> zł</span></li>
                        </ul>
                    </CardText>
                </Card>
            </div>
        )
    }
}