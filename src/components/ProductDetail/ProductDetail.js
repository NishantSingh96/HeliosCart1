import React from 'react';
import { Grid, Accordion, Icon } from 'semantic-ui-react';

// import custom component
import FieldComponent from '../FieldComponent';

// import css
import './ProductDetail.css';

class ProductDetail extends React.Component {

    constructor(props) {
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

    addressOptions = [
        {
          key: '0',
          text: 'Shop No. D/45, Near Building No. 103, Kadam Nath Road, Kurla East, Mumbai, MH - 400024',
          value: 'Shop No. D/45, Near Building No. 103, Kadam Nath Road, Kurla East, Mumbai, MH - 400024'
        },
        {
          key: '1',
          text: 'Shop No. D/45, Near Building No. 103, Kadam Nath Road, Kurla East, Mumbai, MH - 400024',
          value: 'Shop No. D/45, Near Building No. 103, Kadam Nath Road, Kurla East, Mumbai, MH - 400024'
        }
      ];
    nameOptions = [
    {
        key: '0',
        text: 'Rohit Sharma',
        value: 'Rohit Sharma'
    },
    {
        key: '1',
        text: 'Ajay Sharma',
        value: 'Ajay Sharma'
    }
    ];
    render() {
        const {activeIndex} = this.state;
        const {isSellerType} = this.props;
        return (
            <div className="product-detail-main-container">
                <Accordion>
                            <Accordion.Title
                            active={activeIndex === 0}
                            index={0}
                            onClick={this.handleClick}
                            className="product-detail-title"
                            >
                            {isSellerType && <span>Seller Details</span>}
                            {!isSellerType && <span>Buyer Details</span>}
                            {activeIndex === 0 && <Icon name='caret up' />}
                            {activeIndex === -1 && <Icon name='caret down' />}
                            </Accordion.Title>
                        <Accordion.Content active={activeIndex === 0}>
                        <Grid>
                            <Grid.Row className="grid-row">
                                <Grid.Column width={8}>
                                    <FieldComponent label="Company Name" type="text" withoutBorder={false} />
                                </Grid.Column>
                                <Grid.Column width={8}><span className="contact-person-text">Contact Person</span></Grid.Column>
                            </Grid.Row>
                            <Grid.Row className="grid-row">
                                <Grid.Column width={8}>
                                    <FieldComponent label="Address" type="dropdown" dropDownOptions={this.addressOptions} withoutBorder={false} />
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <FieldComponent label="Name" type="dropdown" dropDownOptions={this.nameOptions} withoutBorder={false} />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row className="grid-row">
                                <Grid.Column width={8}>
                                    <FieldComponent label="GSTIN" type="text" withoutBorder={false} />
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <FieldComponent label="Contact No." type="text" withoutBorder={false} />
                                </Grid.Column>
                            </Grid.Row>
                            {!isSellerType &&
                            <>
                                <Grid.Row>
                                    <Grid.Column width={16}><div className="billing-detail-title">Billing Details</div></Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={16}>
                                    <div className="same-as-buyer-details-checkbox">
                                        <label className="main">
                                            <input type="checkbox" /> 
                                            <span className="geekmark"></span> 
                                            Same as Buyer Details
                                        </label> 
                                    </div>
                                    </Grid.Column>
                                </Grid.Row>
                            </>
                            }
                        </Grid>
                            
                    </Accordion.Content>
                </Accordion>
    
            </div>
        )
    }
}

export default ProductDetail;