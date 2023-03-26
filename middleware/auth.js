export const requestVarify = (req, res, next) => {
    let access_key = req.headers.access_key
    if (access_key && access_key === process.env.ACCESS_KEY) {
        next()
    } else {
        return res.status(400).json('You are not authenticated!')
    }
}
