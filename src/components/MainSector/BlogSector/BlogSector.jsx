import React, {Component} from 'react';
import BlogListItem from './BlogListItem/BlogListItem';

class BlogSector extends Component {

    render() {
        return (
            <div className="item-main blog-sector">
                <BlogListItem blogList={this.props.blogList}/>
            </div>
        )
    }
}

export default BlogSector;