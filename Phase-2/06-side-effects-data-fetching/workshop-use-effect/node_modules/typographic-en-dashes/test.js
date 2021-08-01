import endashes from './index';
import { equal } from 'assert';

it('should fix en dashes in date ranges', ()=> {
  equal(endashes(`Kurt Cobain (1967-1994)`), `Kurt Cobain (1967–1994)`);
});
