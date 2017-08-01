import React from 'react';
import ReactDOM from 'react-dom'
function showTime(){
  const time = new Date().toLocaleTimeString()
  const displayTime = React.createElement('p', null, 'The current time is: ' + time)
  ReactDOM.render(displayTime, document.getElementById('root'))
}

setInterval(showTime, 1000);
