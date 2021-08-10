import { Component } from "react"

class Footer extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <footer class="footer">
                <div class="container text-center">
                    <small class="copyright">Copyright &copy;{new Date().getFullYear()} </small>
                </div>
            </footer>
        );
    };
}

export default Footer;