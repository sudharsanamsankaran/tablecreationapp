import React from "react";
import './App.css';

class AddDetails extends React.Component {
   state = {
    id: "",
    name: "",
    age: "",
    is_manager: "",
    start_date:""
  };

  add = (e) => {
    e.preventDefault()
    if (this.state.name === "" || this.state.id === "") {
      alert("All the fields are mandatory!");
      return;
    }
    this.props.addtoListHandler(this.state);
    
    this.setState({ id:"", name: "" ,age: "",is_manager: "",start_date:""});

  };
  render() {
    return (
      <div >
        <h2 > ADD DETAILS</h2>
        <form  onSubmit={this.add} >
          <div className="field">
            <label>ID</label>
            <input
              type="text"
              name="id"
              placeholder="ID"
              value={this.state.id}
              onChange={(e) => this.setState({ id: e.target.value })}
            />
          </div>

          <div className="field">
            <label>NAME</label>
            <input
              type="text"
              name="name"
              placeholder="NAME"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>

          <div className="field">
            <label>AGE</label>
            <input
              type="text"
              name="age"
              placeholder="AGE"
              value={this.state.age}
              onChange={(e) => this.setState({ age: e.target.value })}
            />
          </div>


          <div className="field">
            <label>Manager</label>
            <input
              type="text"
              name="is_manager"
              placeholder="is_manager"
              value={this.state.is_manager}
              onChange={(e) => this.setState({ is_manager: e.target.value })}
            />
          </div>
          <div className="field">
            <label>StartDate</label>
            <input
              type="text"
              name="start_date"
              placeholder="start_date"
              value={this.state.start_date}
              onChange={(e) => this.setState({ start_date: e.target.value })}
            />
          </div>
          
          <button className="uibuttonblue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddDetails;