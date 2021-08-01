import ellipses from './index';
import { equal, notEqual } from 'assert';

it('should fix single cases', ()=> {
  equal(ellipses('foo...bar'), 'foo…bar');
});

it('should fix multiple cases', ()=> {
  equal(ellipses('foo...bar...moo'), 'foo…bar…moo');
});

it('should fix multiline strings too', ()=> {
  equal(ellipses('multiline\n test...'), 'multiline\n test…');
});

it('should not fix two periods', ()=> {
  equal(ellipses('foo..bar'), 'foo..bar');
});

it('should not replace all the things', ()=> {
  notEqual(ellipses('foo'), '…');
});
