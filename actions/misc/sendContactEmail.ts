"use server";

import { ADMIN_EMAIL_ADDRESS, PostmarkTemplate, sendEmailWithTemplate } from "utils/PostmarkUtils";

export const sendContactEmail = async (firstName: string, lastName: string, email: string, subject: string, message: string) => {
    try {
        await sendEmailWithTemplate(ADMIN_EMAIL_ADDRESS, PostmarkTemplate.CONTACT_EMAIL_TEMPLATE, {
            firstName,
            lastName,
            email,
            subject,
            message
        })
        return "Successfully sent email. We will get back to you as soon as possible."
    } catch(err) {
        console.log(err)
        return "Failed to send email. Please try again later."
    }
}