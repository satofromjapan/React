import React from 'react';
import ReactDOM from 'react-dom'


const header = React.createElement('h1', null, 'Hello Dojo!')
const listHeader = React.createElement('h3', null, 'Things I need to do:')
const list = React.createElement('ul', null, <li>Learn React</li>,<li>Climb Mt. Everest</li>, <li>Run a marathon</li>, <li>Feed the dogs</li>)
const container = React.createElement('div', null, header, listHeader, list)


ReactDOM.render(container, document.getElementById('root'))
