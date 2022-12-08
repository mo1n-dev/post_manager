import { Button } from 'antd'
import React from 'react'
import postsService from '../../services/postsService'

const DeletePostButton = ({post}) => {
    
    const deletePost = (post) => {
        postsService
            .remove(post.postId)
            .then(data => {
                console.log("removed");
            })
    }

    return (
        <Button type='primary' onClick={() => deletePost(post)}>
            Delete
        </Button>
    )
}

export default DeletePostButton