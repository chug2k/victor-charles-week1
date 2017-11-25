import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InstaList from './InstaList';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      posts: [
        {
          id: 1, 
          image: "https://instagram.fsgn4-1.fna.fbcdn.net/t51.2885-15/e35/23099188_1960465217560378_70065515191599104_n.jpg",
          caption: "Chocolate Thunder. Is that racist?",
          likes: 25    
        },
        {
          id: 2,
          image: "https://instagram.fsgn4-1.fna.fbcdn.net/t51.2885-15/e35/23594930_126440671464105_1598861271686447104_n.jpg",
          caption: "#Fall #celebrations at #home, as we are giving thanks to friends, family, and work accomplishments- and an #abundant life.",
          likes: 25
        },
        {
          id: 3,
          image: "https://instagram.fsgn4-1.fna.fbcdn.net/t51.2885-15/e35/23594930_126440671464105_1598861271686447104_n.jpg",
          caption: "#Fall #celebrations at #home, as we are giving thanks to friends, family, and work accomplishments- and an #abundant life.",
          likes: 25
        },        
      ]
    }
  }

  toggleTitle = ()=>{
    const newState = this.state.title ? null : 'shit dont work';
    this.setState({
      title: newState
    })
  }

  render() {
    console.log('HelloWorld');
    return (
      <div className="App">
        <header className="App-header">
          <a href = "#" onClick = {this.toggleTitle}>
            <img src={logo} className="App-logo" alt="logo" />
          </a>
          <h1 className="App-title">{this.state.title || this.props.title}</h1>
        </header>
        <p className="App-intro">
          <InstaList posts={this.state.posts}/>
        </p>
      </div>
    );
  }
}

export default App;
