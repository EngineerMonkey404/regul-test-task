export default defineEventHandler(event => {
  try {
    const token = getCookie(event, 'token')
    if (!token) {
      throw createError({
        statusCode: 401,
        message: 'No token provided',
      })
    }
    setCookie(event, 'token', token, { maxAge: -1 })
    return {
      success: true,
      message: 'Logged out successfully',
    }
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Error during logout',
    })
  }
})
