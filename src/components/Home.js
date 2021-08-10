import { Component } from "react";
import Header from './includes/Header';
import Footer from './includes/Footer';

class Home extends Component
{
    constructor(props){
        super(props);
    } 
    
    render() {
        return (
          <div>
              <Header/>
              <Footer/>
          </div>
        );
    }
}

export default Home;