import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <h1>This is Home.</h1>
            <div className="home" style={{padding:"80px",backgroundColor:'gray',color:'white',margin:'50px'}}>
                <h1 style={{color:"white"}}>Our services: </h1>
                <Service id={1} title='24 Hours support'></Service>
                <Service id={2} title='Conseptual Session'></Service>
                <Service id={3} title='Offline video download'></Service>
                <Service id={4} title='Special Job preparation'></Service>
                <br/>
                <Link to='/services'><Button variant="primary">Visit All Services</Button></Link>
            </div>
            <Footer></Footer>
        </div>
    );
};

const Service=(props)=>{
    const {id,title}=props;
    return(
        <div>
            <h1>Service-{id}: {title}</h1>
        </div>
    )
}

export default Home;