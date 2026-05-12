import "./Admin.css";

import { useEffect, useState } from "react";

import axios from "axios";

const Admin = () => {

  const [messages, setMessages] = useState([]);

  /* Fetch Messages */

  const fetchMessages = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/contact"
      );

      setMessages(res.data.data);

    } catch (error) {

      console.log(error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (

    <div className="admin">

      <div className="container">

        {/* Header */}

        <div className="admin-header">

          <h1>Admin Dashboard</h1>

          <p>
            Manage portfolio contact messages
          </p>

        </div>

        {/* Cards */}

        <div className="message-grid">

          {messages.map((msg)=>(

            <div
              className="message-card"
              key={msg._id}
            >

              <div className="message-top">

                <h3>{msg.name}</h3>

                <span>
                  {new Date(
                    msg.createdAt
                  ).toLocaleDateString()}
                </span>

              </div>

              <p className="email">
                {msg.email}
              </p>

              <h4>
                {msg.subject}
              </h4>

              <p className="message-text">
                {msg.message}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default Admin;