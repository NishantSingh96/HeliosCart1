import React from 'react';

// import customc component;
import Sidebar from '../Sidebar';
import BillingDetail from '../BillingDetail';

// import css
import './MainComponent.css';

class MainComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // purchaseIndentNumber: 'PC-1441'
            billingObj: {
                purchaseIndentNumber: 'PC-1441'
            }
        }
    }

    // we can use redux to better manage the state management here

    onPurchaseIndentNumberChange = e => {
        console.log(e.target.value);
        this.setState(prevState => ({
            billingObj: {                   // object that we want to update
                ...prevState.billingObj,    // keep all other key-value pairs
                purchaseIndentNumber: e.target.value       // update the value of specific key
            }
        }))
    }

    onSubmitForm = () => {
        // here we can get the value set during various step on this.state object and do the saving into the database.
    }

    //Similarly there can be multiple onChange events for different input fields and have some initalValue as per requirements

    render(){
        const {billingObj} = this.state;
        return (
            <div className="main-component-container">
                <Sidebar />
                <BillingDetail onPurchaseIndentNumberChange={this.onPurchaseIndentNumberChange} intialValue={billingObj.purchaseIndentNumber}/>
            </div>
        )
    }
}

export default MainComponent;