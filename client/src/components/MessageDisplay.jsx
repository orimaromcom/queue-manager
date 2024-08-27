import React from "react";

const MessageDisplay = ({ message }) =>
  message && (
    <div className="mt-8 p-4 rounded-md bg-gray-50 shadow-sm">
      <pre className="text-sm overflow-x-auto whitespace-pre-wrap break-words text-[#003246]">
        {JSON.stringify(message, null, 2)}
      </pre>
    </div>
  );

export default MessageDisplay;
