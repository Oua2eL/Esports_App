const express = require('express');
const { register, login, loadPersonInfo, updateProfilePicture } = require('../controllers/personControllers');
const router = express.Router();
const personValidation = require('../middlewares/personValidation');
const authMiddleware = require ('../middlewares/authMiddleware');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './img-uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' +file.originalname
      cb(null, uniqueSuffix)
    }
  })

  const upload = multer({ storage: storage })
router.put('/profilePic', authMiddleware, upload.single('profilePicture'),updateProfilePicture)
router.post('/register', personValidation, register);
router.post('/login', personValidation, login);
router.get('/personInfo',authMiddleware, loadPersonInfo);



module.exports = router;