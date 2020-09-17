import React from 'react';

// import customc components
import Header from '../Header';
import PurchaseDetail from '../PurchaseDetail';
import ProductDetail from '../ProductDetail';

// import css
import './BillingDetail.css';

const BillingDetail = props => {
    const {onPurchaseIndentNumberChange, intialValue} = props;
    return (
        <div className="billing-detail-main-container">
            <Header />
            <div className="details-main-container">
                <PurchaseDetail onPurchaseIndentNumberChange={onPurchaseIndentNumberChange} intialValue={intialValue}/>
                <ProductDetail isSellerType/>
                <ProductDetail isSellerType={false}/>
            </div>
        </div>
    )
}

export default BillingDetail;