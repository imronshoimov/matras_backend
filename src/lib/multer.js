const multer = require("multer");
const path = require("path");

const fileUpload = (folderName) => {
    const storage = multer.diskStorage({
        destination: function(req, file, cb){
            cb(null, path.join(process.cwd(), "src", "uploads", folderName));
        },
        filename: function(req, file, cb) {
            cb(null, file.originalname.split(" ").join("_"));
        }
    });
    return multer({ 
        storage,
        limits: { fileSize: 5 * 1024 * 1024 },
        fileFilter: function(req, file, cb) {
            const fileTypes = /jpeg|jpg|png|mkv|flv|ogv|mov|mpg|mpv|wmv/;
            const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
            const mimeType = fileTypes.test(file.mimetype);
            if(extName && mimeType) {
                cb(null, true);
            } else {
                cb(null, false);
                const error = new Error("Error: Images or vidoes only!");
                error.name = "ExtensionError";
                return cb(error);
            }
        }
    });
};

module.exports = fileUpload;