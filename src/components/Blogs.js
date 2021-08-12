function Blogs(){
    return (
        <aside class="blog aside section">
            <div class="section-inner shadow-sm rounded">
                <h2 class="heading">Latest Blog Posts</h2>
                <p>You can use Sascha Depold's <a href="https://github.com/sdepold/jquery-rss" target="_blank">Vanilla RSS plugin</a> to pull in your blog post feeds.</p>
                <div id="rss-feeds" class="content">
                </div>
            </div>
        </aside>
    );
}

export default Blogs;