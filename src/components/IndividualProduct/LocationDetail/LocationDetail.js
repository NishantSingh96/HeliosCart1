import React from 'react';
import {Grid} from 'semantic-ui-react';

// import css
import './LocationDetail.css';

// import custom components
import FieldComponent from '../../FieldComponent';

const LocationDetail = props => {
    const {index ,multiLocation, locationNumer, productDetail} = props;
    const {location} = productDetail;
    const locationDetail = location[index];
    const {addressList, nameList, contactList} = locationDetail;
    console.log(addressList)
    return (
        <>
        {multiLocation && 
            (
                <div>
                    <div>Location {locationNumer}</div>
                    <FieldComponent label="Address" type="dropdown" options={addressList} withoutBorder={false} />
                    <div>Store Incharge</div>
                    <FieldComponent label="Name" type="dropdown" options={nameList} withoutBorder={false} />
                    <FieldComponent label="Contact No." type="dropdown" options={contactList} withoutBorder={false} />
                </div>
                
            )
        }
        {/* {!multiLocation && 
            (
            <Grid.Row>
                <Grid.Column width={8}>
                    <div>DELIVERY DETAILS</div>
                    <FieldComponent label="Company Name" value={productDetail.companyName} type="text" withoutBorder={false} />
                </Grid.Column>
                <Grid.Column width={8}>
                    <div>Store incharge</div>
                    <FieldComponent label="Name" type="dropdown" value={nameList} withoutBorder={false} />
                </Grid.Column>
                <Grid.Column width={8}>
                    <FieldComponent label="Address" type="dropdown" value={addressList} withoutBorder={false} />
                </Grid.Column>
                <Grid.Column width={8}>
                    <FieldComponent label="Contact No." type="text" value={contactList} withoutBorder={false} />
                </Grid.Column>
            </Grid.Row>
            )
        } */}
    </>
    )

}

export default LocationDetail;