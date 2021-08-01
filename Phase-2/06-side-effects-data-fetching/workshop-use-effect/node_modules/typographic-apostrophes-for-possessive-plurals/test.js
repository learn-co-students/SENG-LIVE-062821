import apostrophesForPossessivePlurals from './index';
import { equal } from 'assert';

it('Should fix possessive plurals', ()=> {
  equal(apostrophesForPossessivePlurals(`My sisters' friends' investments`),
                                        `My sisters’ friends’ investments`);
});

it('Should fix possessive plurals in the end', ()=> {
  equal(apostrophesForPossessivePlurals(`My sisters' friends' investments'`),
                                        `My sisters’ friends’ investments’`);
});
