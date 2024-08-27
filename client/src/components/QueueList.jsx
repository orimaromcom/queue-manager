import React from "react";

const QueueList = ({ queues }) => (
  <div className="space-y-3">
    {queues.map((queue) => (
      <div
        key={queue.name}
        className="flex items-center justify-between p-4 rounded-lg bg-gray-50 shadow-sm"
      >
        <span className="font-medium text-lg text-[#003246]">{queue.name}</span>
        <span className="ml-2 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#FF005B] text-white">
          {queue.count} messages
        </span>
      </div>
    ))}
  </div>
);

export default QueueList;
