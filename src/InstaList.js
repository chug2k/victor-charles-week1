import React from 'react';

export default class InstaList extends React.Component {
    render() {
        const posts = this.props.posts && this.props.posts.map(post => {
            return <img src={post.image}/>
        });
    
        return (
            <div> { posts } </div>
        )
    }
}