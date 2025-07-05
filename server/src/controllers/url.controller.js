import jwt from "jsonwebtoken";
import { v4 as uuidv4} from "uuid"
import dateAndTime from "../libs/dateAndTime.js";

const urlShortendLink = async (req, res) => {
      try {
        const { url, validity } = req.body;
        let shortcode = req.body.shortcode;
        if(!shortcode){
            shortcode = uuidv4();
        }
        const token = jwt.sign( {url: url},process.env.JWT_SECRET_KEY,{expiresIn:"1d"});
        res.cookie("token",token,{ httpOnly:true, maxAge:validity*60*1000 }); 
        const newUrl = `http://localhost:3000/shorturls/${shortcode}`;
        const expiryTime = dateAndTime(validity);
        return res.status(201).json({ shortLink:newUrl, expiry: expiryTime });

      } catch (error) {
        return res.status(500).json({ status: false, message: "Internal Server Error!!"});
      }
}

export default urlShortendLink;


