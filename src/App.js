import React, { useState } from 'react'
import './App.less'
import Post from './components/Screens/Post'
import CreateNewPost from './components/Screens/CreateNewPost'
import EditPost from './components/Screens/EditPost'
import PostTable from './components/Screens/PostTable'
import {
    BrowserRouter as Router,
    Switch, Route,
} from 'react-router-dom'

// Routing to the different screens

const App = () => {
    const [posts, setPosts] = useState([])
    return (
        <Router>
            <Switch>
                <Route exact path='/posts'>
                    <PostTable posts={posts} setPosts={setPosts}/>
                </Route>
                <Route exact path='/posts/create'>
                    <CreateNewPost posts={posts} setPosts={setPosts}/>
                </Route>
                <Route exact path='/posts/edit/:id'>
                    <EditPost />
                </Route>
                <Route exact path='/posts/:id'>
                    <Post posts={posts} setPosts={setPosts}/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App;
