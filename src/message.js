import React from 'react';

const Message = function(props) {
  return (
    <div className="status">
      {props.value}
    </div>
  )
}

export default Message;