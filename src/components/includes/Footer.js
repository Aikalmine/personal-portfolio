import { Component } from "react"

class Footer extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <footer class="footer">
                <div class="container text-center">
                    <small class="copyright">Designed with <i class="fas fa-heart"></i> by <a href="https://themes.3rdwavemedia.com" target="_blank">Xiaoying Riley</a> for developers</small>
                </div>
            </footer>
        );
    };
}

export default Footer;