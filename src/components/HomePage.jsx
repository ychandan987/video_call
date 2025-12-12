import React, { use, useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const [input, setInput] = useState("");
    const navigate = useNavigate();
    const submitHandler = () => {
        if(input.trim() !== "") {
            // Navigate to the room with the given ID
            alert(`Navigating to room: ${input}`);
            navigate(`/room/${input}`);
            // window.location.href = `/room/${input}`;
        }
    };

  return (
    <div>
        <h1>Welcome to the Home Page</h1>   
    <p>This is the main landing page of the application.</p>
    <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="Enter Room ID" />
    <button onClick={submitHandler}>Join Room</button>  
    </div>
  );
}
export default HomePage;