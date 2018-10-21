import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs'; //file system

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('should say hello', (done) => {
    const index = fs.readFileSync('./src/index.html', "utf-8");
    jsdom.env(index, function(err, window){
                      //Can optionally provide an array of JS file to load into the JSDOM env as the second parameter.
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.contain("Unit Test");
      done();
      window.close();
    });
  });
});
