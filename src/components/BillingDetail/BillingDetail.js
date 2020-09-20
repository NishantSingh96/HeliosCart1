import React from 'react';

// import customc components
import Header from '../Header';
import PurchaseDetail from '../PurchaseDetail';
import ProductDetail from '../ProductDetail';
import TotalCost from '../TotalCost';
import IndividualProduct from '../IndividualProduct';
import productDetail from '../IndividualProduct/helper';

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
            <TotalCost />
            <IndividualProduct productNumber="Product-1" productTitle="25 mm LMS (Low Mechanical Strength) GI Conduit" productSubTitle="Electric Pole" productDetail={productDetail}/>
        </div>
    )
}

export default BillingDetail;