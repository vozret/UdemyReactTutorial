import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            {/* Link prevents the default behavior (reloading the page)
                                and handles the click on itself
                            */}
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/new-post">New Post</Link></li>
                        </ul>
                    </nav>
                </header>
                {/* We don't want to reload the page, we want to rerender it */}
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={NewPost} />
            </div>
        );
    }
}

export default Blog;