import apostrophes from './index';
import { equal } from 'assert';

it('should fix omission of one or more letters', ()=> {
  equal(apostrophes(`I'm looking forward`), `I’m looking forward`);
  equal(apostrophes(`Don't do it!`), `Don’t do it!`);
});

it('should fix possessive case', ()=> {
  equal(apostrophes(`as in the eagle's feathers`), `as in the eagle’s feathers`);
  equal(apostrophes(`in one month's time`), `in one month’s time`);
});

it('should fix shorthand for decades', ()=> {
  equal(apostrophes(`'60s and '80s`), `’60s and ’80s`);
});

it('should fix normal shorthand for "and"', ()=> {
  equal(apostrophes(`rock'n'roll`), `rock’n’roll`);
});

it('should fix weird shorthand for "and"', ()=> {
  equal(apostrophes(`rock 'n' roll`), `rock ’n’ roll`);
});

it('should not fuck up quotes', ()=> {
  equal(apostrophes(`His name is 'Chappie'`), `His name is 'Chappie'`);
});
