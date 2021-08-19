function Header(){
    return (
        <header class="header">
            <div class="container">     
                <div class="row align-items-center">
                    <div class="col">         
                        <img class="profile-image img-fluid float-start rounded-circle" src="assets/images/profile.png" alt="profile image" />
                        <div class="profile-content">
                            <h1 class="name">Muhammad Ali</h1>
                            <h2 class="desc">Software Enginner</h2>   
                            <ul class="social list-inline">
                                <li class="list-inline-item"><a href="https://twitter.com/aikalmine"><i class="fab fa-twitter"></i></a></li>
                                <li class="list-inline-item"><a href="https://www.linkedin.com/in/dev-mali/"><i class="fab fa-linkedin-in"></i></a></li>
                                <li class="list-inline-item"><a href="https://github.com/Aikalmine"><i class="fab fa-github-alt"></i></a></li>    
                                <li class="list-inline-item"><a href="https://stackoverflow.com/users/12098590/muhammad-ali"><i class="fab fa-stack-overflow"></i></a></li>   
                                <li class="list-inline-item last-item"><a href="https://www.fiverr.com/muhammadali2019?public_mode=true"><i class="fab fa-codepen"></i></a></li>                
                            </ul> 
                        </div>
                    </div>
                    <div class="col-12 col-md-auto">
                        <div class="dark-mode-switch d-flex">
                            <div class="form-check form-switch mx-auto mx-md-0">
                                <input type="checkbox" class="form-check-input me-2" id="darkSwitch" />
                                <label class="custom-control-label" for="darkSwitch">Dark Mode</label>
                            </div>
                        </div>
                        <a class="btn btn-cta-primary" href="" target="_blank"><i class="fas fa-paper-plane"></i> Contact Me</a>        
                    </div>
                </div>       
            </div>
         </header>
    );
}

export default Header;