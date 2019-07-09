import React, {Component} from 'react';
import ReactDOM from 'react-dom';
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
        cardItem.description = `Description: ${cardName[i]}`;
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
    }
    return tasks;
}

ReactDOM.render(<Board cards={generateCard()} />, document.getElementById('root'));