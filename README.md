## React Form For

Rails inspired form builder that makes building forms in react a breeze.

### Install
```bash
bower install react-form-for
```

### Useage
FormFor will determine the type of input based on the your object. However,
You can always override them in the options by passing a type (see example below).

Supply a submit handler with onSubmit key in the options. On submit, FormFor will pass all of the form data to the callback you provided.

FormFor will display all errors supplied to it in the errors prop.

```javascript
var todo = {
  name: "Clean my room",
  description: "My room needs some serious cleaning",
  completed: false,
  list: "Home"
}
var formOptions: {
  onSubmit: function(data, utils) {console.log(data)},
  onCancel: function(data) { //do something like change state to editing false }
  description: { type: 'textarea' },
  list: { type: 'select', values: ["Home", "Work"] }
}

<FormFor object={todo} options={formOptions} errors={[]} />
```

### Input support

- text
- checkbox
- number
- hidden
- select
- password
- textarea
- date
- datetime
- email
- submit
- color

### Utilities
When we call your submitHandler, we pass it a utils object that will have
some useful functions that you could use. Currently, we support the following
utility functions:
- clearInputs: use this to clear all input fields after success.

## Examples
A working example can be found [here](./example)

## TODO
- file
- image
- month
- radio
- range
- reset
- search
- tel
- time
- url
- week
