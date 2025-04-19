@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

body {
  margin: 0;
  background: linear-gradient(135deg, #212121, #424242); /* Dark Avengers theme */
  font-family: 'Poppins', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-size: cover;
  text-align: center;
}

.app {
  width: 90%;
  max-width: 480px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.85); /* Dark background */
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
  text-align: center;
}

.game-heading {
  font-size: 3rem; /* Larger font size */
  line-height: 1.4;
  color: #ffcc00; /* Avengers yellow/gold for the "To" part */
  margin-bottom: 20px;
  font-weight: 600;
}

.game-heading span {
  color: #d32f2f; /* Red for "TIC-TAC-TOE" part */
}

h2 {
  font-size: 1.3rem; /* Increased font size */
  color: #f5f5f5; /* Light gray for the rest of the text */
  margin-top: 1rem;
  font-weight: 600;
}

input {
  padding: 12px 18px;
  font-size: 1rem;
  border: 2px solid #ffcc00; /* Gold border */
  border-radius: 6px;
  outline: none;
  width: 65%;
  margin-top: 10px;
  font-weight: 600;
}

button {
  background-color: #ffcc00; /* Gold color */
  color: black;
  border: none;
  padding: 12px 18px;
  font-size: 1.1rem;
  margin-top: 15px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;
  width: 65%;
  font-weight: 600;
}

button:hover {
  background-color: #fbc02d; /* Slightly darker gold on hover */
}

.board {
  display: grid;
  grid-template-columns: repeat(3, 90px);
  gap: 12px;
  justify-content: center;
  margin: 25px auto;
  animation: fadeIn 0.8s ease-in;
}

.cell {
  background: white;
  border: 3px solid #ffcc00; /* Gold border */
  font-size: 2.5rem;
  font-weight: bold;
  color: #d32f2f; /* Red for the text */
  height: 90px;
  width: 90px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.2s ease;
  cursor: pointer;
  user-select: none;
}

.cell:hover {
  background: #fbc02d; /* Gold hover effect */
}

.popup {
  background: #212121; /* Dark background */
  padding: 16px 22px;
  margin-top: 20px;
  border: 2px solid #ffcc00; /* Gold border */
  border-radius: 12px;
  display: inline-block;
  animation: popIn 0.4s ease;
  color: #ffcc00; /* Gold text */
  font-weight: 600;
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes popIn {
  0% { transform: scale(0.7); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}

@media (max-width: 600px) {
  .board {
    grid-template-columns: repeat(3, 80px);
    gap: 10px;
  }

  .cell {
    width: 80px;
    height: 80px;
    font-size: 2rem;
  }

  input, button {
    width: 80%;
    font-size: 1rem;
  }

  h1, .game-heading {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.2rem;
  }
}
