function errorHandler(error, req, res, next){
    return res.status(error.status || 500).json({
        error: {
            message: error.message || "Something went wrong..",
            info: error.info || { error: error }
        }
    });
}

module.exports = errorHandler;