import React from 'react';
import { Grid, Form, Checkbox } from 'semantic-ui-react';

// import custom component
import FieldComponent from '../FieldComponent';

// import css
import './ProductDetail.css';

const ProductDetail = props => {
    const {isSellerType} = props;
    const addressOptions = [
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
    const nameOptions = [
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
    return (
        <div className="product-detail-main-container">
            <Grid>
                <Grid.Row>
                    {isSellerType && <div className="product-detail-title">Seller Details</div>}
                    {!isSellerType && <div className="product-detail-title">Buyer Details</div>}
                </Grid.Row>
                <Grid.Row className="grid-row">
                    <Grid.Column width={8}>
                        <FieldComponent label="Company Name" type="text" withoutBorder={false} />
                    </Grid.Column>
                    <Grid.Column width={8}><span className="contact-person-text">Contact Person</span></Grid.Column>
                </Grid.Row>
                <Grid.Row className="grid-row">
                    <Grid.Column width={8}>
                        <FieldComponent label="Address" type="dropdown" dropDownOptions={addressOptions} withoutBorder={false} />
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <FieldComponent label="Name" type="dropdown" dropDownOptions={nameOptions} withoutBorder={false} />
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
        </div>
    )
}

export default ProductDetail;