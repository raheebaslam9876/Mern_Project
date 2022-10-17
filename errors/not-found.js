import CustomeApiError from "./custome-api.js";
class NotFoundError extends CustomeApiError{
    constructor(message)
    {
        super(message);
        this.statusCode=StatusCodes.NotFoundError;
    }
    
}
export default NotFoundError;