import React from 'react'
import Header from "./Header";
import DomainModal from "./DomainModal";
import AdvertisersList from "./AdvertisersList";
import {Container} from 'reactstrap';

const Home = ({ match }) => {
    return (
        <Container >
            <Header />
            <DomainModal website={match.params.website}/>
            <AdvertisersList website={match.params.website}/>
        </Container>
    )
};


// const mapStateToProps = state => ({
//     item: state.item
// });

export default Home;
// export default connect(mapStateToProps, {newSearch})(Home);