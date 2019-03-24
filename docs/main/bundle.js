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

`;
},{}]},{},[])("C:\\Dropbox\\root\\Programming\\Javascript\\personal-site\\client\\main\\main.jsx")
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3ZpdHJldW0vbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImNsaWVudC9tYWluL21haW4uanN4IiwiY2xpZW50L21haW4vbWFpbi5sZXNzIiwiY2xpZW50L21haW4vcmVzdW1lUGFnZS9yZXN1bWVQYWdlLmpzeCIsImNsaWVudC9zaGFyZWQvbWFya2Rvd24uanN4IiwicmVzdW1lL3Jlc3VtZS5tZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJyZXF1aXJlKCcuL21haW4ubGVzcycpO1xuXG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbmNvbnN0IGNyZWF0ZUNsYXNzID0gcmVxdWlyZSgnY3JlYXRlLXJlYWN0LWNsYXNzJyk7XG5cbmNvbnN0IGN4ID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG5jb25zdCBSZXN1bWVQYWdlID0gcmVxdWlyZSgnLi9yZXN1bWVQYWdlL3Jlc3VtZVBhZ2UuanN4Jyk7XG5cbmNvbnN0IE1haW4gPSBjcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnTWFpbicsXG5cbiAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7fTtcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcIk1haW5cIlxuICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVzdW1lUGFnZSwgbnVsbCkpO1xuICB9XG5cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBNYWluOyIsIiIsInJlcXVpcmUoJy4vcmVzdW1lUGFnZS5sZXNzJyk7XG5cbmNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuY29uc3QgY3JlYXRlQ2xhc3MgPSByZXF1aXJlKCdjcmVhdGUtcmVhY3QtY2xhc3MnKTtcblxuY29uc3QgY3ggPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbmNvbnN0IHJlc3VtZVRleHQgPSByZXF1aXJlKCcuLi8uLi8uLi9yZXN1bWUvcmVzdW1lLm1kJyk7XG5cbmNvbnN0IE1hcmtkb3duID0gcmVxdWlyZSgnc2hhcmVkL21hcmtkb3duLmpzeCcpO1xuXG5jb25zdCBSZXN1bWVQYWdlID0gY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1Jlc3VtZVBhZ2UnLFxuXG4gIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge307XG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJSZXN1bWVQYWdlXCJcbiAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KE1hcmtkb3duLCB7XG4gICAgICBjb250ZW50OiByZXN1bWVUZXh0XG4gICAgfSkpO1xuICB9XG5cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBSZXN1bWVQYWdlOyIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuY29uc3QgY3JlYXRlQ2xhc3MgPSByZXF1aXJlKCdjcmVhdGUtcmVhY3QtY2xhc3MnKTtcblxuY29uc3QgTWFya2VkID0gcmVxdWlyZSgnbWFya2VkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKHtcbiAgY29udGVudFxufSkgPT4ge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcbiAgICAgIF9faHRtbDogTWFya2VkKGNvbnRlbnQpXG4gICAgfVxuICB9KTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBgIyBTY290dCBUb2xrc2RvcmZcblxuYDsiXX0=
