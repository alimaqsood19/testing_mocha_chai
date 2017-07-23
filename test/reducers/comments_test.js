import {expect} from '../test_helper';
import commentReducer from '../../src/reducers/comments.js';
import {SAVE_COMMENT} from '../../src/actions/types.js';

describe('#Comments Reducer', () => {
    it('handles action with unknown type', () => {
      //  expect(commentReducer()).to.be.instanceOf(Array); //Whatever the reducer returns to be an instance of an Array
        expect(commentReducer(undefined, {})).to.eql([]); //Deep comparison, makes sure the returned array is eql to whatever we define, in this case an empty array
    });

    it('handles action of type SAVE_COMMENT', () => {
        const action = {type: SAVE_COMMENT, payload: 'new comment'};
        expect(commentReducer([], action)).to.eql(['new comment']);
    });
})
