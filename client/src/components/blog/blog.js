import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class Blog extends Component {
    render() {
        return (
            <div>
                <Helmet>
                   <meta charSet="utf-8" />
                   <title>News | EcoCrypt.org</title> 
                   <meta name="description" content="Latest news and blog posts from EcoCrypt Community" />
               </Helmet>
                 <h2>Blog</h2>
            </div>
        );
    }
}

export default Blog;
