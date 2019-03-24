(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.main = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({"C:\\Dropbox\\root\\Programming\\Javascript\\personal-site\\client\\main\\main.jsx":[function(require,module,exports){
require('./main.less');

const React = require('react');

const createClass = require('create-react-class');

const cx = require('classnames');

const ResumePage = require('./resumePage/resumePage.jsx');

const Main = createClass({
  displayName: 'Main',

  getDefaultProps() {
    return {};
  },

  render() {
    return React.createElement("div", {
      className: "Main"
    }, React.createElement(ResumePage, null));
  }

});
module.exports = Main;
},{"./main.less":1,"./resumePage/resumePage.jsx":2,"classnames":undefined,"create-react-class":undefined,"react":undefined}],1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
require('./resumePage.less');

const React = require('react');

const createClass = require('create-react-class');

const cx = require('classnames');

const resumeText = require('../../../resume/resume.md');

const Markdown = require('shared/markdown.jsx');

const ResumePage = createClass({
  displayName: 'ResumePage',

  getDefaultProps() {
    return {};
  },

  render() {
    return React.createElement("div", {
      className: "ResumePage"
    }, React.createElement(Markdown, {
      content: resumeText
    }));
  }

});
module.exports = ResumePage;
},{"../../../resume/resume.md":5,"./resumePage.less":3,"classnames":undefined,"create-react-class":undefined,"react":undefined,"shared/markdown.jsx":4}],3:[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"dup":1}],4:[function(require,module,exports){
const React = require('react');

const createClass = require('create-react-class');

const Marked = require('marked');

module.exports = ({
  content
}) => {
  return React.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: Marked(content)
    }
  });
};
},{"create-react-class":undefined,"marked":undefined,"react":undefined}],5:[function(require,module,exports){
module.exports = `# Scott Tolksdorf

this is my temp resume!
`;
},{}]},{},[])("C:\\Dropbox\\root\\Programming\\Javascript\\personal-site\\client\\main\\main.jsx")
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3ZpdHJldW0vbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImNsaWVudC9tYWluL21haW4uanN4IiwiY2xpZW50L21haW4vbWFpbi5sZXNzIiwiY2xpZW50L21haW4vcmVzdW1lUGFnZS9yZXN1bWVQYWdlLmpzeCIsImNsaWVudC9zaGFyZWQvbWFya2Rvd24uanN4IiwicmVzdW1lL3Jlc3VtZS5tZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsInJlcXVpcmUoJy4vbWFpbi5sZXNzJyk7XG5cbmNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuY29uc3QgY3JlYXRlQ2xhc3MgPSByZXF1aXJlKCdjcmVhdGUtcmVhY3QtY2xhc3MnKTtcblxuY29uc3QgY3ggPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbmNvbnN0IFJlc3VtZVBhZ2UgPSByZXF1aXJlKCcuL3Jlc3VtZVBhZ2UvcmVzdW1lUGFnZS5qc3gnKTtcblxuY29uc3QgTWFpbiA9IGNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdNYWluJyxcblxuICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiTWFpblwiXG4gICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChSZXN1bWVQYWdlLCBudWxsKSk7XG4gIH1cblxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IE1haW47IiwiIiwicmVxdWlyZSgnLi9yZXN1bWVQYWdlLmxlc3MnKTtcblxuY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5jb25zdCBjcmVhdGVDbGFzcyA9IHJlcXVpcmUoJ2NyZWF0ZS1yZWFjdC1jbGFzcycpO1xuXG5jb25zdCBjeCA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxuY29uc3QgcmVzdW1lVGV4dCA9IHJlcXVpcmUoJy4uLy4uLy4uL3Jlc3VtZS9yZXN1bWUubWQnKTtcblxuY29uc3QgTWFya2Rvd24gPSByZXF1aXJlKCdzaGFyZWQvbWFya2Rvd24uanN4Jyk7XG5cbmNvbnN0IFJlc3VtZVBhZ2UgPSBjcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnUmVzdW1lUGFnZScsXG5cbiAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7fTtcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcIlJlc3VtZVBhZ2VcIlxuICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWFya2Rvd24sIHtcbiAgICAgIGNvbnRlbnQ6IHJlc3VtZVRleHRcbiAgICB9KSk7XG4gIH1cblxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IFJlc3VtZVBhZ2U7IiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5jb25zdCBjcmVhdGVDbGFzcyA9IHJlcXVpcmUoJ2NyZWF0ZS1yZWFjdC1jbGFzcycpO1xuXG5jb25zdCBNYXJrZWQgPSByZXF1aXJlKCdtYXJrZWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoe1xuICBjb250ZW50XG59KSA9PiB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgICAgX19odG1sOiBNYXJrZWQoY29udGVudClcbiAgICB9XG4gIH0pO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGAjIFNjb3R0IFRvbGtzZG9yZlxuXG50aGlzIGlzIG15IHRlbXAgcmVzdW1lIVxuYDsiXX0=
