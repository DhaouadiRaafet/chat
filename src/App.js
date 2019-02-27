import React, { Component, createRef } from 'react'
import './App.css'
import './animations.css'

import Notification from './components/Notifcation'

import Formulaire from './components/Formulaire'
import Message from './components/Message'

// Firebase
import base from './base'

// Animations
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group'

class App extends Component {
  state = {
    messages: {},
    pseudo: this.props.match.params.pseudo,
    notification: false
  }

  messagesRef = createRef()

  componentDidMount () {
    base.syncState('/', {
      context: this,
      state: 'messages',
      
    })
  }

  componentDidUpdate () {
    const ref = this.messagesRef.current
    ref.scrollTop = ref.scrollHeight
    
  }

  addMessage = message => {
    const messages = { ...this.state.messages }
    const notification = { ...this.state.notification }

    messages[`message-${Date.now()}`] = message
    //on va garder que les 12 dernierre msg
    Object
      .keys(messages)
      .slice(0, -12)
      .forEach(key => {
        messages[key] = null
      })

      this.setState({notification:true})
      console.log("ajout"+this.state.pseudo+"  msg sended by "+message.pseudo +"  notification" + notification)

    this.setState({ messages })
  }

  isUser = pseudo => pseudo === this.state.pseudo

  render () {
    const messages = Object
      .keys(this.state.messages)
      .map(key => (
        <CSSTransition
          timeout={200}
          classNames='fade'
          key={key}>
          <Message
            isUser={this.isUser}
            message={this.state.messages[key].message}
            pseudo={this.state.messages[key].pseudo} />
        </CSSTransition>
      ))

    return (
    

      <div className='box'>
        <div>
          <div className='messages' ref={this.messagesRef}>
            <TransitionGroup className='message'>
              { messages }
            </TransitionGroup>
          </div>
        </div>
      <Notification /> 
        <Formulaire
          length={140}
          pseudo={this.state.pseudo}
          addMessage={this.addMessage} />
      </div>
    )
  }
}

export default App
