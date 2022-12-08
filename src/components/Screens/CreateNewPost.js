import React from 'react'
import postsService from '../../services/postsService';
import {useHistory} from 'react-router-dom'
import { Form, Button, Input} from 'antd';
import { PageHeader } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

const CreateNewPost = ({posts, setposts}) => {
    const history = useHistory()
    const addPost = (values) => {
        const PostObject = {
            title: values.Title,
            genre: values.UserId,
            summary: values.Summary
        }
        postsService
            .create(PostObject)
            .then(newPost => {
            })
    }
    return (
        <div>
            <PageHeader
                onBack={() => history.goBack()}
                title='Creating New Post' 
            />
            <Form
                style={{padding: '2%'}}
                onFinish={(values) => {
                    addPost(values)
                    history.goBack()
                }}
                autoComplete='off'
                labelCol={{ span: 3 }}
            >
                <Form.Item 
                    name='Title' 
                    label='Title'
                    rules= {[
                        {
                            required: true,
                        },
                        { whitespace: true }
                    ]}
                    hasFeedback
                >
                    <Input placeholder='Input Title' />
                </Form.Item>
                <Form.Item 
                    name='UserId' 
                    label='UserId'
                    rules= {[
                        {
                            required: true,
                        },
                        { whitespace: true }
                    ]}
                    hasFeedback
                >
                    <Input placeholder='Input UserId' />
                </Form.Item>
                
                <Form.Item 
                    name='Summary' 
                    label='Summary'
                    rules= {[
                        {
                            required: true,
                        },
                        { whitespace: true }
                    ]}
                    hasFeedback
                >
                    <TextArea rows={5} placeholder='Input Summary' />
                </Form.Item>
                <Form.Item >
                    <Button block type='primary' htmlType='submit'>
                        Add New
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default CreateNewPost