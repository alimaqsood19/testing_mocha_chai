import { renderComponent, expect } from '../test_helper.js';
import CommentBox from '../../src/components/comment_box.js';

describe('#CommentBox', () => {
    let component;

    beforeEach(() => {//runs before each 'it' statement, setup for our specs
        component = renderComponent(CommentBox);
    });
    it('has the correct class', () => {
        expect(component).to.have.class('comment-box');
    });

    it('has a text area', () => {
        //Using the Jqeury library, the react component is a jQuery wrapped version of our component, allows use to use the Jquery-chai library
        expect(component.find('textarea')).to.exist; //Do not need to use parens after exist, based on the documentation - chai executes the function by itself
    });

    it('has a button', () => {
        expect(component.find('button')).to.exist;
    });

    describe('entering some text', () => {
        beforeEach(() => {
            component.find('textarea').simulate('change', 'new comment');
            //fetching textarea with .find, whenever a user types something it simulates an event 'change', and here is the
            //new value coming from that event, which is 'new comment'
        });

        it('shows that text in the textarea', () => {
            expect(component.find('textarea')).to.have.value('new comment');
        });

        it('when submitted, clears the input', () => {
            component.simulate('submit'); //simulate submit event for the form
            expect(component.find('textarea')).to.have.value('');
        });
    })


})