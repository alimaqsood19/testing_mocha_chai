import {renderComponent, expect} from '../test_helper';
import CommentList from '../../src/components/comment_list.js';

describe('#CommentList', () => {
    let component;
    beforeEach(() => {
        const props = {comments: ['New Comment', 'Other comment']};
        component = renderComponent(CommentList, null, props);
        //third argument in renderComponent is an object that adds props to the component to be utilized
    });

    it ('shows an LI for each comment', () => {
        expect(component.find('li').length).to.equal(2); //2 comments so 2 LI's
    });

    it('shows each comment that is provided', () => {
        expect(component).to.contain('New Comment');
        expect(component).to.contain('Other comment');
    });
});