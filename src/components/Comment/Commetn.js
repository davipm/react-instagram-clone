import React from "react";

const Comments = ({ comments }) => (
  <ul className="list-style-none" style={{ marginTop: '10px' }}>
    {comments.map(item => (
      <li key={item.id}>
        <strong>davi_pereira{' '}</strong>
        {item.comment}
      </li>
    ))}
  </ul>
);

export default Comments;
