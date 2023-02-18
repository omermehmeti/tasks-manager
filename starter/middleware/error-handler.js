const {CustomApiError} = require('../errors/custom-error')
const errorHandlerMiddleware =(error,req,res,next)=>{
    if (error instanceof CustomAPIError) {
        return res.status(err.statusCode).json({ msg: err.message })
      }
      return res.status(500).json({ msg: 'Something went wrong, please try again' })
}
module.exports =errorHandlerMiddleware
