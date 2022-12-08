import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'


const EditPostButton = ({post}) => {
    return (
        <Link to={`/posts/edit/${post.postId}`}>
            <Button type='primary'>
                Edit
            </Button>
        </Link>
    )
}

export default EditPostButton