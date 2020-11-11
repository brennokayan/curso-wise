import React, { Component } from 'react';
import api from './api';
function myFunction(){
  alert='ola'
}
class App extends Component {

  state = {
    item: [],
  }

  async componentDidMount() {
    const response = await api.get('');

    this.setState({ item: response.data });
  }

  render() {

    const { item } = this.state;

    return (
      <body style={{backgroundColor:'#902490',margin:'0%',textAlign:'center'}}>
      <div style={{color:'#fff',padding:'5%'}}>
        {item.map(item => (
          <ui key={item.id}>
            <h3>
              <strong>Carro: </strong>
              {item.name};<br></br>
              {item.fipe_name};<br></br>
              {item.order};<br></br>
              {item.key};<br></br>
              {item.id};<br></br>
            </h3>
            
            
            <br></br>
          </ui>
        ))}
      </div>
      </body>
    );
  };
};

export default App;