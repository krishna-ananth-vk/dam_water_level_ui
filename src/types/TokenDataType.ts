
export interface TokenDataType {
    access_token: string,
    expires_in: number,
    created_at: number,
    refresh_expires_in: string,
    token_type: string,
    id_token: string,
    // "not-before-policy": string,
    scope: string,
}
