//1. Set up testing environment to run like a browser but in the command line
  //Jsdom library, emulation of the dom and html at the command line, 
  //needed for trick bundle.js to think its running in the browser for a mocha testing environemnt
//TUNING the terminal into a fake browser for testing environment
import jsdom from 'jsdom';
import jquery from 'jquery'; //underscore $, so it references our defined global.document or global.window variables not the browsers
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');//Fake browser/dom environment
global.window = global.document.defaultView;
//This initialize or setups the fake browser to be used in the terminal, and then assign it to the global variable document
  //So when jquery (or any library) boots up it will get fake reference to document to be used in the terminal
const $ = jquery(global.window); //this line tells jquery to reference our global.window only instead of the DOM in the browser (since it doesnt exist in the terminal)
//Hooked jquery into the fake version of our fake created DOM

//2. Build 'renderComponent' helper that should render a given react class
  //Sole purpose is to take a react component class, render it get its html element wrap it with a jquery element, and
  //returns that wrapped jquery element
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import chai, {expect} from 'chai'; //From chai library
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from '../src/reducers';
function renderComponent(ComponentClass, props, state) { //Making an instance of our created component class, second argument is component level props, third argument is the application state
  //Test utils, requires a DOM which we created above 
  const componentInstance = TestUtils.renderIntoDocument(
  //Need to wrap the ComponentClass in Provider in order for our testing environment to have access to the redux store
  //reducers passed into the redux store (which is a single object containing all the application state), has an initial state that we pass directly in
  <Provider store={createStore(reducers, state)}> 
    <ComponentClass {...props}/>
  </Provider>
  ); //Create an instance of the component, render into document
  return $(ReactDOM.findDOMNode(componentInstance)); //Produces HTML, how we access the html from our component instance
  //wrap our HTML element with jquery element, so we can have access to chai-jquery helpers library
}

//3. Build helper for simulating events
//Adding a function to jquery so every jquery instance has access to the specified function
/* example:  $('div').simulate() */
$.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value); //this is a reference to the html value selected, so set the value of the html element selected to the value passed in
  }
  TestUtils.Simulate[eventName](this[0]); //Trigger the first element in the array
}

//4. Setup chai-jquery
import chaiJquery from 'chai-jquery';
chaiJquery(chai, chai.util, $); //instance of jquery ($)

export {renderComponent, expect};