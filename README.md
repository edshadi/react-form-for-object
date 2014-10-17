## React Form For

Rails inspired form builder that makes building forms in react a breeze.

### Install
```bash
bower install react-form-for
```

### Useage
```javascript
var todo = {
  name: "Clean my room",
  description: "My room needs some serious cleaning",
  completed: false,
  list: "Home"
}
var formOptions: {
  description: { type: 'textarea' },
  list: { type: 'select', values: ["Home", "Work"] }
}

<FormFor object={todo} options={formOptions} errors={[]} />
```
