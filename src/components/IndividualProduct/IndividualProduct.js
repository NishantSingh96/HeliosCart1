import React from 'react';
import { Accordion, Grid, Icon } from 'semantic-ui-react';
import { map } from 'lodash';

// import css
import './IndividualProduct.css';

// import custom components
import FieldComponent from '../FieldComponent';
import LocationDetail from './LocationDetail';


class IndividualProduct extends React.Component {

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

    multiLocationFunction = () => {
        const { productDetail } = this.props;
        return map(productDetail.location, (product) => {
            if(productDetail.location.length > 1) {
                return <LocationDetail index={product.key} locationNumer={product.locationNumer} multiLocation productDetail={productDetail} />
            } else {
                return <LocationDetail index={product.key} locationNumer={product.locationNumer} multiLocation={false} productDetail={productDetail} />
            }
        })
    }

    render() {
        const {
            productNumber,
            productTitle,
            productSubTitle,
            multiLocation,
            productDetail
        } = this.props;
        const {activeIndex} = this.state;
        return (
            <div>
                <Accordion>
                        <Accordion.Title
                        active={activeIndex === 0}
                        index={0}
                        onClick={this.handleClick}
                        className="total-cost-title"
                        >
                        {productNumber}
                        {activeIndex === 0 && <Icon name='caret up' />}
                        {activeIndex === -1 && <Icon name='caret down' />}
                        </Accordion.Title>
                    <Accordion.Content active={activeIndex === 0}>
                        <div className="individal-product-title">{productTitle}</div>
                        <div className="individal-product-sub-title">Package: {productSubTitle}</div>
                        <div className="individual-product-location-flex-container">
                            {this.multiLocationFunction()}
                        </div>
                        
                    </Accordion.Content>
                    </Accordion>
            </div>
        )
    }
    
}

export default IndividualProduct;