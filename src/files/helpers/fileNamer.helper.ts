import { Request } from 'express';
import { v4 as uuid } from "uuid";

export const generateFileName = (
      req: Request,
      file: Express.Multer.File,
      callback: Function,
) => {

    if (!file) return callback(new Error('File is empty'), false);

const fileExtension = file.mimetype.split('/')[1];
const validExtensions = ['jpg', 'jpeg', 'png', 'gif'];

if(!validExtensions.includes(fileExtension)) {
  return callback(new Error(`Only image files are allowed. Valid extensions are: ${validExtensions.join(', ')}`), false);
}

const fileName = `${uuid()}.${fileExtension}`;


    callback(null, fileName)

}