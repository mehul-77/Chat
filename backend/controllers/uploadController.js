import cloudinary from "../utils/cloudinary.js";

export const uploadMedia = async (req, res) => {
    try {
        const stream = cloudinary.uploader.upload_stream(
            { resource_type: "auto" },
            (err, result) => {
                if (err) return res.status(500).json(err);
                res.json({ url: result.secure_url });
            }
        );

        stream.end(req.file.buffer);
    } catch {
        res.status(500).json({ msg: "Upload failed" });
    }
};