import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      posts: [],
      errorMsg: ''
    }
  }
  
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      console.log(response)
      // changing the state causes a re-render and now has the API data within the state
      this.setState({
        posts: response.data
      })
    })
    .catch(error => {
      console.log(error)
      this.setState({
        errorMsg: 'Error retrieving data'
      })
    })
  }

  render() {
    const { posts, errorMsg } = this.state // destructures the state property
    return (
      <div>
        List of posts
        {/* if there is anything in the posts array, map through it and display the title */}
        {
          posts.length ? posts.map(post => <div key={post.id}>{post.title}</div>) : null
        }

        {/* this is how to display an error message if there is an error. to test this, change the get request to a broken URL */}
        {
          errorMsg ? <div>{errorMsg}</div> : null
        }
      </div>
    )
  }
}

export default PostList
