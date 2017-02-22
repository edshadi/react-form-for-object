import React, { PropTypes } from 'react';
import ReactDom from 'react-dom';
import FormFor from '../../src/form-for';
const todo = {
  name: 'Clean my room',
  description: 'My room needs some serious cleaning',
  completed: false,
  list: 'Home',
  position: 1,
};

const inputOptions = {
  labels: true, // by default we use placeholders, but you can turn on labels and we will use both.
  description: { type: 'textarea' },
  list: { type: 'select', values: [{value:"Home", label: "Home"}, {value:"Work", label: "Work"}] },
};
ReactDom.render(
  <FormFor
    object={todo}
    inputOptions={inputOptions}
    onSubmit={(data) => { console.log(data); }}
    onCancel={(data) => { console.log(data); }}
  />,
  document.getElementById('app')
);
