import { Client, Account, Functions } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(process.env.PROJECT_ID||'dam-water-level');

export const functions = new Functions(client);

export const account = new Account(client);
export { ID } from 'appwrite';


export const getBearerTokenFunctionId =  '66b4662e001492a5d503';

export const OLA_MAPS_API_KEY = process.env.OLA_MAPS_API_KEY;

