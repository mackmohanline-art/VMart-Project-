import React, { useState, useEffect } from "react";

const PublicMessageBoard = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // Initialize with sample messages for demo (no backend required)
  useEffect(() => {
    // Load messages from localStorage
    const savedMessages = localStorage.getItem('publicMessages');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    } else {
      // Sample messages for demonstration
      const sampleMessages = [
        {
          id: Date.now() - 1000000,
          text: "Welcome to the public message board! 👋",
          createdAt: new Date(Date.now() - 1000000).toISOString()
        },
        {
          id: Date.now() - 2000000,
          text: "No login required - everyone can post!",
          createdAt: new Date(Date.now() - 2000000).toISOString()
        },
        {
          id: Date.now() - 3000000,
          text: "Messages automatically disappear after 36 hours",
          createdAt: new Date(Date.now() - 3000000).toISOString()
        }
      ];
      setMessages(sampleMessages);
      localStorage.setItem('publicMessages', JSON.stringify(sampleMessages));
    }

    // Clean up old messages every minute
    const cleanupInterval = setInterval(cleanupOldMessages, 60000);
    return () => clearInterval(cleanupInterval);
  }, []);

  // Clean up messages older than 36 hours
  const cleanupOldMessages = () => {
    const thirtySixHoursAgo = Date.now() - (36 * 60 * 60 * 1000);
    const updatedMessages = messages.filter(msg => 
      new Date(msg.createdAt).getTime() > thirtySixHoursAgo
    );
    
    if (updatedMessages.length !== messages.length) {
      setMessages(updatedMessages);
      localStorage.setItem('publicMessages', JSON.stringify(updatedMessages));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!newMessage.trim()) {
      setError("Please enter a message");
      return;
    }
    
    if (newMessage.length > 500) {
      setError("Message is too long (maximum 500 characters)");
      return;
    }
    
    setLoading(true);
    setError("");
    
    // Create new message
    const newMsg = {
      id: Date.now(),
      text: newMessage.trim(),
      createdAt: new Date().toISOString()
    };
    
    // Add to messages
    const updatedMessages = [newMsg, ...messages];
    setMessages(updatedMessages);
    
    // Save to localStorage
    localStorage.setItem('publicMessages', JSON.stringify(updatedMessages));
    
    setNewMessage("");
    setSuccess("Message posted successfully!");
    
    // Clear success message after 3 seconds
    setTimeout(() => setSuccess(""), 3000);
    setLoading(false);
  };

  const formatTimeRemaining = (createdAt) => {
    const created = new Date(createdAt).getTime();
    const now = Date.now();
    const expiresIn = 36 * 60 * 60 * 1000; // 36 hours in milliseconds
    const timeLeft = expiresIn - (now - created);
    
    if (timeLeft <= 0) return "Expired";
    
    const hours = Math.floor(timeLeft / (60 * 60 * 1000));
    const minutes = Math.floor((timeLeft % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((timeLeft % (60 * 1000)) / 1000);
    
    if (hours > 0) {
      return `${hours}h ${minutes}m remaining`;
    } else if (minutes > 0) {
      return `${minutes}m ${seconds}s remaining`;
    } else {
      return `${seconds}s remaining`;
    }
  };

  const deleteMessage = (id) => {
    const updatedMessages = messages.filter(msg => msg.id !== id);
    setMessages(updatedMessages);
    localStorage.setItem('publicMessages', JSON.stringify(updatedMessages));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          📝 Public Message Board
        </h1>
        <p className="text-lg text-gray-600">
          Share your thoughts anonymously • No login required
        </p>
        <div className="mt-2 inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold">
          ⏰ Messages auto-delete after 36 hours
        </div>
      </div>
      
      {/* Message Input Form */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border-2 border-blue-100">
        <form onSubmit={handleSubmit}>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Write your message:
          </label>
          <textarea
            id="message"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="What's on your mind? (max 500 characters)"
            className="w-full p-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-gray-700"
            rows="4"
            maxLength="500"
          />
          
          <div className="flex flex-col sm:flex-row justify-between items-center mt-3 gap-3">
            <span className={`text-sm font-medium ${
              newMessage.length > 450 ? 'text-red-500' : 'text-gray-500'
            }`}>
              {newMessage.length}/500 characters
            </span>
            <button
              type="submit"
              disabled={loading}
              className={`w-full sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-semibold transition-colors ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {loading ? 'Posting...' : '📢 Post Message'}
            </button>
          </div>
          
          {error && (
            <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg border border-red-200">
              ⚠️ {error}
            </div>
          )}
          
          {success && (
            <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg border border-green-200">
              ✅ {success}
            </div>
          )}
        </form>
      </div>
      
      {/* Messages Stats */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-700">
          💬 Recent Messages ({messages.length})
        </h2>
        <button
          onClick={cleanupOldMessages}
          className="text-sm text-gray-500 hover:text-gray-700 underline"
        >
          Refresh
        </button>
      </div>
      
      {/* Messages Display */}
      <div className="space-y-4">
        {messages.length === 0 ? (
          <div className="bg-white rounded-xl shadow-lg p-12 text-center border-2 border-dashed border-gray-300">
            <div className="text-6xl mb-4">📭</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No messages yet</h3>
            <p className="text-gray-500">Be the first to share your thoughts!</p>
          </div>
        ) : (
          messages.map((message, index) => (
            <div
              key={message.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all border-l-4 border-blue-500"
            >
              <div className="flex justify-between items-start mb-3">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                  #{messages.length - index}
                </span>
                <button
                  onClick={() => deleteMessage(message.id)}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                  title="Delete message"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <p className="text-gray-800 mb-4 whitespace-pre-wrap text-lg">
                {message.text}
              </p>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm gap-2">
                <span className="text-gray-500">
                  🕒 {new Date(message.createdAt).toLocaleString()}
                </span>
                <span className={`font-semibold px-3 py-1 rounded-full ${
                  formatTimeRemaining(message.createdAt).includes('h') 
                    ? 'bg-green-100 text-green-700'
                    : formatTimeRemaining(message.createdAt).includes('m')
                    ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-red-100 text-red-700'
                }`}>
                  ⏳ {formatTimeRemaining(message.createdAt)}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
      
      {/* Footer Information */}
      <div className="mt-8 text-center">
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <p className="text-sm text-gray-600 mb-2">
            <span className="font-semibold">📋 How it works:</span>
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
            <span>✅ No login required</span>
            <span>✍️ 500 characters max</span>
            <span>⏰ Auto-deletes after 36h</span>
            <span>💾 Saved in your browser</span>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Messages are stored locally in your browser. Clear browser data to remove all messages.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PublicMessageBoard;
