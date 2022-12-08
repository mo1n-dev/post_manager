import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const ViewMoreButton = ({post}) => {
    return (
        <Link to={`/posts/${post.postId}`}>
            <Button type='primary'>
                View More
            </Button>
        </Link>
    )
}

export default ViewMoreButton