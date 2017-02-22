import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import Input from '../src/input';
import { describe, it } from 'mocha';

chai.use(chaiEnzyme());

describe('Input', () => {
  describe('#inputs', () => {
    it('renders form inputs based on object', () => {
      const object = { name: '', description: '' };
      expect(
        shallow(<FormFor object={object} />).render().find('input[type!="submit"]').length
      ).to.equal(Object.keys(object).length);
    });
  });
});
