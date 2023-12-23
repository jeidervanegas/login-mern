import multer from 'multer'
import crypto from 'node:crypto'
import { extname } from 'node:path'

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      
      cb(null, Date.now()+extname(file.originalname))

    }
  })
  export const upload = multer({ storage: storage })


