import { v2 as cloudinary } from "cloudinary";
import { config } from "../../config.js";

cloudinary.config({
    cloud_name: config.CLOUDINARY_CLOUD,
    api_key: config.CLOUDINARY_KEY,
    api_secret: config.CLOUDINARY_SECRET,
});

export default cloudinary;