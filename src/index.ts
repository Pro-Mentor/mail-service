// import {SES} from 'aws-sdk';
import dotenv from "dotenv";


dotenv.config();

if (!process.env.SES_REGION) {
    throw new Error("SES_REGION is not defined");
}

if (!process.env.SES_ACCESS_KEY_ID) {
    throw new Error("SES_ACCESS_KEY_ID is not defined");
}

if (!process.env.SES_SECRET_ACCESS_KEY) {
    throw new Error("SES_SECRET_ACCESS_KEY is not defined");
}

if (!process.env.SES_EMAIL_ADDRESS) {
    throw new Error("SES_EMAIL is not defined");
}