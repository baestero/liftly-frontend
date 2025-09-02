import React from "react";
import { UserContext } from "../UserContext";

const Message = () => {
  const { message } = React.useContext(UserContext);

  if (!message) return null;

  return (
    <div className="container">
      {message.map((msg) => (
        <p className="error" key={msg}>
          {msg}
        </p>
      ))}
    </div>
  );
};

export default Message;
