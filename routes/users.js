var express = require('express');
var router = express.Router();
var AWS = require('aws-sdk');
var dynamodb = new AWS.DynamoDB({region: 'us-east-1'});

/* GET users listing. */
router.get('/test', function(req, res, next) {
//  res.send('respond with a resource');
var params = {
  IndexName: 'cluster-pagado-index',
  ExpressionAttributeNames: { '#cname': 'cluster'},
  ExpressionAttributeValues: { 
':cval': { S: 'caserio san diego 72750'},
':pval': { S: '1'},
},
  KeyConditionExpression: '#cname = :cval',
  TableName: 'cuotas'
};
dynamodb.query(params, function (err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     res.json(data);           // successful response
});

});

module.exports = router;
