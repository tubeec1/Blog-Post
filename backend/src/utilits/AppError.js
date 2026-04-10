<<<<<<< HEAD
class AppError extends Error{
    constructor(message ,status){
        super(message)
        this.statusCode =status
    }
}

module.exports = AppError;
=======
class AppError extends Error {
  constructor(message, status) {
    super(message);
    this.statusCode = status;
  }
}

module.exports = AppError;
>>>>>>> 662067948171c274299c4ef699f923e50dbeb344
