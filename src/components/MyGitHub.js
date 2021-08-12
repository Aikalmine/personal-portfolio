function MyGitHub(){
    return (
        <section class="github section">
            <div class="section-inner shadow-sm rounded">
                <h2 class="heading">My GitHub</h2>
                <p>You can embed your GitHub contribution graph calendar using IonicaBizau's <a rel="noreferrer" href="https://github.com/IonicaBizau/github-calendar" target="_blank">GitHub Calendar</a> widget. 
                </p>
                <div id="github-graph" class="github-graph">

                </div>

                <p>You can also embed your GitHub activities using Casey Scarborough's <a rel="noreferrer" href="https://github.com/caseyscarborough/github-activity" target="_blank">GitHub Activity Stream</a> widget.    
                </p>                    
                <div id="ghfeed" class="ghfeed">
                </div>
                
            </div>
        </section>
    );
}

export default MyGitHub;