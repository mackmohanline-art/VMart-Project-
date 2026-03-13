import React, { useState, useEffect } from "react";

const PublicMessages = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch messages on component mount
  useEffect(() => {
    fetchMessages();
    
    // Refresh messages every 30 seconds
    const interval = setInterval(fetchMessages, 30000);
    
    return () => clearInterval(interval);
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/messages');
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const handleSubmit = async (e) => {
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
    
    try {
      const response = await fetch('http://localhost:5000/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: newMessage }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to post message');
      }
      
      setMessages([data, ...messages]);
      setNewMessage("");
      setSuccess("Message posted successfully!");
      
      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(""), 3000);
      
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const formatTimeRemaining = (createdAt) => {
    const created = new Date(createdAt).getTime();
    const now = Date.now();
    const expiresIn = 36 * 60 * 60 * 1000; // 36 hours in milliseconds
    const timeLeft = expiresIn - (now - created);
    
    if (timeLeft <= 0) return "Expired";
    
    const hours = Math.floor(timeLeft / (60 * 60 * 1000));
    const minutes = Math.floor((timeLeft % (60 * 60 * 1000)) / (60 * 1000));
    
    return `${hours}h ${minutes}m remaining`;
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Public Message Board
        </h1>
        <p className="text-center text-gray-600 mb-6">
          No login required • Messages auto-delete after 36 hours
        </p>
        
        {/* Message Input Form */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <form onSubmit={handleSubmit}>
            <textarea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message here... (max 500 characters)"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              rows="4"
              maxLength="500"
            />
            
            <div className="flex justify-between items-center mt-2">
              <span className="text-sm text-gray-500">
                {newMessage.length}/500 characters
              </span>
              <button
                type="submit"
                disabled={loading}
                className={`px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  loading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {loading ? 'Posting...' : 'Post Message'}
              </button>
            </div>
            
            {error && (
              <div className="mt-3 p-2 bg-red-100 text-red-700 rounded">
                {error}
              </div>
            )}
            
            {success && (
              <div className="mt-3 p-2 bg-green-100 text-green-700 rounded">
                {success}
              </div>
            )}
          </form>
        </div>
        
        {/* Messages Display */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">
            Recent Messages ({messages.length})
          </h2>
          
          {messages.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-8 text-center text-gray-500">
              No messages yet. Be the first to post!
            </div>
          ) : (
            messages.map((message) => (
              <div
                key={message._id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <p className="text-gray-800 mb-3 whitespace-pre-wrap">
                  {message.text}
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>
                    Posted: {new Date(message.createdAt).toLocaleString()}
                  </span>
                  <span className="text-blue-600">
                    {formatTimeRemaining(message.createdAt)}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
        
        {/* Info Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Messages are automatically deleted 36 hours after posting.</p>
          <p className="mt-1">No registration required • Share your thoughts anonymously</p>
        </div>
      </div>
    </div>
  );
};

export default PublicMessages;
