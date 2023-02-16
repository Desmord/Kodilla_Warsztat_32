const authMiddleware = (req, res, next) => {
    if (req.session?.user?.id) {
        next();
    } else {
        res.status(401).json({ message: `Brak uprawnień.` })
    }
}

module.exports = authMiddleware;