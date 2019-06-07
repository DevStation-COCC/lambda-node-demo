# AWS Lambda with Node Demo
This is a basic demo guide on how to get started with AWS Lambda using Node.
_Last update: June 7, 2019_

### Create The Function!
1. Visit the [AWS Lambda](https://us-west-2.console.aws.amazon.com/lambda/home) console.
2. Select _Create Function_
3. Give your function a name
4. Create a role
   - i. Create new role from template(s)
   - ii. Provide a role name
   - iii. From Policy Templates select the _Simple Microservice permissions_
5. _Create function_! Huzzah!

You've now created an AWS Lambda function and should be looking at the details of your new function.

### Create A Test
1. In the upper-right corner select _Test_
2. Give your test/event a name
3. _Create_
   - __NOTE:__ You can change the data in the JSON now or later, the default data is placed their for convenience.
4. Run the _Test_!
   - __NOTE:__ Make sure to expand the _Details_ section of the green output window at the top of the page to see the response data.
   - __NOTE:__ Your console logs are under _Log output_ of the _Details_ section

### Add Custom Code
1. Copy the code from __main.js__ - Example One - into the editor.
   - __NOTE:__ This code will replace ALL of the code currently in the editor that was provided by default.
  - __NOTE:__ REMEMBER TO HIT SAVE!
2. Run the _Test_ you created previously.

#### Question
At this point your response body should be exactly the same as the JSON data in your test. Why?

#### Answer
The event object holds the data passed into our function, and the callback is passing the event object into the JSON response returned by our function.

### API Endpoint
1. In the _Designer_ under _Add Trigger_ click on _API Gateway_.
   - __RANT:__ To me their interface looks as though you should be able to drag and drop, but you cannot. So, if you are like me, it is important to emphasis that you need to __click__ the Trigger, not drag and drop.
2. Scroll down to the _Configure trigger_ section.
3. Select _Create a new API_.
4. Security select _Open_.
   - __NOTE:__ This means if someone got the link to your API they could pass data in, and get whatever data is coming out. So, be careful!
5. Expand _Additional Settings_ and change the name and/or deployment stage if you'd like, but not needed.
6. Click _Add_ then click _SAVE_! Super easier to forget to save (speaking from experience).
7. There should now be a link at the bottom of your screen, visit it!

Oh...internal server error. Why do you think we are getting this error?

I know! We are not responding with a proper HTTP response! Now that we've attached an API Gateway trigger to our Lambda function we need to send a proper HTTP response with a status, body, headers, etc.!

Jump back into the __main.js__ file and grab the code under EXAMPLE TWO. Replace ALL of the code in your Lambda editor with the example code.

Alright, try that link again!

# CONGRATS!
You've now deployed an AWS Lambda function as an API endpoint using AWS API Gateway.

### Wrap up
Paste your API Gateway url into __main.js__ of this project. Fire up live-server and your Lambda response should now appear in your browser.

### Moving forward

Check out [this](https://docs.aws.amazon.com/lambda/latest/dg/with-s3.html) tutorial to learn more about [S3](https://s3.console.aws.amazon.com/s3/home) triggers for Lambda

Check out [this](https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html) tutorial to learn more about [DynamoDB](https://us-west-2.console.aws.amazon.com/dynamodb/home) triggers for Lambda.

Check out [this](https://docs.aws.amazon.com/lambda/latest/dg/with-cloudtrail.html) tutorial to learn more about creating log files of actions taken against your Lambda function using [CloudTrail](https://us-west-2.console.aws.amazon.com/cloudtrail/home).