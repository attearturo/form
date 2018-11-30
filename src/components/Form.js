import React, { Component } from 'react';



class Form extends Component {
    constructor(){
        super();
        this.state = {
            title: "",
            responsible: "",
            description: "",
            priority: "low"
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleInput(e) {
        const {value, name} = e.target;
        console.log(value, name);
        this.setState({
            [name] : value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onAdd(this.state);
        console.log(this.state);
    }


    render() {
        return (
            <div className="card">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input 
                        type="text"
                        name="title"
                        className="form-control"
                        placeholder="Titulo"
                        value= {this.state.title}
                        onChange={this.handleInput}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="responsible"
                            className="form-control"
                            placeholder="Responsable"
                            value={this.state.responsible}
                            onChange={this.handleInput}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="description"
                            className="form-control"
                            placeholder="Descripción"
                            value={this.state.description}
                            onChange={this.handleInput}
                        />
                    </div>
                    <div className="form-group">
                        <select 
                            name="priority"
                            className="form-control"
                            value={this.state.priority}
                            onChange={this.handleInput}
                        >
                            <option>low</option>
                            <option>medium</option>
                            <option>high</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Guardar
                    </button>
                </form>
            </div>
        )
    }
}

export default Form;