import { Input, Table, Space } from 'antd'
import React, { useEffect } from 'react'
import EditPostButton from '../Buttons/EditPostButton'
import CreatePostButton from '../Buttons/CreatePostButton'
import DeletePostButton from '../Buttons/DeletePostButton'
import ViewMoreButton from '../Buttons/ViewMoreButton'
import { SearchOutlined } from '@ant-design/icons'
import postsService from '../../services/postsService'

const PostTable = ({posts, setPosts}) => {
    // retrieving data from json
    useEffect(() => {
        postsService
            .getAll()
            .then(posts => {
                setPosts(posts)
            })
    }, [setPosts])
    // header for table + able to filter data using filterDropdown


    const columns = [ 
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            filterDropdown: ({ setSelectedKeys, selectedKeys, confirm}) => {
                return (
                    <>
                        <Input 
                            autoFocus 
                            placeholder = 'Type text here'
                            value = {selectedKeys[0]}
                            onChange = {(e) => {
                                setSelectedKeys(e.target.value ? [e.target.value] : [])
                                confirm({ closeDropdown: false })
                            }}
                            onPressEnter={() => {
                                confirm()
                            }}
                            onBlur={() => {
                                confirm();
                            }}
                        ></Input>
                    </>
                )
            },
            filterIcon: () => {
                return <SearchOutlined />
            },
            onFilter: (value, record) => {
                return record.title.toLowerCase().includes(value.toLowerCase())
            }
        },
        {
            title: 'User',
            dataIndex: 'userId',
            key: 'userId',
            responsive: ['sm'],
            filterDropdown: ({ setSelectedKeys, selectedKeys, confirm}) => {
                return (
                    <>
                        <Input 
                            autoFocus 
                            placeholder = 'Type text here'
                            value = {selectedKeys[0]}
                            onChange = {(e) => {
                                setSelectedKeys(e.target.value ? [e.target.value] : [])
                                confirm({ closeDropdown: false })
                            }}
                            onPressEnter={() => {
                                confirm()
                            }}
                            onBlur={() => {
                                confirm();
                            }}
                        ></Input>
                    </>
                )
            },
            filterIcon: () => {
                return <SearchOutlined />
            },
            onFilter: (value, record) => {
                return record.userId === Number(value)
            }
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            key: 'actions',
            render: (text, record, index) => {
            return (
                <Space>
                    {<ViewMoreButton post={record}/>}
                    {<DeletePostButton post={record}  />}
                    {<EditPostButton post={record}/>}
                </Space> 
            )}
        }
    ]

    // data to fill up the rows of the table
    const data = posts.map(post => {
        return (
            {
                title: post.title,
                userId: post.userId,
                postId: post.id,
            }
        )
    })

    return (
        <div>
            <div style={{display: 'flex'}}>
                <h2 style={{paddingLeft: '1.5%', paddingTop: '1%'}}>
                    Posts Page
                </h2>
                <div style={{ marginLeft: 'auto', paddingRight: '1.5%', paddingTop: '1%' }}>
                    {<CreatePostButton />}
                </div>
            </div>
            <Table 
                style={{padding: '1%'}}
                dataSource={data} 
                columns={columns} 
            />
        </div>
    )
}

export default PostTable