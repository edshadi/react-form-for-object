import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import Input from '../src/input';
import TextInput from '../src/text-input';
import { describe, it } from 'mocha';
import CheckboxInput from '../src/checkbox-input';
import NumberInput from '../src/number-input';
import HiddenInput from '../src/hidden-input';
import SelectInput from '../src/select-input';
import PasswordInput from '../src/password-input';
import TextareaInput from '../src/textarea-input';
import DateInput from '../src/date-input';
import ColorInput from '../src/color-input';
import DatetimeInput from '../src/datetime-input';
import EmailInput from '../src/email-input';
import TimeInput from '../src/time-input';

chai.use(chaiEnzyme());
describe('Input', () => {
  describe('#inputs', () => {
    [
      { type: 'HiddenInput', data: { value: 1, name: 'id' } },
      { type: 'TextInput', data: { value: 'abc', name: 'name' } },
      { type: 'PasswordInput', data: { value: 'abc', name: 'password' } },
      { type: 'EmailInput', data: { value: 'me@example.com', name: 'email' } },
      { type: 'CheckboxInput', data: { value: true, name: 'completed' } },
      { type: 'TextareaInput', data: { value: 'abc', name: 'description' },
        options: { type: 'textarea' } },
      { type: 'NumberInput', data: { value: 3, name: 'priority' } },
      { type: 'DateInput', data: { value: '2014-10-09', name: 'createdAt' },
        options: { type: 'date' } },
      { type: 'SelectInput', data: { value: 'Home', name: 'list' },
        options: { type: 'select', values: [
          { value: 'Home', label: 'Home' },
          { value: 'Work', label: 'Work' },
        ] },
    },
    { type: 'ColorInput', data: { value: '#abcdef', name: 'color' },
      options: { type: 'color' } },

    ].forEach((item) => {
      it(`${item.type} input`, () => {
        expect(
          shallow(<Input data={item.data} options={item.options} />).find(item.type).length
        ).to.equal(1);
      });
    });
  });
  describe('input components', () => {
    [
      { component: TextInput, inputType: 'text',
        data: { name: 'inputName', value: 'some value' },
        options: { placeholder: 'placeholder', className: 'klass' },
      },
      { component: PasswordInput, inputType: 'password',
        data: { name: 'inputName', value: 'some value' },
        options: { placeholder: 'placeholder', className: 'klass' },
      },
      { component: ColorInput, inputType: 'color',
        data: { name: 'inputName', value: 'some value' },
        options: { className: 'klass' },
      },
      { component: DateInput, inputType: 'date',
        data: { name: 'inputName', value: 'some value' },
        options: { className: 'klass' },
      },
      { component: DatetimeInput, inputType: 'datetime-local',
        data: { name: 'inputName', value: 'some value' },
        options: { className: 'klass' },
      },
      { component: EmailInput, inputType: 'email',
        data: { name: 'inputName', value: 'some value' },
        options: { placeholder: 'placeholder', className: 'klass' },
      },
      { component: HiddenInput, inputType: 'hidden',
        data: { name: 'inputName', value: 'some value' },
        options: { className: 'klass' },
      },
      { component: NumberInput, inputType: 'number',
        data: { name: 'inputName', value: 'some value' },
        options: { placeholder: 'placeholder', className: 'klass' },
      },
      { component: TimeInput, inputType: 'time',
        data: { name: 'inputName', value: 'some value' },
        options: { className: 'klass' },
      },
      { component: CheckboxInput, inputType: 'checkbox',
        data: { name: 'inputName' },
        options: { className: 'klass' },
      },
    ].forEach((item) => {
      it(`${item.component.name} renders ${item.inputType} input type`, () => {
        const component = shallow(<item.component data={item.data} options={item.options} />)
          .find(`input[type="${item.inputType}"]`);
        expect(component.length).to.equal(1);
        Object.keys(item.data).forEach((k) => {
          expect(component.props()[k]).to.equal(item.data[k]);
        });

        Object.keys(item.options).forEach((k) => {
          expect(component.props()[k]).to.equal(item.options[k]);
        });
      });
    });
    it('renders a textarea', () => {
      const item = {
        data: { name: 'textarea', value: 'some value' },
        options: { placeholder: 'placehoder', className: 'klass' },
      };
      const component = shallow(<TextareaInput data={item.data} options={item.options} />)
        .find('textarea');

      expect(component.length).to.equal(1);

      Object.keys(item.data).forEach((k) => {
        expect(component.props()[k]).to.equal(item.data[k]);
      });

      Object.keys(item.options).forEach((k) => {
        expect(component.props()[k]).to.equal(item.options[k]);
      });
    });

    it('renders a select', () => {
      const item = {
        data: { name: 'list', value: 'some value' },
        options: { className: 'klass', values: [
            { value: 'Home', label: 'Home' },
            { value: 'Work', label: 'Work' },
        ] },
      };
      const component = shallow(<SelectInput data={item.data} options={item.options} />)
        .find('select');

      expect(component.length).to.equal(1);

      Object.keys(item.data).forEach((k) => {
        expect(component.props()[k]).to.equal(item.data[k]);
      });

      Object.keys(item.options).forEach((k) => {
        if (k !== 'values') expect(component.props()[k]).to.equal(item.options[k]);
      });

      expect(component.find('OptionForSelect').length)
        .to.equal(item.options.values.length);
    });
  });
});
