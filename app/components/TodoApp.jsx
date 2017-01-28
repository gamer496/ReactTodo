var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: 1,
          text: 'some'
        },
        {
          id: 2,
          text: 'kamehameha'
        },
        {
          id: 3,
          text: 'vegeta'
        },
        {
          id: 4,
          text: 'assasins creed'
        }
      ]
    };
  },

  handleAddTodo: function (text) {
    console.log(text);
  },

  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },

  render: function () {
    var {todos} = this.state;
    return (
      <div>
        <TodoSearch onSearch = {this.handleSearch} />
        <TodoList todos = {todos} />
        <AddTodo onAddTodo = {this.handleAddTodo} />
      </div>
    );
  }
});
