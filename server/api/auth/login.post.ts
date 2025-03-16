import jwt from 'jsonwebtoken'
import { userLoginMap } from '~/server/storage/user-list'

export default defineEventHandler(async event => {
  function checkUser(password: string, correctPassword: string) {
    return password === correctPassword
  }
  const { login, password } = await readBody(event)
  const user = userLoginMap.get(login)

  if (!user || !checkUser(password, user.password)) {
    throw createError({
      statusCode: 401,
      message: 'Invalid credentials',
    })
  }

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
    expiresIn: '24h',
  })

  setCookie(event, 'token', token, { httpOnly: true })

  return {
    user: {
      id: user.id,
      login: user.login,
      fullName: user.firstName + ' ' + user.secondName,
      image: user.image,
    },
  }
})
