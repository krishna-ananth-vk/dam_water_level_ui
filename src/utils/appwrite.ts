import { Client, Account, Functions } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(process.env.PROJECT_ID||'');

export const functions = new Functions(client);

export const account = new Account(client);
export { ID } from 'appwrite';


export const getBearerTokenFunctionId = process.env.GET_BEARER_TOKEN_FUNCTION_ID || '';

export const OLA_MAPS_API_KEY = process.env.OLA_MAPS_API_KEY || '';

