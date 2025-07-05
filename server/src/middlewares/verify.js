import jwt from "jsonwebtoken";

const verify = async (req, res) =>{
    try {
        const { token } = req.cookies;
        if(!token){
            return next();
        }
        const decoded = jwt.decode(token,process.env.JWT_SECRET_KEY);
        return res.redirect(decoded.url);

    } catch (error) {
         return res.status(500).json({ status:false, message: "Internal Server Error!!"});
    }
}

export default verify