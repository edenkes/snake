import React, {Component} from 'react';
import {Container, Button } from 'reactstrap';
import {connect} from 'react-redux'
import {FaDownload} from 'react-icons/fa';
import PropTypes from "prop-types";

class DownloadButton extends Component{
    downloadJSONFile = () => {
        const element = document.createElement("a");
        const file = new Blob([JSON.stringify(this.props.item.items)], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "resultAds.txt";
        element.click();
    };

    render() {
        return(
            <Container >
                <Button className="float-right p-1 bg-dark" onClick={this.downloadJSONFile}>
                    <FaDownload size={40}/>
                </Button>
            </Container>
        )
    }
}

DownloadButton.propTypes = {
    item: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    item: state.item
});


export default connect(mapStateToProps, {})(DownloadButton);