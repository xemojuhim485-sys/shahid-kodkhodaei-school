import {describe,it,expect} from 'vitest';
function alternating(value:string,week:number){const [a,b]=value.split('/').map(x=>x.trim());return week%2===0?a:b}
describe('alternating weekly subjects',()=>{it('switches subject every week',()=>{expect(alternating('ریاضی / علوم',2)).toBe('ریاضی');expect(alternating('ریاضی / علوم',3)).toBe('علوم')})});
