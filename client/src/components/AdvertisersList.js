import React, {Component} from 'react';
import SortButton from './SortButton'
import SearchComp from './SearchComp'
import DownloadButton from './DownloadButton'
import {Container, Table} from 'reactstrap';
import {connect} from 'react-redux'
import {getItems} from '../actions/itemAction'
import PropTypes from 'prop-types';
const Loader = require('react-loader');

class AdvertisersList extends Component{
    componentDidMount(){
        this.props.getItems();
    }

    render() {  // change
        const  {items, loading} = this.props.item;
        return(
            <Container >
                {items && items.length > 0 ?
                    <div>
                        <DownloadButton />
                    </div>
                    : <div/>}

                <Table striped bordered className="advertisers-list m-4">
                    <thead className="bg-info">
                    <tr>
                        <th>
                            <div className="row">
                                <div className="col-lg-3 col-xl-3">DOMAIN</div>

                                <div className="col-lg-7 col-xl-7 mr-1">
                                    <SearchComp />
                                </div>

                                {items && items.length > 0 ?
                                    <div className="float-right">
                                        <SortButton attributes="domain" type="String"/>
                                    </div>
                                    : <div/>}
                            </div>
                        </th>
                        <th>COUNT
                            {items && items.length > 0 ?
                                <div className="float-right">
                                    <SortButton attributes="count" type="number"/>
                                </div>
                                : <div/>}
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {items.map(({domain, count}) => (
                        <tr key={domain}>
                            <th>{domain}</th>
                            <td>{count}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
                {loading ? <Loader className="spinner"/> : <div/>}
            </Container>
        )
    }
}

AdvertisersList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    item: state.item
});

const mapActionsToProps = { //como
    getItems: getItems,
};

export default connect(mapStateToProps, mapActionsToProps/*{getItems}*/)(AdvertisersList);