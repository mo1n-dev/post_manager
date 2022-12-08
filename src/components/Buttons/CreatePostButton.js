import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const CreatePostButton = () => {
    return (
        <Link to='/posts/create'>
            <Button type='primary'>
                Add New
            </Button>
        </Link>
    )
}

export default CreatePostButton