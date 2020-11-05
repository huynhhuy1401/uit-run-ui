import React, { useState, useEffect } from 'react'
import { Container, Button, Col } from 'react-bootstrap'
import { quizService } from '../services/quiz.service'
import Spinner from 'react-bootstrap/Spinner'
import Question from './Question'
import { useCountdown } from '../hooks/useCountdown'
import ModalInstruction from './ModalInstruction'
import { secondToMinutesAndSeconds } from '../utils'
import { Prompt } from 'react-router-dom'

const TOTAL_QUESTIONS = 25

function Quiz() {
  // const [loading, setLoading] = useState(false)
  // const [error, setError] = useState(false)
  // const [questions, setQuestions] = useState([])
  // const [number, setNumber] = useState(0)
  // const [score, setScore] = useState(0)
  // const [gameOver, setGameOver] = useState(true)
  // const [showResult, setShowResult] = useState(false)
  // const [shouldGetScore, setShouldGetScore] = useState(false)
  // const { time, timePassed } = useCountdown(gameOver, setGameOver, loading, setShouldGetScore)
  // const [showInstruction, setShowInstruction] = useState(false)
  // const [userAnswers, setUserAnswers] = useState([])
  // const [showButtons, setShowButtons] = useState(true)
  // const [playingVideo, setPlayingVideo] = useState(false)

  // useEffect(() => {
  //   const getScore = async () => {
  //     setLoading(true)
  //     setError(false)

  //     try {
  //       const score = await quizService.postExam(userAnswers, timePassed)
  //       setLoading(false)
  //       setScore(score)
  //       setGameOver(true)
  //       setShowResult(true)
  //     } catch (error) {
  //       setError(true)
  //       setLoading(false)
  //       setGameOver(true)
  //     }
  //   }
  //   if (shouldGetScore) {
  //     getScore()
  //   }
  // }, [shouldGetScore, timePassed, userAnswers])

  // const handleClose = () => setShowInstruction(false)
  // const handleShow = () => setShowInstruction(true)

  // const startQuiz = async () => {
  //   setLoading(true)
  //   setGameOver(false)
  //   setShowButtons(false)
  //   try {
  //     const newQuestions = await quizService.getExam()
  //     setQuestions(newQuestions)
  //     setLoading(false)
  //   } catch (error) {
  //     setGameOver(true)
  //     setError(true)
  //     setLoading(false)
  //   }
  // }

  // //

  // const nextQuestion = () => {
  //   setNumber(number + 1)
  //   setPlayingVideo(false)
  // }

  // const checkAnswer = async (answer) => {
  //   const newUserAnswer = {
  //     id: questions[number].id,
  //     ans: answer,
  //   }

  //   setUserAnswers([...userAnswers, newUserAnswer])
  //   if (number === TOTAL_QUESTIONS - 1) {
  //     setGameOver(true)
  //     setShouldGetScore(true)
  //   } else {
  //     nextQuestion()
  //   }
  // }

  // return (
    
  //   <Container className="d-flex flex-column align-items-center container">
  //     <Prompt 
  //       when={!gameOver}
  //       message={(location)=> {
  //         if (!gameOver) return false
  //       }}
  //     />
  //     <h1>Thi Đấu</h1>
  //     {loading && (
  //       <Spinner animation="border" role="status">
  //         <span className="sr-only">Đang tải...</span>
  //       </Spinner>
  //     )}
  //     {error && (
  //       <h3 className="text-danger">
  //         Có lỗi, xin hãy tải lại trang hoặc liên hệ với BTC qua đường link fanpage <a className="text-danger" href="https://www.facebook.com/uitrun/">tại đây</a> , hoặc nếu bạn đã
  //         thi rồi thì không thể thi nữa
  //       </h3>
  //     )}
  //     {showButtons && (
  //       <>
  //       <Col xs={12} lg={4} xl={4}>
  //       <Button
  //           variant="outline-custom"
  //           className="mt-4 d-block w-100 custom-transition"
  //           onClick={startQuiz}
  //         >
  //           Bắt Đầu
  //         </Button>
  //         <Button
  //           onClick={handleShow}
  //           variant="outline-custom"
  //           className="mt-4 d-block w-100 custom-transition"
  //         >
  //           Hướng dẫn
  //         </Button>
  //       </Col>
  //       </>
  //     )}

  //     {!loading && !gameOver && (
  //       <>
  //         <h3>{secondToMinutesAndSeconds(time)}</h3>
  //         <Question
  //           questionNumber={number}
  //           question={questions[number]}
  //           answers={questions[number].answers}
  //           checkAnswer={checkAnswer}
  //           playingVideo={playingVideo}
  //           setPlayingVideo={setPlayingVideo}
  //         />
  //       </>
  //     )}
  //     {showResult && (
  //       <>
  //         <h3>Tổng điểm: {score*20}</h3>
  //         <h3>Thời gian: {secondToMinutesAndSeconds(timePassed)}</h3>
  //       </>
  //     )}
  //     <ModalInstruction show={showInstruction} onHide={handleClose} />
  //   </Container>
  // )
  return (
    <Container className="d-flex flex-column align-items-center container text-center">
      <h3>
      Chúc mừng các bạn đã hoàn thành vòng 1 UIT Run Mùa 2 
      </h3>
      <h3>
      Vòng 2 sẽ được thông tin đến các bạn sớm thôi. Cùng theo dõi fanpage nhé
      </h3>
    </Container>
  )
}

export default Quiz
