import { motion } from 'framer-motion'
import { cn } from '@bem-react/classname'
import { Button, Divider, IconButton, TextField, Typography } from '@mui/material'
import React from 'react'
import { trueLove } from '../../helpers/game'

import './Game.scss'
import { ArrowBack } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const bem = cn('Game')

export const Game = () => {
  const navigate = useNavigate()

  const [first, setFirst] = React.useState('')
  const [second, setSecond] = React.useState('')
  const [state, setState] = React.useState({
    win: false,
    lose: false,
  })

  const resetState = () => {
    setState({
      win: false,
      lose: false,
    })
  }

  const changeHandler1 = (e) => {
    setFirst(e.target.value)
    resetState()
  }

  const changeHandler2 = (e) => {
    setSecond(e.target.value)
    resetState()
  }

  const playHandler = (e) => {
    e.preventDefault()
    if (trueLove(first, second)) {
      setState((state) => ({
        ...state,
        win: true,
      }))
    } else {
      setState((state) => ({
        ...state,
        lose: true,
      }))
    }
  }

  return (
    <motion.div
      className={bem()}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <IconButton
        aria-label="delete"
        color="primary"
        className={bem('Back')}
        onClick={() => {
          navigate('/alinka')
        }}
      >
        <ArrowBack />
      </IconButton>
      <Typography variant="button" className={bem('Title')}>
        Игра "true love"
      </Typography>

      <Typography variant="subtitle1" className={bem('Subtitle')}>
        Алина учила программирование! И она написала крутую игру сама!
      </Typography>

      <Divider variant="middle" />

      <form onSubmit={playHandler}>
        <div className={bem('Main')}>
          <Typography variant="overline" className={bem('Text')}>
            Правила игры просты: <br /> Угадайте имена людей, у которых настоящая любовь!
          </Typography>

          <div className={bem('Inputs')}>
            <TextField
              id="name-1"
              label="первое имя"
              variant="outlined"
              className={bem('Input', { first: true })}
              onChange={changeHandler1}
              error={state.lose}
            />

            <TextField
              id="name-2"
              label="второе имя"
              variant="outlined"
              className={bem('Input', { second: true })}
              onChange={changeHandler2}
              error={state.lose}
            />
          </div>

          <Button className={bem('Button')} onClick={playHandler} type="submit">
            Проверить
          </Button>
        </div>
      </form>
      {state.win && !state.lose ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={bem('Result')}
        >
          {' '}
          <img className={bem('Img', { success: true })} src="images/true.jpg" />
        </motion.div>
      ) : null}
      {state.lose ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={bem('Result')}
        >
          {' '}
          <img className={bem('Img', { error: true })} src="images/false.jpg" />
        </motion.div>
      ) : null}
    </motion.div>
  )
}
