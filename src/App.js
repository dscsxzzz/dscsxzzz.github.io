import React, { useState } from 'react';
import './styles/App.css'
import PostList from './components/PostList';

import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';
function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: "pytohn", body: "abc" },
        { id: 2, title: "JavaScript", body: "acb" },
        { id: 3, title: "jerk", body: "tttt" },
    ])

    const [selectedSort, setSelectedSort] = useState("")

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort)
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
    }

    return (
        <div className='App'>
            <PostForm create={createPost} />
            <hr style={{ margin: "15px 0"}}/>
            <div>
                <MySelect
                    value={selectedSort}
                    onChange={sortPosts}
                    defaulValue="select sort"
                    options={[{
                        value : "title",
                        name : "Title Sort"
                    }, {
                        value: 'body',
                        name : 'Description Sort'
                    }]}
                />
            </div>
            <PostList remove = {removePost} posts={posts} title = "PostList1" />
        </div>
)
}

export default App;