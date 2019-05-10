import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      userId: '',
      title: '',
      body: ''
    }
  }

  changeHandler = (e) => {
    this.setState({
      // by making use of the NAME attribute, we don't need separate handlers for each input
      [e.target.name] : e.target.value
    })
  }
  
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state)
    axios.post('https://jsonplaceholder.typicode.com/posts', this.state) // post method takes in a 2nd argument (the data that has to be sent.. in our case, the state)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    const { userId, title, body } = this.state
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <input type="text" name="userId" value={userId} onChange={this.changeHandler} />
          </div>
          
          <div>
            <input type="text" name="title" value={title} onChange={this.changeHandler} />
          </div>

          <div>
            <input type="text" name="body" value={body} onChange={this.changeHandler} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default PostForm