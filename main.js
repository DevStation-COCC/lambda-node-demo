$(function(){
  //Add your API Gateway url here
  let url = '';

  //Build a GET request
  let request = {
    url: url,
    type: 'GET',
    crossDomain: true,
    success: function(response){
      //Simple console logs for exploration/discovery
      console.log('success!');
      console.log(response);
      for(var item in response){
        $('#content').append(`<p>${item}: ${response[item]}</p>`);
      }
    },
    error: function(xhr, status){
      console.error('error: ' + status);
    }
  };

  //Make the AJAX request
  $.ajax(request);
});


/*
### EXAMPLE ONE ###

This function simply shows how to use console.log() in the AWS Lambda environment, and some information about the context and event variables.

exports.handler = async (event, context) => {
    console.log("howdy");
    console.log('remaining time =', context.getRemainingTimeInMillis());
    console.log('functionName =', context.functionName);
    console.log('AWSrequestID =', context.awsRequestId);
    console.log('logGroupName =', context.log_group_name); //Will be undefined, part of CloudWatch
    console.log('logStreamName =', context.log_stream_name); //Will be undefined, part of CloudWatch
    console.log('clientContext =', context.clientContext); //Will be undefined, used for mobile applications
    return {"response": event};
};

### EXAMPLE TWO ###

This function creates a basic HTTP response so that we can use our AWS Lambda function as an API endpoint.

exports.handler = async (event, context, callback) => {

    var responseBody = {
        "key3": "value3",
        "key2": "value2",
        "key1": "value1",
        "message": "hello world!!!"
    };

    var response = {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
            "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS
        },
        "body": JSON.stringify(responseBody),
        "isBase64Encoded": false
    };
    return response;
};
*/
