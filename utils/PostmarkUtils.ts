import fetch from 'node-fetch';

export const ADMIN_EMAIL_ADDRESS = 'mark@lazytoads.org'

const EMAIL_FROM_ADDRESS = 'mark@lazytoads.org';

const POSTMARK_API_URL = 'https://api.postmarkapp.com';
const POSTMARK_SERVER_API_KEY = process.env.POSTMARK_SERVER_API_KEY;

export enum PostmarkTemplate {
    // Maps to the template ID
    CONTACT_EMAIL_TEMPLATE = 32590590,
    // REQUEST_NEW_FILE_EMAIL_TEMPLATE = 32577643,
    RESET_PASSWORD_EMAIL_TEMPLATE = 32576737,
}

export type PostmarkTemplateModel = {
    [PostmarkTemplate.CONTACT_EMAIL_TEMPLATE]: {
        firstName: string;
        lastName: string;
        email: string;
        subject: string;
        message: string;
    };
    [PostmarkTemplate.RESET_PASSWORD_EMAIL_TEMPLATE]: {
        name: string;
        actionUrl: string;
    };
    // [PostmarkTemplate.REQUEST_NEW_FILE_EMAIL_TEMPLATE]: {
    //     name: string;
    //     actionUrl: string;
    // };
};

export const sendEmailWithTemplate = async <T extends keyof PostmarkTemplateModel>(
    to: string,
    templateId: T,
    templateModel: PostmarkTemplateModel[T]
) => {
    if (!POSTMARK_SERVER_API_KEY) throw new Error('POSTMARK_SERVER_API_KEY is not defined');

    const requestUrl = `${POSTMARK_API_URL}/email/withTemplate`;

    const response = await fetch(requestUrl, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'X-Postmark-Server-Token': POSTMARK_SERVER_API_KEY,
        },
        body: JSON.stringify({
            From: EMAIL_FROM_ADDRESS,
            To: to,
            TemplateId: templateId,
            TemplateModel: templateModel,
        }),
    });

    return response;
};
