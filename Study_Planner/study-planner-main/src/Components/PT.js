import React, { useEffect, useRef, useState } from 'react';

const App = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  
  const timerRef = useRef(null); // Using useRef to store the timer

  const startTimer = (mins, secs) => {
    clearInterval(timerRef.current);
    setMinutes(mins);
    setSeconds(secs);
    setIsRunning(true);
    setIsPaused(false);

    timerRef.current = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          if (minutes === 0) {
            clearInterval(timerRef.current);
            setIsRunning(false);
            alert("Time's up!");
            return 0;
          } else {
            setMinutes((prevMinutes) => prevMinutes - 1);
            return 59;
          }
        } else {
          return prevSeconds - 1;
        }
      });
    }, 1000);
  };

  const pauseTimer = () => {
    if (isRunning) {
      clearInterval(timerRef.current);
      setIsRunning(false);
      setIsPaused(true);
    }
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setIsPaused(false);
    setMinutes(25);
    setSeconds(0);
  };

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Pomodoro Timer</h1>
      <div style={styles.timer}>
        <span>{String(minutes).padStart(2, '0')}</span>:<span>{String(seconds).padStart(2, '0')}</span>
      </div>
      <div style={styles.controls}>
        <button style={styles.button} onClick={() => !isRunning && !isPaused && startTimer(25, 0)}>Start</button>
        <button style={styles.button} onClick={pauseTimer}>Pause</button>
        <button style={styles.button} onClick={resetTimer}>Reset</button>
        <button style={styles.button} onClick={() => !isRunning && !isPaused && startTimer(5, 0)}>Short Break</button>
        <button style={styles.button} onClick={() => !isRunning && !isPaused && startTimer(15, 0)}>Long Break</button>
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '20px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
    width: '100%',
    maxWidth: '400px',
    margin: 'auto',
    background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
    height: '100vh',
  },
  title: {
    fontSize: '32px',
    color: '#333',
    marginBottom: '20px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },
  timer: {
    fontSize: '64px',
    color: '#ff6347',
    marginBottom: '40px',
    fontWeight: 'bold',
    letterSpacing: '2px',
    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.2)',
  },
  controls: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    width: '50%',
  },
  button: {
    padding: '15px 25px',
    fontSize: '20px',
    border: 'none',
    background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    color: '#fff',
    borderRadius: '30px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.3s, box-shadow 0.3s',
    width: '100%',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
};

export default App;