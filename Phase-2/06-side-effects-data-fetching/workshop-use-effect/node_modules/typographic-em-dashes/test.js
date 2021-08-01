import emdashes from './index';
import { equal } from 'assert';

it('should fix typewriters’ em dashes', ()=> {
  equal(emdashes(`--`), `—`);
});

it('should wrap em dashe with hair whitespaces ', ()=> {
  equal(emdashes(`foo -- bar`), `foo — bar`);
  equal(emdashes(`foo — bar`), `foo — bar`);
});
