const multer = require(`multer`);

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, `./public/uploads`)
    },
    filename: (req, file, cb) => {
        const [name, ext] = file.originalname.split(`.`);
        cb(null, `${name}-${Date.now()}.${ext}`);
    },
    // size:
})

const imageUpload = multer({ storage, limits: { fileSize: 1048576 } });

module.exports = imageUpload;