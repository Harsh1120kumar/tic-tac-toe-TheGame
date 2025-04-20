import React, { useMemo, useState, useEffect } from 'react';
import './App.css';

const initialBoard = Array(9).fill(null);
const computerSymbol = 'O';
const playerSymbol = 'X';

// __define-ocg__
function App() {
  const [name, setName] = useState('');
  const [started, setStarted] = useState(false);
  const [board, setBoard] = useState(initialBoard);
  const [winner, setWinner] = useState(null);
  const [isBgMusicEnabled, setIsBgMusicEnabled] = useState(true);
  const [isBgMusicPlaying, setIsBgMusicPlaying] = useState(false);

  // 🎵 Memoized Audio
  const clickSound = useMemo(() => new Audio(process.env.PUBLIC_URL + '/sounds/click.mp3'), []);
  const bgMusic = useMemo(() => {
    const music = new Audio(process.env.PUBLIC_URL + '/sounds/bg-music.mp3');
    music.loop = true;
    return music;
  }, []);
  const winSound = useMemo(() => new Audio(process.env.PUBLIC_URL + '/sounds/win.mp3'), []);
  const drawSound = useMemo(() => new Audio(process.env.PUBLIC_URL + '/sounds/draw.mp3'), []);

  // 🧠 Preload audio
  useEffect(() => {
    clickSound.load();
    winSound.load();
    drawSound.load();
  }, [clickSound, winSound, drawSound]);

  // 🎵 Background Music: User Interaction Autoplay Fix
  useEffect(() => {
    const handleInteraction = () => {
      if (isBgMusicEnabled && !isBgMusicPlaying && !started) {
        bgMusic.play().then(() => {
          setIsBgMusicPlaying(true);
        }).catch((err) => {
          console.warn('Autoplay blocked:', err);
        });
      }
      window.removeEventListener('click', handleInteraction);
    };

    window.addEventListener('click', handleInteraction);

    return () => {
      window.removeEventListener('click', handleInteraction);
    };
  }, [bgMusic, isBgMusicEnabled, isBgMusicPlaying, started]);

  // 🎵 Handle Background Music Enable/Disable
  useEffect(() => {
    if (isBgMusicEnabled && !started) {
      if (!isBgMusicPlaying) {
        bgMusic.play().then(() => {
          setIsBgMusicPlaying(true);
        }).catch((err) => {
          console.warn('Autoplay blocked on enable:', err);
        });
      }
    } else {
      bgMusic.pause();
      bgMusic.currentTime = 0;
      setIsBgMusicPlaying(false);
    }

    return () => {
      bgMusic.pause();
      bgMusic.currentTime = 0;
      setIsBgMusicPlaying(false);
    };
  }, [isBgMusicEnabled, bgMusic, started, isBgMusicPlaying]);

  const handleNameSubmit = () => {
    if (name.trim()) {
      setStarted(true);
    }
  };

  const handleClick = (index) => {
    if (board[index] || winner) return;

    clickSound.play().catch((err) => {
      console.warn('Click sound blocked:', err);
    });

    const newBoard = [...board];
    newBoard[index] = playerSymbol;
    setBoard(newBoard);
  };

  const checkWinner = (board) => {
    const combos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    for (let [a, b, c] of combos) {
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        return board[a];
      }
    }
    if (!board.includes(null)) return 'Draw';
    return null;
  };

  const computerMove = (board) => {
    const empty = board.map((val, i) => (val === null ? i : null)).filter((i) => i !== null);
    return empty[Math.floor(Math.random() * empty.length)];
  };

  useEffect(() => {
    const gameResult = checkWinner(board);

    if (gameResult) {
      setWinner(gameResult);
      if (gameResult === 'Draw') {
        drawSound.play().catch((err) => {
          console.warn('Draw sound blocked:', err);
        });
      } else if (gameResult === 'X') {
        winSound.play().catch((err) => {
          console.warn('Win sound blocked:', err);
        });
      }
    } else if (board.filter(Boolean).length % 2 === 1) {
      const move = computerMove(board);
      if (move !== undefined) {
        const newBoard = [...board];
        newBoard[move] = computerSymbol;

        const timeout = setTimeout(() => {
          setBoard(newBoard);
        }, 500);

        return () => clearTimeout(timeout);
      }
    }
  }, [board, drawSound, winSound]);

  const resetGame = () => {
    setBoard(initialBoard);
    setWinner(null);
    setStarted(false);
  };

  const toggleBgMusic = () => {
    setIsBgMusicEnabled((prev) => !prev);
  };

  return (
    <div className="app">
      {!started ? (
        <div>
          <h1 className="game-heading">
            Welcome<br />To<br />Tic Tac Toe Game !
          </h1>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <button onClick={handleNameSubmit}>Start Game</button>
        </div>
      ) : (
        <div>
          <h2>Hello, {name}! Your move!</h2>
          <div className="board">
            {board.map((cell, i) => (
              <div key={i} className="cell" onClick={() => handleClick(i)}>
                {cell}
              </div>
            ))}
          </div>
          {winner && (
            <div className="popup">
              <h2>
                {winner === 'Draw'
                  ? `🤝 Aree Yaar , Game Draw ! ${name}!`
                  : winner === 'X'
                    ? `🎉 7 Crore, Jeet Hui Hai aapki  ${name}!`
                    : `💻 Oh Nahi! Computer Mahashay ki jeet hui !`}
              </h2>
              <button onClick={resetGame}>Play Again</button>
            </div>
          )}
        </div>
      )}
      <div className="music-control">
        <button onClick={toggleBgMusic}>
          {isBgMusicEnabled ? 'Pause Music' : 'Play Music'}
        </button>
      </div>
    </div>
  );
}

export default App;
