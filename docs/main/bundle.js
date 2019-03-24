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
    }, React.createElement(ResumePage, null), "this is a test");
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
    }), "asdsad");
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

asdasd
`;
},{}]},{},[])("C:\\Dropbox\\root\\Programming\\Javascript\\personal-site\\client\\main\\main.jsx")
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3ZpdHJldW0vbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImNsaWVudC9tYWluL21haW4uanN4IiwiY2xpZW50L21haW4vbWFpbi5sZXNzIiwiY2xpZW50L21haW4vcmVzdW1lUGFnZS9yZXN1bWVQYWdlLmpzeCIsImNsaWVudC9zaGFyZWQvbWFya2Rvd24uanN4IiwicmVzdW1lL3Jlc3VtZS5tZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJyZXF1aXJlKCcuL21haW4ubGVzcycpO1xuXG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbmNvbnN0IGNyZWF0ZUNsYXNzID0gcmVxdWlyZSgnY3JlYXRlLXJlYWN0LWNsYXNzJyk7XG5cbmNvbnN0IGN4ID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG5jb25zdCBSZXN1bWVQYWdlID0gcmVxdWlyZSgnLi9yZXN1bWVQYWdlL3Jlc3VtZVBhZ2UuanN4Jyk7XG5cbmNvbnN0IE1haW4gPSBjcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnTWFpbicsXG5cbiAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7fTtcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcIk1haW5cIlxuICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVzdW1lUGFnZSwgbnVsbCksIFwidGhpcyBpcyBhIHRlc3RcIik7XG4gIH1cblxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IE1haW47IiwiIiwicmVxdWlyZSgnLi9yZXN1bWVQYWdlLmxlc3MnKTtcblxuY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5jb25zdCBjcmVhdGVDbGFzcyA9IHJlcXVpcmUoJ2NyZWF0ZS1yZWFjdC1jbGFzcycpO1xuXG5jb25zdCBjeCA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxuY29uc3QgcmVzdW1lVGV4dCA9IHJlcXVpcmUoJy4uLy4uLy4uL3Jlc3VtZS9yZXN1bWUubWQnKTtcblxuY29uc3QgTWFya2Rvd24gPSByZXF1aXJlKCdzaGFyZWQvbWFya2Rvd24uanN4Jyk7XG5cbmNvbnN0IFJlc3VtZVBhZ2UgPSBjcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnUmVzdW1lUGFnZScsXG5cbiAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7fTtcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcIlJlc3VtZVBhZ2VcIlxuICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWFya2Rvd24sIHtcbiAgICAgIGNvbnRlbnQ6IHJlc3VtZVRleHRcbiAgICB9KSwgXCJhc2RzYWRcIik7XG4gIH1cblxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IFJlc3VtZVBhZ2U7IiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5jb25zdCBjcmVhdGVDbGFzcyA9IHJlcXVpcmUoJ2NyZWF0ZS1yZWFjdC1jbGFzcycpO1xuXG5jb25zdCBNYXJrZWQgPSByZXF1aXJlKCdtYXJrZWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoe1xuICBjb250ZW50XG59KSA9PiB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgICAgX19odG1sOiBNYXJrZWQoY29udGVudClcbiAgICB9XG4gIH0pO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGAjIFNjb3R0IFRvbGtzZG9yZlxuXG50aGlzIGlzIG15IHRlbXAgcmVzdW1lIVxuXG5hc2Rhc2RcbmA7Il19
