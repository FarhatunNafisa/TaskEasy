export const errorHandler = (err, req, res, next) => {
    const defaultMessage =
        "We're having technical issues. Please try again later.";
    const { status, message, error } = err;

    // Jika error ada, catat di log
    if (error) {
        console.log(error);
    }

    // Kirim respons JSON dengan status dan pesan
    res.status(status).json({
        message: message || defaultMessage
    });
};