import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      messages: [
        'Hello there how are you',
        'I am fine, and you?'
      ]
    };
  }

  render(){
    debugger;
    var messageNodes = this.state.messages.map((message) => {
      return (
        <div style={{color: 'green'}}>{message}</div>
      );
    });

    return(
      <div>{messageNodes}</div>
    );
  }
}

export default App;
