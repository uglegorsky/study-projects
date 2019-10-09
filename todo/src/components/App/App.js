import React, { Component } from 'react';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import ItemStatusFilter from '../ItemStatusFilter';
import AddItem from '../AddItem';
import './App.css'
 
export default class App extends Component {
    constructor() {
        super();
        this.state = {
            todoData: [
                { label: 'Drink Coffee', important: false, id: 1 },
                { label: 'Make Awesome App', important: true, id: 2 },
                { label: 'Have a lunch', important: false, id: 3 }
            ]
        };
        this.deleteItem = (id) => {
            this.setState(({todoData}) => {
                const idx = todoData.findIndex((el) => el.id === id);
                const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

                return {
                    todoData: newArray
                };
            });
        };
        this.addItem = (text) => {
            this.setState(({todoData}) => {
                const newItem = {
                    label: text,
                    important: false,
                    id: todoData.length + 1
                }
                this.setState(({todoData}) => {
                    const newArray = [
                        ...todoData,
                        newItem
                    ];
                    
                    return {
                        todoData: newArray
                    };
                });
            })
        }
    };
    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3}/>
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList todos={this.state.todoData}
                    onDeleted={ this.deleteItem } />
                <AddItem onItemAdded={ this.addItem } />
            </div>
        );
    };
}