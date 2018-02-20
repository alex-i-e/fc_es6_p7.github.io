import React, {Component} from 'react';

class BlogButton extends Component {
    constructor() {
        super();
    }

    onClickNewPost () {

    }

    render () {

        return (
            <div className="blog-button">
                <button onClick={this.onClickNewPost}>
                    Create new Post
                </button>
            </div>
        )
    }
}

export default BlogButton;