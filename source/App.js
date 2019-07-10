import React, {Component} from 'react';
import {render} from 'react-dom';
import Board from './Board/Board';

import {card, task} from './Models/CardModel';
const randomNumber = require('random-number');
const options = {min: 1, max: 100, integer: true};
const cardName = ['Read this book', 'Follow the example', 'Write the project', 'Complete this book', 'Write some code'];
function generateCard(){
    let cards = [];
    let cardItem;   

    for(var i = 0; i < 5; i++){
        cardItem = card();
        cardItem.id = i+1;
        cardItem.title = cardName[i];
        cardItem.description = `Description: go to <a href="https://google.com/search?q=mèokokiu+meomeo">Google</a> to read more about this task`;
        cardItem.status = randomNumber(options) % 3 === 0 ? 'done' : randomNumber(options) % 2 === 0 ? 'progress' : 'todo';
        cardItem.tasks = generateTasks(3);
        cards.push(cardItem);
    }
    return cards;
}

function generateTasks(count){
    let tasks = [];
    let taskItem;
    for(var i = 0; i < count; i++){
        taskItem = task();
        taskItem.id = i+1;
        taskItem.name = `Task 0${i+1}`;
        taskItem.done = randomNumber(options) % 2 === 1;
        tasks.push(taskItem);
    }
    return tasks;
}

// let cards = [
//     {
//         id: 1,
//         title: 'Card 1',
//         description: 'Card 1 Des',
//         status: 'todo',
//         tasks: [
//             {id: 1, name: 'Card 1 Task 1', done: false},
//             {id: 2, name: 'Card 1 Task 2', done: false}
//         ]
//     },
//     {
//         id: 2,
//         title: 'Card 2',
//         description: 'Card 2 Des',
//         status: 'progress',
//         tasks: [
//             {id: 1, name: 'Card 2 Task 1', done: true},
//             {id: 2, name: 'Card 2 Task 2', done: false}
//         ]
//     },
//     {
//         id: 3,
//         title: 'Card 3',
//         description: 'Card 3 Des',
//         status: 'done',
//         tasks: [
//             {id: 1, name: 'Card 3 Task 1', done: true},
//             {id: 2, name: 'Card 3 Task 2', done: true}
//         ]
//     }
// ];

render(<Board cards={generateCard()}></Board>, document.getElementById('root'));