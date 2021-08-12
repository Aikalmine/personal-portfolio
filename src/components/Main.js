import About from './About';
import LatestProjects from './LatestProject';
import MyGitHub from './MyGitHub';
import MyInfo from './MyInfo';
import Skills from './Skills';
import WorkExperience from './WorkExperience';
import Testimonials from './Testimonials';
import Education from './Education';
import Languages from './Languages';
import Blogs from './Blogs';

function Main(){
    return(
        <div class="container sections-wrapper py-5">
            <div class="row">
                <div class="primary col-lg-8 col-12"> 
                    <About/>
                    <LatestProjects/>
                    <WorkExperience/>
                    <MyGitHub/>
                </div>
                <div class="secondary col-lg-4 col-12">
                    <MyInfo/>
                    <Skills/>
                    <Testimonials/>
                    <Education/>
                    <Languages/>
                    <Blogs/>
                </div>
            </div>
         </div>
    );
}

export default Main;