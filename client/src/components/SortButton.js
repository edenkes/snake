import React, {Component} from 'react';
import {Container, Button } from 'reactstrap';
import {connect} from 'react-redux'
import { FaArrowDown, FaArrowUp} from 'react-icons/fa';
import PropTypes from "prop-types";
import {getItems, sortTable} from "../actions/itemAction";

class SortButton extends Component{
    state = {
        isSortCount: -1,
        isSortDomain: 1,
    };

    toggleSort = () => {
        if (this.props.attributes === "domain") {
            this.setState({
                isSortDomain: -1 * this.state.isSortDomain
            });
        }else if (this.props.attributes === "count") {
            this.setState({
                isSortCount: -1 * this.state.isSortCount
            });
        }
    };

    sortByType = () => {
        this.toggleSort();
        if (this.props.type === "String") {
            this.props.sortTable((obj1, obj2) => {
                // Descending: first domain name less than the count
                return  this.isSortUp() * obj1[this.props.attributes].localeCompare(obj2[this.props.attributes])})
        }else if (this.props.type === "number") {
                this.props.sortTable((obj1, obj2) => {
                    // Descending: first count less than the previous
                    return this.isSortUp() * (obj1[this.props.attributes] - obj2[this.props.attributes])})
        }else {
            console.log("error - No such type");
            this.props.sortTable((obj1, obj2) => {
                // Ascending: first count less than the previous
                return this.isSortUp() * (obj1.count - obj2.count);
            });
        }
    };

    isSortUp = () => {
        if (this.props.attributes === "domain")
            return this.state.isSortDomain;
        else if (this.props.attributes === "count")
            return this.state.isSortCount;
        else return 1
    };

    render() {
        return(
            <Container >
                <Button
                    className="bg-transparent"  onClick={this.sortByType}>
                    {this.isSortUp() === -1 ? <FaArrowDown size={25}/> : <FaArrowUp  size={25}/>}
                </Button>
            </Container>
        )
    }

}

SortButton.propTypes = {
    sortTable: PropTypes.func.isRequired,

};

const mapStateToProps = () => ({
});

const mapActionsToProps = {
    sortTable
};

export default connect(mapStateToProps, mapActionsToProps /*{sortTable}*/)(SortButton);