require('dotenv').config();
const path = require('path');
const s3Utils = require('./utils/s3');
const fsUtils = require('./utils/fs');
const mime = require('mime-types');

async function main(bucketName) {
  try {
    const basePath = path.resolve(__dirname, '../build');
    await s3Utils.clearBucket(bucketName);
    const filepaths = await fsUtils.readDirWalk(`${path.resolve(__dirname, '../build')}/**/*`);
    const files = await fsUtils.getFiles(filepaths);
    const filesWithMetadata = files.map(file => {
      file.uploadParams = {
        Bucket: bucketName,
        ACL: 'public-read',
        Body: file.data,
        Key: stripHtmlExt(path.relative(basePath, file.filepath)),
        ContentType: mime.lookup(file.filepath)
      }
      if(file.filepath.indexOf('.html') > -1) {
        file.uploadParams.CacheControl = 'max-age=0,no-cache,no-store,must-revalidate';
      }
      return file;
    });
    const promises = filesWithMetadata.map(file => {
      return s3Utils.uploadFile(file.uploadParams);
    });
    await Promise.all(promises);
    console.log(`Successfully deployed to http://${bucketName}.s3-website-${s3Utils.region}.amazonaws.com/`);
  } catch(e) {
    console.error(e);
  }
}

function stripHtmlExt(filepath) {
  let newFilepath = filepath;
  if(filepath.indexOf('.html') > -1 && filepath !== 'index.html') {
    newFilepath = filepath.replace('.html', '');
  }
  return newFilepath;
}

module.exports = main;
