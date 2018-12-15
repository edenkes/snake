import React, {Component} from 'react'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import {connect} from 'react-redux';
import {newSearch} from '../actions/itemAction';

class DomainModal extends Component{
    componentDidMount(){
        if (this.props.website)
            this.props.newSearch({domain: this.props.website});
    }

    state = {
        modal:false,
        name: ''
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    onSubmit = e => {
        e.preventDefault();

        const website = {
            domain: this.state.name,
        };

        this.props.newSearch(website);

        // Close model
        this.toggle();
    };

    render() {

        console.log("this.props.website", this.props.website)
        return(
            <div>
                <Button
                    color="dark"
                    onClick={this.toggle}>
                    Search new website
                </Button>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Search Domain advertiser in website</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item">
                                    Search for new website
                                </Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="item"
                                    placeholder="Website Name"
                                    onChange={this.onChange}
                                />
                                <br/>
                                <ModalFooter className="pb-0">
                                    <Button color="primary">Search</Button>{' '}
                                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                                </ModalFooter>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    item: state.item
});

export default connect(mapStateToProps, {newSearch})(DomainModal);