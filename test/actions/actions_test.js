import { expect } from '../test_helper';
import {SAVE_COMMENT} from '../../src/actions/types.js';
import {saveComment} from '../../src/actions/index.js';
//Actions test for correct type and correct payload
describe('#actions', () => {
	describe('saveComment', () => {
		it('has the correct type', () => {
			const action = saveComment();
			expect(action.type).to.equal(SAVE_COMMENT);
		});

		it('has the correct payload', () => {
			const action = saveComment('new comment'); //comment we want to save as an argument 'new comment'
			expect(action.payload).to.equal('new comment') //assert the payload of the action will be 'new comment'
		});
	});
});

