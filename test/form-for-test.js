import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import FormFor from '../src/form-for';
import { describe, it } from 'mocha';
import { spy } from 'sinon';

chai.use(chaiEnzyme());

describe('FormFor', () => {
  describe('#submitText', () => {
    it('renders Create by default', () => {
      expect(
        shallow(<FormFor />).find('input[type="submit"]').props().value
      ).to.equal('Create');
    });

    it('renders Update if object has ID', () => {
      expect(
        shallow(<FormFor object={{ id: 1 }} />).find('input[type="submit"]').props().value
      ).to.equal('Update');
    });

    it('user can override', () => {
      const submitValue = 'Save';
      expect(
        shallow(<FormFor submitValue={submitValue} />)
          .find('input[type="submit"]').props().value
      ).to.equal(submitValue);
    });
  });

  describe('#renderCancelButton', () => {
    it('renders nothing if no handler is given', () => {
      expect(
        shallow(<FormFor />)
      ).to.not.contain(<input type="button" value="Cancel" />);
    });

    it('renders cancel button if handler is given', () => {
      expect(
        shallow(<FormFor onCancel={() => {}} />)
      ).to.contain(<input type="button" value="Cancel" />);
    });
  });

  describe('#handleSubmit', () => {
    it('calls the onSubmit prop', () => {
      const onSubmit = spy();
      shallow(<FormFor onSubmit={onSubmit} />).find('form').simulate('submit');
      expect(onSubmit.calledOnce).to.equal(true);
    });
  });

  describe('#inputs', () => {
    it('renders form inputs based on object', () => {
      const object = { name: '', description: '' };
      expect(
        shallow(<FormFor object={object} />).render().find('input[type!="submit"]').length
      ).to.equal(Object.keys(object).length);
    });
  });
});
