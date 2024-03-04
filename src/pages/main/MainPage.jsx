import { cn } from '@bem-react/classname'
import { motion } from 'framer-motion'
import './MainPage.scss'
import { Button, Dialog, DialogActions, DialogContent, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { DialogA } from './dialog/Dialog'
import { useNavigate } from 'react-router-dom'
import { ArrowDownward } from '@mui/icons-material'

const bem = cn('MainPage')

export const MainPage = () => {
  const [open, setOpen] = useState(false)
  const navigator = useNavigate()

  const closeDialog = () => {
    setOpen(false)
  }
  return (
    <motion.div
      className={bem()}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={bem('Upper')}>
        <Typography variant="h1" className={bem('Title')}>
          Это лежит алинка
        </Typography>
        <ArrowDownward className={bem('Arrow')} />
      </div>

      <img src="images/alina-snow.png" className={bem('Img')} />
      <div className={bem('Buttons')}>
        <Button
          variant="contained"
          className={bem('Button')}
          onClick={() => {
            navigator('/alinka')
          }}
        >
          опа, кто это?
        </Button>
        <Button
          variant="outlined"
          className={bem('Button')}
          onClick={() => {
            setOpen(true)
          }}
        >
          {' '}
          мне все равно
        </Button>
      </div>

      <Dialog open={open} onClose={closeDialog}>
        <DialogContent>
          <DialogA closeDialog={closeDialog} />
        </DialogContent>
      </Dialog>

      <div className={bem('Footer')}>
        <Typography variant="subtitle1" className={bem('FooterMessage')}>
          Сделано с любовью , Алине
        </Typography>

        <Typography variant="subtitle1" className={bem('FooterText')}>
          © 2023, made by{' '}
          <a href="https://github.com/MaksimPegov" className={bem('FooterLink')}>
            Maksim Pegov
          </a>
        </Typography>
      </div>
    </motion.div>
  )
}
