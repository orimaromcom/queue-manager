import React, { useState, useEffect } from "react";
import QueueList from "./QueueList";
import QueueSelector from "./QueueSelector";
import MessageDisplay from "./MessageDisplay";

const QueueManager = () => {
  const [queues, setQueues] = useState([]);
  const [selectedQueue, setSelectedQueue] = useState("");
  const [message, setMessage] = useState(null);

  useEffect(() => {
    fetchQueues();
  }, []);

  const fetchQueues = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/queues");
      if (response.ok) {
        const data = await response.json();
        setQueues(data);
      } else {
        throw new Error("Failed to fetch queues");
      }
    } catch (error) {
      console.error("Error fetching queues:", error);
    }
  };

  const handleGoClick = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/${selectedQueue}`);
      if (response.ok) {
        if (response.status === 204) {
          setMessage("No message in queue");
        } else {
          const data = await response.json();
          setMessage(data);
        }
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (error) {
      console.error("Error fetching message:", error);
      setMessage("Error fetching message");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#FFF0F5] via-white to-white text-[#003246]">
      <header className="py-6 text-center bg-white shadow-md">
        <h1 className="text-3xl font-bold text-[#003246]">Voyantis Queue Manager</h1>
      </header>
      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8 border-t-2 border-[#FF005B]">
          <QueueList queues={queues} />
          <QueueSelector
            queues={queues}
            selectedQueue={selectedQueue}
            setSelectedQueue={setSelectedQueue}
            handleGoClick={handleGoClick}
          />
          <MessageDisplay message={message} />
        </div>
      </main>
      <footer className="py-4 text-center bg-white text-[#003246] shadow-md">
        &copy; 2024 Queue Manager System
      </footer>
    </div>
  );
};

export default QueueManager;
