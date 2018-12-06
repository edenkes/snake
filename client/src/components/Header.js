import React, {Component} from 'react';
import {Container} from 'reactstrap';
import {connect} from 'react-redux'
import {getItems} from '../actions/itemAction'
import PropTypes from 'prop-types';

class Header extends Component{
    render() {
        const  {website, items, loading} = this.props.item;
        return(
            <Container >
                <h1 className="mb-4">SNAKA - Script 'N' Analyze program for Ads </h1>
                { !loading && website.length > 0 ?
                    <div>
                        {items.length > 0 ?
                            <h3 style={{textAlignVertical: "center",textAlign: "center",}}>
                                result for https://www.{website}/ads.txt
                            </h3>
                            :
                            <h3 style={{textAlignVertical: "center",textAlign: "center", color:"#8b0000"}}>
                                didn't find result for https://www.{website}/ads.txt
                            </h3>}
                    </div>
                    :
                    <div/>}
            </Container>
        )
    }
}

Header.propTypes = {
    item: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    item: state.item,
});

export default connect(mapStateToProps, {getItems})(Header);