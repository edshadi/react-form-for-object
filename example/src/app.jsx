import React from 'react';
import ReactDom from 'react-dom';
import FormFor from 'react-form-for-object';

const TodoStore = {
  all() {
    return [{
      id: 1, // this will be hidden field by default.
      name: 'Clean my room',
      description: 'My room needs some serious cleaning',
      priority: 3,
      createAt: '2014-10-09',
      completed: true,
      password: 'sweet todo',
      list: 'Home',
      email: 'myemail@gmail.com',
      color: '#fc5803',
    }];
  },
  new() {
    return {
      name: null,
      description: null,
      priority: null,
      createAt: null,
      completed: false,
      password: null,
      list: null,
      email: null,
      color: null,
    };
  },

  find(index) {
    return this.all()[index];
  },
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      alert: undefined,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(data) {
    // this is where you call an action, e.g. TodoActions.createTodo. For this example
    // I will just simulate errors and success here.
    if (data.name === "") return this.setState({errors: ["name can't be blank"]});
    console.log(data);
    return this.setState({alert: "Success!", errors: []});
  }

  handleCancel() {
    console.log('cancelling');
  }

  render() {
    const inputOptions = {
      // Uncomment that if you want to display labels for the fields, it's off by default
      labels: false,
      description: { type: 'textarea' },
      createAt: { type: 'date' },
      list: {
        type: 'select', values: [
          { value: 'Home', label: 'Home' },
          { value: 'Work', label: 'Work' },
        ],
      },
      color: { type: 'color' },
      due: { type: 'datetime' },
    };
    return (
      <div>
        <span>{this.state.alert}</span>
        <h2>Create</h2>
        <FormFor
          object={TodoStore.new()}
          inputOptions={inputOptions}
          errors={this.state.errors}
        />
        <h2>Update</h2>
        <FormFor
          object={TodoStore.find(0)}
          inputOptions={inputOptions}
          errors={this.state.errors}
          onSubmit={this.handleSubmit}
          onCancel={this.handleCancel}
        />
      </div>
    );
  }
}

ReactDom.render(
  <App />,
  document.getElementById('app')
);
