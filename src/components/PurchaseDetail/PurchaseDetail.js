import React from 'react';
import { Grid, Form } from 'semantic-ui-react';

// import custom component
import DownloadIcon from '../../images/download.svg';
import FieldComponent from '../FieldComponent';

// import css
import './PurchaseDetail.css';

const PurchaseDetail = props => {
    const {onPurchaseIndentNumberChange, intialValue} = props;
    return (
        <div className="purchase-detail-container">
            <div className="purchase-title-main-container">
                <div className="purchase-title-container">
                    <span>Purchase Indent</span>
                    <img src={DownloadIcon} alt="download" className="download-icon"/>
                </div>
                <span className="modify-text">Modify</span>
            </div>
            <Form>
                <Grid>
                    <Grid.Row className="grid-row">
                    <Grid.Column width={8}>
                        <FieldComponent label="Purchase Indent Number" value="PC-1441" type="text" withoutBorder={false} onChange={onPurchaseIndentNumberChange} intialValue={intialValue}/>
                    </Grid.Column>
                    <Grid.Column width={2}></Grid.Column>
                    <Grid.Column width={6}>
                        <div className="purchase-order-top-right-container">
                            <FieldComponent label="Date" value="18-08-2020" type="text" withoutBorder={true} />
                            <FieldComponent label="Order No." value="7661" type="text" withoutBorder={true} />
                            <FieldComponent label="Version No." value="1" type="text" withoutBorder={true} />
                        </div>
                    </Grid.Column>
                    </Grid.Row>
                    <Grid.Row className="grid-row">
                        <Grid.Column width={16}><FieldComponent label="Subject" type="text" value="Purchase Indent of 25 mm LMS GI Conduit for CIDCO " withoutBorder={false} /></Grid.Column>
                    </Grid.Row>
                </Grid>
            </Form>
        </div>
    )
}

export default PurchaseDetail;