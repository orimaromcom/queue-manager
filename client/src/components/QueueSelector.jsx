import React from "react";

const QueueSelector = ({ queues, selectedQueue, setSelectedQueue, handleGoClick }) => (
  <div className="mt-8 space-y-4">
    <select
      value={selectedQueue}
      onChange={(e) => setSelectedQueue(e.target.value)}
      className="block w-full px-3 py-3 text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#003246] focus:border-[#003246] text-[#003246]"
    >
      <option value="">Select a queue</option>
      {queues.map((queue) => (
        <option key={queue.name} value={queue.name}>
          {queue.name}
        </option>
      ))}
    </select>
    <button
      onClick={handleGoClick}
      className="w-full py-3 px-4 border border-transparent text-base font-medium rounded-md text-white bg-[#003246] hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#003246] transition duration-150 ease-in-out"
    >
      Go
    </button>
  </div>
);

export default QueueSelector;
