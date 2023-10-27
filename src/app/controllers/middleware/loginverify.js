import jwt from 'jsonwebtoken'

module.exports = (req, res, next)

try{
    const token = req.headers.authorization.split(' ')[1]
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded
    next()
} catch{
    res.status(401).json({message: 'Sem token'})
}

export default loginverify