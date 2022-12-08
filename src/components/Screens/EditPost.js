import React from 'react'
import {
    useParams, useHistory
} from 'react-router-dom'
import postsService from '../../services/postsService'
import { Form, Button, Input} from 'antd';
import { PageHeader } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

const EditPost = () => {
    const history = useHistory()
    // obtaining isbn for specific post
    const {id} = useParams();
  

   

    return (
        <div>
            <PageHeader
                onBack={() => history.goBack()}
                title='Editing' 
                // subTitle={newTitle}
            />
            <Form
                style={{padding: '2%'}}
                onFinish={(values) => {
                    
                    const updatedPost = {
                        title: values.Title,
                        description: values.Summary
                    }
                    postsService
                    .update(id, updatedPost)
                    .then(data => {
                        console.log(data, "updated");
                        history.goBack()
                    })
                    
                }}
                autoComplete='off'
                labelCol={{ span: 3 }}
                // having fields so that form is already filled up by exisiting data
                fields={[
                    {
                        name: ['Title'],
                    },
                    {
                        name: ['User Id'],
                    },
                    {
                        name: ['Summary'],
                    }
                ]}
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
                <Form.Item>
                    <Button  block type='primary' htmlType='submit'>
                        Save Changes
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default EditPost