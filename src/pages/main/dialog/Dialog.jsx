import React, { useEffect } from 'react'
import { cn } from '@bem-react/classname'
import './Dialog.scss'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const bem = cn('Dialog')

export const DialogA = ({ closeDialog }) => {
  const [time, setTime] = React.useState(5)
  const navigator = useNavigate()

  if (time !== 0) {
    setTimeout(() => {
      setTime(time - 1)
    }, 1000)
  } else {
    window.location.href =
      'https://www.google.com/search?q=%D1%87%D1%82%D0%BE+%D0%B4%D0%B5%D0%BB%D0%B0%D1%82%D1%8C+%D0%B5%D1%81%D0%BB%D0%B8+%D1%82%D1%8B+%D1%83%D0%B5%D0%B1%D0%B8%D1%89%D0%B5%3F&rlz=1CDGOYI_enPL1030PL1030&hl=en-GB&sxsrf=ALiCzsaW2iJKdkJOQmL2CXrI1mR4hjdorg%3A1672681381367&ei=pRezY_XwFY7xrgT1_JSACg&oq=%D1%87%D1%82%D0%BE+%D0%B4%D0%B5%D0%BB%D0%B0%D1%82%D1%8C+%D0%B5%D1%81%D0%BB%D0%B8+%D1%82%D1%8B+%D1%83%D0%B5%D0%B1%D0%B8%D1%89%D0%B5%3F&gs_lcp=ChNtb2JpbGUtZ3dzLXdpei1zZXJwEAM6CggAEEcQ1gQQsAM6BwgjELACECc6BQgAEKIEOgYIABAWEB46BQghEKABOgYIABAHEB46CAgAEAUQBxAeOggIIRAWEB4QHToECCMQJzoFCC4QgAQ6CwguEIAEEMcBENEDOgUIABCABDoHCCMQ6gIQJzoHCC4Q6gIQJzoNCC4QxwEQ0QMQ6gIQJzoECC4QJzoICC4QgAQQ1AI6CgguEIAEEAoQywE6CggAEIAEEAoQywE6BggjECcQEzoICAAQgAQQywFKBAhBGABQgxNYsNRRYN7YUWgecAB4AIABjwKIAYY4kgEHNDAuMjcuMpgBAKABAbABD8gBCMABAQ&sclient=mobile-gws-wiz-serp'
  }

  return (
    <div className={bem()}>
      <img className={bem('Img')} src="images/scarry.jpg" />
      <h2 className={bem('Text')}>сьебался в страхе раз не интересно, чучело…</h2>
      <h4 className={bem('Seconds')}>Даю тебе 5 секунд</h4>
      <h1 className={bem('Timer')}>{time}</h1>

      <Button variant="contained" className={bem('Button')} onClick={closeDialog}>
        Я передумал, прости
      </Button>
    </div>
  )
}
