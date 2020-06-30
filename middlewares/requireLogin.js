module.exports = (req, res, next) => {
    if (!req.user) {
        return res.status(401).send({ eror: 'You must log in!'});
    }
    next();

};