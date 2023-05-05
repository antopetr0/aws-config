const AWS = require('aws-sdk');
const s3 = new AWS.S3();

const AWS_ACCESS_KEY_ID = "AKIAREUC7U5F4FFOVSSZ"
const AWS_SECRET_ACCESS_KEY = "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"

function uploadFileToS3(bucketName, keyName, fileContent) {
  const params = {
    Bucket: bucketName,
    Key: keyName,
    Body: fileContent
  };
  return s3.upload(params).promise();
}

function downloadFileFromS3(bucketName, keyName) {
  const params = {
    Bucket: bucketName,
    Key: keyName
  };
  return s3.getObject(params).promise()
    .then(data => data.Body);
}

module.exports = {
  uploadFileToS3,
  downloadFileFromS3
};

