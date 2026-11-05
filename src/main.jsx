import React from 'react'
import ReactDOM from 'react-dom/client'
import TambahKurang from './tambahkurang.jsx'
import InputQuiz from './input_quiz.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TambahKurang />
    <InputQuiz />
  </React.StrictMode>,
)