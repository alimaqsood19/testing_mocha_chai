import { renderComponent, expect } from '../test_helper.js';
import App from '../../src/components/app.js';

//Use describe to group together similar tests
describe('#App', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(App);
  });
  // Use 'it' to test a single attribute of a target, for one single test, "i am testing... about App"
  it('shows the correct text', () => {
    //Create an instance of App
    //Use 'expect' to make an 'assertion' about a target, assert that something about the component App is true
    expect(component).to.contain('Testing');
  });

  it('shows a comment box', () => {
    expect(component.find('.comment-box')).to.exist;
  });

  it('shows a comment list', () => {
    expect(component.find('.comment-list')).to.exist;
  });
});

