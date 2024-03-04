import { motion } from 'framer-motion'
import { cn } from '@bem-react/classname'
import React, { useEffect, useRef, useState } from 'react'

import './Alinka.scss'
import { Button, CircularProgress, IconButton, Menu, Typography } from '@mui/material'
import { ArrowBack, HelpOutline, Refresh, Send, SportsEsports } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const bem = cn('Alinka')

export const Alinka = () => {
  const navigate = useNavigate()

  const dateStart = 1656626400000
  const [interval, setInterval] = useState()
  const [box, setBox] = useState(false)
  const [img, setImg] = useState(1)

  const [error, setError] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setError(true)
    }, 4000)
  }, [])

  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const nextImg = () => {
    if (img > 10) {
      setImg(1)
    } else {
      setImg(img + 1)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setBox(true)
    }, 1000)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setInterval(Date.now() - dateStart)
    }, 1000)
  }, [interval])

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
          navigate('/main')
        }}
      >
        <ArrowBack />
      </IconButton>

      <h2 className={bem('Title1')}>мы с алиной вместе...</h2>

      <div className={bem('Box')}>
        {box ? (
          <motion.div
            className={bem('Box')}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <span className={bem('Time', { days: true })}>
              {Math.trunc(interval / 8.64e7)} дней
            </span>
            <span className={bem('Time', { hours: true })}>
              {Math.trunc(interval / 3.6e6)} часов
            </span>
            <span className={bem('Time', { minutes: true })}>
              {Math.trunc(interval / 60000)} минут{' '}
            </span>
            <span className={bem('Time', { seconds: true })}>
              {Math.trunc(interval / 1000)} секунд
            </span>
          </motion.div>
        ) : null}
      </div>

      <div className={bem('Bottom')}>
        <div className={bem('Inside')}>
          <Typography vatiant="subtitle1" className={bem('Text')}>
            и мы будем вместе еще
          </Typography>
          <CircularProgress color="inherit" className={bem('Progress')} />
          <Typography vatiant="subtitle1" className={bem('Text')}>
            лет
          </Typography>
        </div>

        {error ? (
          <motion.div
            className={bem('Error')}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Button
              endIcon={<HelpOutline />}
              className={bem('Error')}
              onClick={handleClick}
            >
              узнать о ошибке
            </Button>
          </motion.div>
        ) : null}

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
        >
          <Typography variant="caption" className={bem('ErrorText')}>
            проблема с загрузкой слишком большого числа{' )'}
          </Typography>
        </Menu>
      </div>

      <img className={bem('Img')} src={`images/we/${img}.jpg`} />

      <Typography variant="subtitle1" className={bem('Message')}>
        Мы с Алиной через много прошли, и впереди еще больше, и все это время мы вместе
        честны, добры друг к другу… Так будет и дальше!
      </Typography>
      <Button
        variant="outlined"
        startIcon={<Refresh />}
        className={bem('Refresh')}
        onClick={nextImg}
      >
        другая фотка
      </Button>

      <Button
        variant="contained"
        endIcon={<SportsEsports />}
        className={bem('Next')}
        onClick={() => {
          navigate('/game')
        }}
      >
        сыграть в игру
      </Button>
    </motion.div>
  )
}
