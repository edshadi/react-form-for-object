/**
 * @jsx React.DOM
 */
var TodoStore = {
  all: function() {
    return [{
      id: 1, // this will be hidden field by default.
      name: "Clean my room",
      description: "My room needs some serious cleaning",
      priority: 3,
      createAt: "2014-10-09",
      completed: false,
      password: "sweet todo",
      list: "Home"
    }]
  },
  find: function(index) {
    return this.all()[index];
  }
}
var App = React.createClass({
  getInitialState: function() {
    return {
      errors: [],
      alert: undefined
    };
  },

  render: function() {
    var formOptions = {
      onSubmit: this.handleSubmit,
      description: { type: 'textarea' },
      createAt: { type: 'date' },
      list: { type: 'select', values: [{value:"Home", show: "Home"}, {value:"Work", show: "Work"}] }
    }
    return(
      <div>
        <span>{this.state.alert}</span>
        <FormFor object={TodoStore.find(0)} options={formOptions} errors={this.state.errors} />
      </div>
    )
  },

  handleSubmit: function(data) {
    // this is where you call an action, e.g. TodoActions.createTodo. For this example
    // I will just simulate errors and success here.
    if(data.name === "") return this.setState({errors: ["name can't be blank"]});
    return this.setState({alert: "Success!", errors: []});
  }
});

React.renderComponent(
  <App />,
  document.body
);
