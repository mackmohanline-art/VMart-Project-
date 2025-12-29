import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FaBomb, FaGamepad, FaClock, FaSkull, FaBrain, FaTachometerAlt } from 'react-icons/fa';
import './TypingMaster.css';

const TypingMaster = () => {
  // Game states
  const [difficulty, setDifficulty] = useState('medium');
  const [timeLeft, setTimeLeft] = useState(60);
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [totalTyped, setTotalTyped] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [balloons, setBalloons] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [flash, setFlash] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  
  const containerRef = useRef(null);
  const inputRef = useRef(null);
  const timerRef = useRef(null);

  // Difficulty settings
  const difficultySettings = {
    easy: { speed: 2, spawnRate: 1000, letters: 'abcdefghijklmnopqrstuvwxyz' },
    medium: { speed: 4, spawnRate: 800, letters: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789' },
    hard: { speed: 6, spawnRate: 600, letters: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()' }
  };

  // Generate random letter based on difficulty
  const getRandomLetter = () => {
    const letters = difficultySettings[difficulty].letters;
    return letters[Math.floor(Math.random() * letters.length)];
  };

  // Generate random position
  const getRandomPosition = () => {
    if (!containerRef.current) return { x: 50, y: 100 };
    
    const container = containerRef.current;
    const x = Math.random() * (container.offsetWidth - 50);
    const y = Math.random() * (container.offsetHeight - 50);
    
    return { x, y };
  };

  // Create new balloon
  const createBalloon = () => {
    const letter = getRandomLetter();
    const position = getRandomPosition();
    
    return {
      id: Date.now() + Math.random(),
      letter,
      x: position.x,
      y: position.y,
      opacity: 1,
      size: difficulty === 'hard' ? 30 : difficulty === 'medium' ? 40 : 50,
      color: `hsl(${Math.random() * 360}, 70%, 60%)`
    };
  };

  // Start game
  const startGame = (selectedTime) => {
    setTimeLeft(selectedTime);
    setScore(0);
    setTotalTyped(0);
    setAccuracy(100);
    setBalloons([]);
    setIsPlaying(true);
    setGameOver(false);
    setInputValue('');
    if (inputRef.current) inputRef.current.focus();
  };

  // Handle key press
  const handleKeyPress = useCallback((e) => {
    if (!isPlaying || gameOver) return;
    
    const key = e.key;
    setTotalTyped(prev => prev + 1);
    
    // Find balloon with matching letter
    const balloonIndex = balloons.findIndex(b => b.letter.toLowerCase() === key.toLowerCase());
    
    if (balloonIndex !== -1) {
      // Correct key - pop balloon
      setBalloons(prev => prev.filter((_, index) => index !== balloonIndex));
      setScore(prev => prev + (difficulty === 'hard' ? 3 : difficulty === 'medium' ? 2 : 1));
      
      // Add new balloon
      setTimeout(() => {
        setBalloons(prev => [...prev, createBalloon()]);
      }, 100);
    } else {
      // Wrong key - flash red
      setFlash(true);
      setTimeout(() => setFlash(false), 200);
    }
    
    // Update accuracy
    const newAccuracy = ((score + (balloonIndex !== -1 ? 1 : 0)) / (totalTyped + 1)) * 100;
    setAccuracy(Math.min(100, Math.max(0, newAccuracy)));
    
    setInputValue('');
  }, [isPlaying, balloons, difficulty, score, totalTyped, gameOver]);

  // Handle balloon movement
  useEffect(() => {
    if (!isPlaying || gameOver) return;
    
    const moveBalloons = () => {
      setBalloons(prev => 
        prev.map(balloon => ({
          ...balloon,
          y: balloon.y - difficultySettings[difficulty].speed
        })).filter(balloon => balloon.y > -50)
      );
    };
    
    const interval = setInterval(moveBalloons, 50);
    return () => clearInterval(interval);
  }, [isPlaying, difficulty, gameOver]);

  // Spawn new balloons
  useEffect(() => {
    if (!isPlaying || gameOver) return;
    
    const spawnBalloon = () => {
      if (balloons.length < (difficulty === 'hard' ? 15 : difficulty === 'medium' ? 10 : 8)) {
        setBalloons(prev => [...prev, createBalloon()]);
      }
    };
    
    const interval = setInterval(spawnBalloon, difficultySettings[difficulty].spawnRate);
    return () => clearInterval(interval);
  }, [isPlaying, balloons.length, difficulty, gameOver]);

  // Timer countdown
  useEffect(() => {
    if (isPlaying && timeLeft > 0 && !gameOver) {
      timerRef.current = setTimeout(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isPlaying) {
      setIsPlaying(false);
      setGameOver(true);
    }
    
    return () => clearTimeout(timerRef.current);
  }, [isPlaying, timeLeft, gameOver]);

  // Add keyboard event listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key.length === 1 && !e.ctrlKey && !e.altKey && !e.metaKey) {
        handleKeyPress(e);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyPress]);

  // Time options
  const timeOptions = [30, 60, 90, 120];

  return (
    <div className={`typing-master ${flash ? 'flash-red' : ''}`}>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            <FaBomb className="inline mr-3" />
            Typing Master Blast
            <FaBomb className="inline ml-3" />
          </h1>
          <p className="text-gray-600 text-lg">
            Pop the balloons by typing the correct letters before they escape!
          </p>
        </div>

        {/* Game Controls */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Difficulty Selection */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-bold mb-3 text-blue-600 flex items-center">
                <FaBrain className="mr-2" /> Difficulty
              </h3>
              <div className="flex space-x-2">
                {['easy', 'medium', 'hard'].map((level) => (
                  <button
                    key={level}
                    onClick={() => setDifficulty(level)}
                    className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
                      difficulty === level
                        ? level === 'easy'
                          ? 'bg-green-500 text-white'
                          : level === 'medium'
                          ? 'bg-yellow-500 text-white'
                          : 'bg-red-500 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {level.charAt(0).toUpperCase() + level.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Time Selection */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-bold mb-3 text-blue-600 flex items-center">
                <FaClock className="mr-2" /> Time Limit
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {timeOptions.map((time) => (
                  <button
                    key={time}
                    onClick={() => !isPlaying && startGame(time)}
                    disabled={isPlaying}
                    className={`py-2 px-3 rounded-lg font-medium transition-all ${
                      isPlaying
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                    }`}
                  >
                    {time} sec
                  </button>
                ))}
              </div>
            </div>

            {/* Game Stats */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-bold mb-3 text-blue-600 flex items-center">
                <FaTachometerAlt className="mr-2" /> Game Stats
              </h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-center p-2 bg-white rounded">
                  <div className="text-2xl font-bold text-blue-600">{score}</div>
                  <div className="text-xs text-gray-500">Score</div>
                </div>
                <div className="text-center p-2 bg-white rounded">
                  <div className="text-2xl font-bold text-green-600">
                    {Math.round(accuracy)}%
                  </div>
                  <div className="text-xs text-gray-500">Accuracy</div>
                </div>
              </div>
            </div>
          </div>

          {/* Timer and Start Button */}
          <div className="flex justify-between items-center">
            <div className="text-center">
              <div className="text-sm text-gray-500 mb-1">Time Left</div>
              <div className={`text-3xl font-bold ${
                timeLeft <= 10 ? 'text-red-500 animate-pulse' : 'text-blue-600'
              }`}>
                {timeLeft}s
              </div>
            </div>

            <button
              onClick={() => {
                if (isPlaying) {
                  setIsPlaying(false);
                  setGameOver(true);
                } else {
                  startGame(60);
                }
              }}
              className={`px-8 py-3 rounded-lg font-bold text-lg transition-all transform hover:scale-105 ${
                isPlaying
                  ? 'bg-red-500 hover:bg-red-600 text-white'
                  : 'bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white'
              }`}
            >
              <FaGamepad className="inline mr-2" />
              {isPlaying ? 'Stop Game' : 'Start Game'}
            </button>

            <div className="text-center">
              <div className="text-sm text-gray-500 mb-1">Balloons</div>
              <div className="text-3xl font-bold text-purple-600">
                {balloons.length}
              </div>
            </div>
          </div>
        </div>

        {/* Game Instructions */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
          <h3 className="font-bold text-lg mb-2 text-yellow-700">How to Play:</h3>
          <ul className="list-disc pl-5 text-yellow-600 space-y-1">
            <li>Select difficulty and time limit</li>
            <li>Click "Start Game" to begin</li>
            <li>Type the letters shown on balloons</li>
            <li>Pop balloons by typing correct letters</li>
            <li>Wrong keys flash the screen red</li>
            <li>Higher difficulty = faster balloons + more characters</li>
          </ul>
        </div>

        {/* Game Area */}
        <div 
          ref={containerRef}
          className="game-area bg-gradient-to-b from-blue-50 to-purple-50 rounded-xl shadow-lg border-2 border-blue-200 p-4 mb-8 relative overflow-hidden"
          style={{ height: '500px' }}
        >
          {balloons.map((balloon) => (
            <div
              key={balloon.id}
              className="balloon absolute cursor-pointer transition-all duration-300 hover:scale-110"
              style={{
                left: `${balloon.x}px`,
                top: `${balloon.y}px`,
                width: `${balloon.size}px`,
                height: `${balloon.size}px`,
                backgroundColor: balloon.color,
                opacity: balloon.opacity,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: `${balloon.size * 0.4}px`,
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                border: '2px solid white',
                userSelect: 'none'
              }}
              onClick={() => {
                if (isPlaying) {
                  setInputValue(balloon.letter);
                  handleKeyPress({ key: balloon.letter });
                }
              }}
            >
              {balloon.letter}
            </div>
          ))}

          {/* Input Field (hidden but captures focus) */}
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="opacity-0 absolute w-0 h-0"
            autoFocus
          />

          {/* Game Over Screen */}
          {gameOver && (
            <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center rounded-xl">
              <div className="bg-white p-8 rounded-xl text-center max-w-md">
                <FaSkull className="text-6xl text-red-500 mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4 text-gray-800">Game Over!</h2>
                <div className="space-y-3 mb-6">
                  <div className="text-2xl font-bold text-blue-600">
                    Final Score: <span className="text-4xl">{score}</span>
                  </div>
                  <div className="text-lg text-gray-600">
                    Accuracy: <span className="font-bold text-green-600">{Math.round(accuracy)}%</span>
                  </div>
                  <div className="text-lg text-gray-600">
                    Total Typed: <span className="font-bold">{totalTyped}</span>
                  </div>
                </div>
                <button
                  onClick={() => startGame(60)}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-bold text-lg hover:from-blue-600 hover:to-purple-600 transition-all"
                >
                  Play Again
                </button>
              </div>
            </div>
          )}

          {/* Start Screen */}
          {!isPlaying && !gameOver && (
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 flex flex-col items-center justify-center rounded-xl">
              <FaGamepad className="text-8xl text-blue-500 mb-6 animate-bounce" />
              <h3 className="text-2xl font-bold mb-4 text-gray-700">
                Ready to Pop Some Balloons?
              </h3>
              <p className="text-gray-600 mb-6 text-center px-8">
                Select your difficulty and time, then click "Start Game" to begin!
              </p>
              <div className="text-sm text-gray-500">
                Tip: Focus on the input field or click balloons directly
              </div>
            </div>
          )}
        </div>

        {/* Difficulty Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h4 className="font-bold text-lg mb-2 text-green-700">Easy Mode</h4>
            <ul className="text-green-600 text-sm space-y-1">
              <li>• Slow balloon speed</li>
              <li>• Only lowercase letters</li>
              <li>• Large balloon size</li>
              <li>• +1 point per balloon</li>
            </ul>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h4 className="font-bold text-lg mb-2 text-yellow-700">Medium Mode</h4>
            <ul className="text-yellow-600 text-sm space-y-1">
              <li>• Medium balloon speed</li>
              <li>• Letters + numbers</li>
              <li>• Medium balloon size</li>
              <li>• +2 points per balloon</li>
            </ul>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <h4 className="font-bold text-lg mb-2 text-red-700">Hard Mode</h4>
            <ul className="text-red-600 text-sm space-y-1">
              <li>• Fast balloon speed</li>
              <li>• All characters</li>
              <li>• Small balloon size</li>
              <li>• +3 points per balloon</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypingMaster;
