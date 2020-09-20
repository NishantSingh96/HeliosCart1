import React from 'react';
import { Grid } from 'semantic-ui-react';

// import css
import './IndividualCost.css';

const IndividualCost = props => {
    const {key, productName, locations, quantity, amount} = props;
    return (
        <Grid.Row className="indivual-cost-container" key={key}>
            <Grid.Column className="indivual-cost-property product" width={7}>{productName}</Grid.Column>
            <Grid.Column className="indivual-cost-property" width={3}>{locations}</Grid.Column>
            <Grid.Column className="indivual-cost-property" width={3}>{quantity}</Grid.Column>
            <Grid.Column className="indivual-cost-property" width={3}>{amount}</Grid.Column>
        </Grid.Row>
    )
}

export default IndividualCost;