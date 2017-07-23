//1. Set up testing environment to run like a browser but in the command line
  //Jsdom library, emulation of the dom and html at the command line, 
  //needed for trick bundle.js to think its running in the browser for a mocha testing environemnt
import jsdom from 'jsdom';
import jquery from 'jquery'; //underscore $, so it references our defined global.document or global.window variables not the browsers
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');//Fake browser/dom environment
global.window = global.document.defaultView;
//This initialize or setups the fake browser to be used in the terminal, and then assign it to the global variable document
  //So when jquery (or any library) boots up it will get fake reference to document to be used in the terminal
const $ = jquery(global.window); //this line tells jquery to reference our global.window only instead of the DOM in the browser (since it doesnt exist in the terminal)
//Hooked jquery into the fake version of our fake created DOM
//2. Build 'renderComponent' helper that should render a given react class
//3. Build helper for simulating events
//4. Setup chai-jquery