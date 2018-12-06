import React, {Component} from 'react';
import {Container, Input} from 'reactstrap';
import {connect} from 'react-redux'
import PropTypes from "prop-types";
import {handleChange, sortTable} from "../actions/itemAction";

class SearchComp extends Component{
    render() {
        const  {inputSearch} = this.props.item;
        return(
            <Container >
                <Input
                    type="search"
                    name="inputSearch"
                    id="search1"
                    value={inputSearch}
                    onChange = {this.props.handleChange}
                    placeholder="search"
                />
            </Container>
        )
    }
}

SearchComp.propTypes = {
    handleChange: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    item: state.item
});

const mapActionsToProps = {
    handleChange
};

export default connect(mapStateToProps, mapActionsToProps /*{handleChange}*/)(SearchComp);