var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('../../../node_modules/jquery/dist/jquery.min.js');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one Todo Component for each todo item', () => {
    var todos = [
      {
        id: 1,
        text: 'Do something'
      },
      {
        id: 2,
        text: 'Do nothing'
      }
    ];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos = {todos}/ >);
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);
    expect(todosComponents.length).toBe(todos.length);
  });

  it('should render empty message if no todo', () => {
    var todos = [];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos = {todos}/ >);
    var $el = $(ReactDOM.findDOMNode(todoList));
    expect($el.find('.container__message').length).toBe(1);
  });
});
