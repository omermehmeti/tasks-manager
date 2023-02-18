class CustomApiError extends Error{
    constructor(message,statuscode)
    {
    super(message);
    this.statuscode = statuscode;
}
}
const createCustomError =(msg,statuscode)=>{
    return new CustomApiError(msg,statuscode);
}
module.exports={createCustomError,CustomApiError}