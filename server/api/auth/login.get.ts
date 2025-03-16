import jwt from 'jsonwebtoken'
import { userIdMap } from '~/server/storage/user-list'

export default defineEventHandler(async event => {
  const token = getCookie(event, 'token')
  try {
    const { userId } = jwt.verify(token, process.env.JWT_SECRET)
    const user = userIdMap.get(userId)
    if (!user) {
      throw new Error('User not found')
    }
    return {
      user: {
        id: user.id,
        login: user.login,
        fullName: user.fullName,
        image: user.image,
      },
    }
  } catch (error) {
    throw createError({ statusCode: 401, message: 'Invalid token' })
  }
})
