import React from 'react';
import { Accordion, Grid, Icon } from 'semantic-ui-react';
import map from 'lodash/map';

// import css
import './TotalCost.css';

// import helper
import productList from './helper';
import helpImage from '../../images/tooltip.svg';

// import custom componetns
import IndividualCost from './IndivualCost';

class TotalCost extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            activeIndex: 0
        }
    }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index
    
        this.setState({ activeIndex: newIndex })
      }

      totalProducts = () => {
          return map(productList, (item) => {
              return (
                <IndividualCost key={item.key} productName={item.productName} locations={item.locations} quantity={item.quantity} amount={item.amount} />
              )
          })
      }

      render() {
        const {activeIndex} = this.state;
        return (
            <div className="total-cost-parent-container">
                <Accordion>
                    <Accordion.Title
                    active={activeIndex === 0}
                    index={0}
                    onClick={this.handleClick}
                    className="total-cost-title"
                    >
                    Total Cost
                    {activeIndex === 0 && <Icon name='caret up' />}
                    {activeIndex === -1 && <Icon name='caret down' />}
                    </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                <div className="total-cost-detail-list">
                    <Grid>
                        <Grid.Row className="total-cost-product-header-container">
                            <Grid.Column width={7} className="total-cost-product-title">Product Name</Grid.Column>
                            <Grid.Column width={3} className="total-cost-product-details">No. of Locations</Grid.Column>
                            <Grid.Column width={3} className="total-cost-product-details">Quantity</Grid.Column>
                            <Grid.Column width={3} className="total-cost-product-details">Amount <img src={helpImage} alt="tool-tip" className="tool-tip-img" /></Grid.Column>
                        </Grid.Row>
                        {this.totalProducts()}
                    </Grid>
                    <div className="total-cost-value">
                        <div className="toal-cost-value-in-words">
                            <div className="in-words-title">Total in Words: </div>
                            <div className="in-words-value">Two Crore, Seventy Lakh, Sixty Seven Thousand, Three Hundred and Four Indian rupees</div>
                        </div>
                        <div className="total-cost-value-in-number">
                            Grand Total: Rs. 2,70,67,304
                        </div>
                    </div>
                </div>
                </Accordion.Content>
                </Accordion>
            </div>
        )
      }

    
}

export default TotalCost;