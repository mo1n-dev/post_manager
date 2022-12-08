import React, { useEffect, useState } from 'react'
import postsService from '../../services/postsService'
import {useParams, useHistory} from 'react-router-dom'
import DescriptionsItem from 'antd/lib/descriptions/Item';
import { Descriptions } from 'antd';
import { PageHeader } from 'antd';

const Post = () => {
    const [post, setPost] = useState()
    const history = useHistory();
    const {id} =  useParams();

    useEffect(() => {
        postsService
            .getPost(id)
            .then(data => {
                setPost(data)
            })
    }, [id])
    
    // conditional statement to prevent error since post is undefined before useEffect fires
    if (post !== undefined) {
        return (
            <div>
                <PageHeader 
                    onBack={() => history.goBack()}
                    title='post Information' 
                />
                <Descriptions 
                    style={{padding: '2%'}}
                    title={post.title}
                    bordered
                    column={{ sm: 1, xs: 1 }}
                >
                    <DescriptionsItem label='Title'>
                        {post.title}
                    </DescriptionsItem>
                    
                    <DescriptionsItem label='UserId'>
                        {post.userId}
                    </DescriptionsItem>
                    <DescriptionsItem label='Summary'>
                        {post.body}
                    </DescriptionsItem>
                </Descriptions>

            </div>
        )
    }
    return null;
}

export default Post