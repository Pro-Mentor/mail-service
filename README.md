# mail-service

### project configuration

-   set up the AWS SES email service
    -   ref: https://docs.aws.amazon.com/ses/
    -   ref: https://docs.aws.amazon.com/ses/latest/dg/Welcome.html
-   go to [AWS IAM Service](https://us-east-1.console.aws.amazon.com/iam) and create a user and give the <b>AmazonSESFullAccess</b> to that user
-   then create and get <b>Access keys</b> to access that user
-   add the .env file for in the root directory and replace the followng valus

    -   SES_EMAIL_ADDRESS = address used by the SES to send the emails
    -   SES_ACCESS_KEY_ID = access key id of the IAM client that has AmazonSESFullAccess
    -   SES_SECRET_ACCESS_KEY = secreat access key of the IAM client that has AmazonSESFullAccess
    -   SES_REGION = region of the service

```
SES_EMAIL_ADDRESS=promentororg@gmail.com
SES_ACCESS_KEY_ID=****************
SES_SECRET_ACCESS_KEY=*************************
SES_REGION=us-east-1
```
