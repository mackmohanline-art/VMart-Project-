import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FaBomb, FaGamepad, FaClock, FaSkull, FaBrain, FaTachometerAlt, FaKeyboard, FaMousePointer } from 'react-icons/fa';

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
    easy: { 
      speed: 2, 
      spawnRate: 1000, 
      letters: 'abcdefghijklmnopqrstuvwxyz',
      points: 1
    },
    medium: { 
      speed: 4, 
      spawnRate: 800, 
      letters: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
      points: 2
    },
    hard: { 
      speed: 6, 
      spawnRate: 600, 
      letters: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()',
      points: 3
    }
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
    const x = Math.random() * (container.offsetWidth - 60);
    const y = Math.random() * (container.offsetHeight - 60);
    
    return { x, y };
  };

  // Create new balloon
  const createBalloon = () => {
    const letter = getRandomLetter();
    const position = getRandomPosition();
    
    const colors = [
      '#FF6B6B', '#4ECDC4', '#FFD166', '#06D6A0', '#118AB2', 
      '#EF476F', '#FFD166', '#06D6A0', '#118AB2', '#073B4C'
    ];
    
    return {
      id: Date.now() + Math.random(),
      letter,
      x: position.x,
      y: position.y,
      opacity: 1,
      size: difficulty === 'hard' ? 45 : difficulty === 'medium' ? 55 : 65,
      color: colors[Math.floor(Math.random() * colors.length)],
      isPopping: false
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
    
    // Add initial balloons
    const initialBalloons = [];
    const count = difficulty === 'hard' ? 8 : difficulty === 'medium' ? 6 : 4;
    for (let i = 0; i < count; i++) {
      initialBalloons.push(createBalloon());
    }
    setBalloons(initialBalloons);
  };

  // Pop balloon with animation
  const popBalloon = (balloonId) => {
    setBalloons(prev => 
      prev.map(balloon => 
        balloon.id === balloonId 
          ? { ...balloon, isPopping: true }
          : balloon
      )
    );
    
    setTimeout(() => {
      setBalloons(prev => prev.filter(balloon => balloon.id !== balloonId));
    }, 300);
  };

  // Handle key press
  const handleKeyPress = useCallback((e) => {
    if (!isPlaying || gameOver) return;
    
    const key = e.key;
    if (key.length === 1 && !e.ctrlKey && !e.altKey && !e.metaKey) {
      setTotalTyped(prev => prev + 1);
      
      // Find balloon with matching letter
      const matchingBalloon = balloons.find(b => 
        b.letter.toLowerCase() === key.toLowerCase() && !b.isPopping
      );
      
      if (matchingBalloon) {
        // Correct key - pop balloon
        popBalloon(matchingBalloon.id);
        setScore(prev => prev + difficultySettings[difficulty].points);
        
        // Add new balloon after a delay
        setTimeout(() => {
          setBalloons(prev => [...prev, createBalloon()]);
        }, 200);
      } else {
        // Wrong key - flash red
        setFlash(true);
        setTimeout(() => setFlash(false), 200);
      }
      
      // Update accuracy
      const correctChars = matchingBalloon ? 1 : 0;
      const newAccuracy = ((score + correctChars) / (totalTyped + 1)) * 100;
      setAccuracy(Math.min(100, Math.max(0, newAccuracy)));
      
      setInputValue('');
    }
  }, [isPlaying, balloons, difficulty, score, totalTyped, gameOver]);

  // Handle balloon movement
  useEffect(() => {
    if (!isPlaying || gameOver) return;
    
    const moveBalloons = () => {
      setBalloons(prev => 
        prev.map(balloon => ({
          ...balloon,
          y: balloon.y - difficultySettings[difficulty].speed
        })).filter(balloon => balloon.y > -100)
      );
    };
    
    const interval = setInterval(moveBalloons, 50);
    return () => clearInterval(interval);
  }, [isPlaying, difficulty, gameOver]);

  // Spawn new balloons
  useEffect(() => {
    if (!isPlaying || gameOver) return;
    
    const spawnBalloon = () => {
      if (balloons.length < (difficulty === 'hard' ? 12 : difficulty === 'medium' ? 9 : 6)) {
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
      if (isPlaying && !gameOver) {
        handleKeyPress(e);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyPress, isPlaying, gameOver]);

  // Time options
  const timeOptions = [30, 60, 90, 120];

  // Styles
  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '2rem 0',
    },
    gameArea: {
      background: 'linear-gradient(180deg, #e0f7fa 0%, #bbdefb 100%)',
      borderRadius: '1rem',
      border: '2px solid #93c5fd',
      position: 'relative',
      overflow: 'hidden',
      height: '500px',
    },
    balloon: {
      position: 'absolute',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 'bold',
      border: '2px solid white',
      boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
      cursor: 'pointer',
      userSelect: 'none',
      transition: 'transform 0.3s ease',
    },
    textGradient: {
      background: 'linear-gradient(45deg, #667eea, #764ba2, #f093fb)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundSize: '300% 300%',
      animation: 'gradientAnimation 3s ease infinite',
    },
    '@keyframes gradientAnimation': {
      '0%': { backgroundPosition: '0% 50%' },
      '50%': { backgroundPosition: '100% 50%' },
      '100%': { backgroundPosition: '0% 50%' },
    },
    '@keyframes float': {
      '0%, 100%': { transform: 'translateY(0) rotate(0)' },
      '50%': { transform: 'translateY(-10px) rotate(2deg)' },
    },
    '@keyframes pop': {
      '0%': { transform: 'scale(1)', opacity: 1 },
      '100%': { transform: 'scale(1.5)', opacity: 0 },
    },
    '@keyframes flash': {
      '0%': { backgroundColor: 'transparent' },
      '50%': { backgroundColor: 'rgba(255, 0, 0, 0.2)' },
      '100%': { backgroundColor: 'transparent' },
    },
  };

  return (
    <div 
      className={`py-8 bg-white min-h-screen ${flash ? 'flash-animation' : ''}`}
      style={styles.container}
    >
      <div className="max-w-6xl mx-auto bg-white rounded-xl p-6 md:p-8 shadow-xl border border-gray-200">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold mb-4" style={styles.textGradient}>
            <FaBomb className="inline mr-3" />
            Typing Master Blast
            <FaBomb className="inline ml-3" />
          </h2>
          <p className="text-gray-700 text-lg">
            Pop balloons by typing matching letters before they escape!
          </p>
        </div>

        {/* Game Controls */}
        <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Difficulty Selection */}
            <div className="bg-white rounded-lg p-4 border border-gray-300">
              <h3 className="text-lg font-bold mb-3 text-blue-600 flex items-center">
                <FaBrain className="mr-2" /> Difficulty Level
              </h3>
              <div className="space-y-2">
                {['easy', 'medium', 'hard'].map((level) => (
                  <button
                    key={level}
                    onClick={() => setDifficulty(level)}
                    className={`w-full py-3 px-4 rounded-lg font-medium transition-all ${
                      difficulty === level
                        ? level === 'easy'
                          ? 'bg-green-500 text-white shadow-md'
                          : level === 'medium'
                          ? 'bg-yellow-500 text-white shadow-md'
                          : 'bg-red-500 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {level.charAt(0).toUpperCase() + level.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Time Selection */}
            <div className="bg-white rounded-lg p-4 border border-gray-300">
              <h3 className="text-lg font-bold mb-3 text-blue-600 flex items-center">
                <FaClock className="mr-2" /> Select Time
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {timeOptions.map((time) => (
                  <button
                    key={time}
                    onClick={() => !isPlaying && startGame(time)}
                    disabled={isPlaying}
                    className={`py-3 px-4 rounded-lg font-medium transition-all ${
                      isPlaying
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-blue-100 text-blue-700 hover:bg-blue-200 hover:text-blue-800'
                    }`}
                  >
                    {time} seconds
                  </button>
                ))}
              </div>
            </div>

            {/* Game Stats */}
            <div className="bg-white rounded-lg p-4 border border-gray-300">
              <h3 className="text-lg font-bold mb-3 text-blue-600 flex items-center">
                <FaTachometerAlt className="mr-2" /> Current Stats
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{score}</div>
                  <div className="text-sm text-gray-600">Score</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">
                    {Math.round(accuracy)}%
                  </div>
                  <div className="text-sm text-gray-600">Accuracy</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">
                    {balloons.length}
                  </div>
                  <div className="text-sm text-gray-600">Balloons</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-red-600">
                    {timeLeft}s
                  </div>
                  <div className="text-sm text-gray-600">Time Left</div>
                </div>
              </div>
            </div>
          </div>

          {/* Start/Stop Button */}
          <div className="text-center">
            <button
              onClick={() => {
                if (isPlaying) {
                  setIsPlaying(false);
                  setGameOver(true);
                } else {
                  startGame(60);
                }
              }}
              className={`px-10 py-3 rounded-lg font-bold text-lg transition-all transform hover:scale-105 ${
                isPlaying
                  ? 'bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white'
                  : 'bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white'
              } shadow-lg`}
            >
              <FaGamepad className="inline mr-2" />
              {isPlaying ? 'Stop Game' : 'Start Typing Game'}
            </button>
          </div>
        </div>

        {/* Game Instructions */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-8">
          <h3 className="font-bold text-lg mb-3 text-blue-700 flex items-center">
            <FaKeyboard className="mr-2" /> How to Play
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-blue-600 mb-2">Controls:</h4>
              <ul className="space-y-2 text-blue-700">
                <li className="flex items-center">
                  <FaKeyboard className="mr-2 text-sm" />
                  Type letters on keyboard to pop balloons
                </li>
                <li className="flex items-center">
                  <FaMousePointer className="mr-2 text-sm" />
                  Click balloons directly as alternative
                </li>
                <li className="text-sm text-blue-600">
                  Wrong key presses will flash screen red
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-blue-600 mb-2">Scoring:</h4>
              <ul className="space-y-2 text-blue-700">
                <li>Easy: 1 point per balloon</li>
                <li>Medium: 2 points per balloon</li>
                <li>Hard: 3 points per balloon</li>
                <li className="text-sm">Accuracy affects final score</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Game Area */}
        <div 
          ref={containerRef}
          style={styles.gameArea}
          className="mb-8"
        >
          {/* Balloons */}
          {balloons.map((balloon) => (
            <div
              key={balloon.id}
              className={`balloon ${balloon.isPopping ? 'popping' : ''}`}
              style={{
                ...styles.balloon,
                left: `${balloon.x}px`,
                top: `${balloon.y}px`,
                width: `${balloon.size}px`,
                height: `${balloon.size}px`,
                backgroundColor: balloon.color,
                fontSize: `${balloon.size * 0.4}px`,
                animation: balloon.isPopping ? 'pop 0.3s forwards' : 'float 3s ease-in-out infinite',
              }}
              onClick={() => {
                if (isPlaying && !balloon.isPopping) {
                  popBalloon(balloon.id);
                  setScore(prev => prev + difficultySettings[difficulty].points);
                  setTotalTyped(prev => prev + 1);
                }
              }}
            >
              {balloon.letter}
            </div>
          ))}

          {/* Hidden input for focus */}
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="opacity-0 absolute w-0 h-0"
            autoFocus
          />

          {/* Start Screen */}
          {!isPlaying && !gameOver && (
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 flex flex-col items-center justify-center rounded-xl">
              <div className="text-center p-8">
                <FaGamepad className="text-7xl text-blue-500 mb-6 animate-bounce mx-auto" />
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Ready to Test Your Typing Skills?
                </h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  Select difficulty and time limit, then click Start Game.
                  Type the letters shown on balloons to pop them!
                </p>
                <div className="inline-block bg-white px-4 py-2 rounded-lg shadow">
                  <span className="text-gray-500">Current Difficulty: </span>
                  <span className={`font-bold ${
                    difficulty === 'easy' ? 'text-green-600' :
                    difficulty === 'medium' ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {difficulty.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Game Over Screen */}
          {gameOver && (
            <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center rounded-xl">
              <div className="bg-white p-8 rounded-xl text-center max-w-md w-full mx-4">
                <FaSkull className="text-6xl text-red-500 mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Game Over!</h2>
                
                <div className="space-y-4 mb-8">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-lg">
                    <div className="text-sm">Final Score</div>
                    <div className="text-4xl font-bold">{score}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-lg font-bold text-green-600">
                        {Math.round(accuracy)}%
                      </div>
                      <div className="text-sm text-gray-600">Accuracy</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-lg font-bold text-blue-600">
                        {totalTyped}
                      </div>
                      <div className="text-sm text-gray-600">Total Typed</div>
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={() => startGame(60)}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all w-full shadow-md"
                >
                  Play Again
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Difficulty Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-b from-green-50 to-white p-5 rounded-xl border border-green-200">
            <h4 className="font-bold text-lg mb-3 text-green-700">Easy Mode</h4>
            <ul className="space-y-2 text-green-600">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Slow moving balloons
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Lowercase letters only (a-z)
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Larger balloon size
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                1 point per balloon
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-b from-yellow-50 to-white p-5 rounded-xl border border-yellow-200">
            <h4 className="font-bold text-lg mb-3 text-yellow-700">Medium Mode</h4>
            <ul className="space-y-2 text-yellow-600">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                Medium speed balloons
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                Letters + Numbers (A-Z, 0-9)
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                Medium balloon size
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                2 points per balloon
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-b from-red-50 to-white p-5 rounded-xl border border-red-200">
            <h4 className="font-bold text-lg mb-3 text-red-700">Hard Mode</h4>
            <ul className="space-y-2 text-red-600">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                Fast moving balloons
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                All characters + Symbols
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                Smaller balloon size
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                3 points per balloon
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Add CSS for animations */}
      <style jsx>{`
        @keyframes gradientAnimation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        
        @keyframes pop {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        
        @keyframes flash {
          0% { background-color: transparent; }
          50% { background-color: rgba(255, 0, 0, 0.2); }
          100% { background-color: transparent; }
        }
        
        .flash-animation {
          animation: flash 0.2s ease;
        }
        
        .balloon:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(0,0,0,0.3) !important;
        }
        
        .balloon::after {
          content: '';
          position: absolute;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 15px;
          background: rgba(255, 255, 255, 0.8);
        }
      `}</style>
    </div>
  );
};

export default TypingMaster;
