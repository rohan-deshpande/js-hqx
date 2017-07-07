/*global describe, it */

import chai from 'chai';
import hqx from '../src/hqx.js';

chai.expect();

const assert = chai.assert;

describe('module', () => {
  it('should have the hqx method', (done) => {
    assert.isTrue(typeof hqx === 'function');
    done();
  });
});
