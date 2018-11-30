import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//components
import Navigation from "./components/Navigation";
import Form from "./components/Form";

//data
import { data } from './data.json';
console.log(data);

class App extends Component {

  constructor(){
    super();
    this.state = {
      data
    };

    this.handleAdd = this.handleAdd.bind(this);
  }


  handleAdd(data){
    this.setState({
      data: [...this.state.data, data]
    })
  }

  handleRemove(index){
    if (window.confirm("Seguro que quieres borrarla?")) {
      this.setState({
        data: this.state.data.filter((e, i) => {
          return i !== index
        })
      })
    }
      console.log(index)
  }

  render() {
    const todos = this.state.data.map((data, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-header" >
              <h3><strong>{data.title}</strong></h3>

            <span className="badge badge-pill badge-danger ml-2">
              {data.priority}
            </span>
            </div>

          <div className="card-body">
              <p>{data.responsable}</p>
              <p><mark>{data.description}</mark></p>
          </div>

          <div className="card-footer">
            <button
              className="btn btn-danger"
              onClick={this.handleRemove.bind(this, i)}            
              >
              Borrar
            </button>
          </div>

          </div>
        </div>
        )
      });

    //return the component
    return (
      <div className="App">
        < Navigation titulo="Navegación">
        </Navigation>
        
        <h1><strong>Form
           <span className="badge badge-pill badge-light ml-2">
            {this.state.data.length}
          </span>
        </strong></h1>
        

        <div className="container">
          <div className="row mt-4">

            <div className="col-md-4 text-center" >
              <img src={logo} className="App-logo" alt="logo" style={{ width: 100, margin:0 }} />
              <Form onAdd={this.handleAdd} />
            </div>

            <div className="col-md-8">
              <div className="row">
                {todos}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
