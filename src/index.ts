// import {SES} from 'aws-sdk';
import dotenv from "dotenv";
// import runSESEmailTemplateGenerator from './aws/email-templates/email-template-generator';
// import TemplateTypes from "./aws/email-templates/template-types";


dotenv.config();

// for the ses service

// if (!process.env.SES_REGION) {
//     throw new Error("SES_REGION is not defined");
// }

// if (!process.env.SES_ACCESS_KEY_ID) {
//     throw new Error("SES_ACCESS_KEY_ID is not defined");
// }

// if (!process.env.SES_SECRET_ACCESS_KEY) {
//     throw new Error("SES_SECRET_ACCESS_KEY is not defined");
// }

// if (!process.env.SES_EMAIL_ADDRESS) {
//     throw new Error("SES_EMAIL is not defined");
// }


// for the nodemailer

if (!process.env.NODEMAILER_EMAIL) {
    throw new Error("NODEMAILER_EMAIL is not defined");
}

if (!process.env.NODEMAILER_PASSWORD) {
    throw new Error("NODEMAILER_PASSWORD is not defined");
}