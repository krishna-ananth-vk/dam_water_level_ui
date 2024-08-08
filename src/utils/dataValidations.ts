export const isObjectValidAndNotEmpty = <T>(
    anObject: unknown,
): anObject is T => (
    anObject && typeof anObject === 'object' && Object.keys(anObject).length > 0
) as boolean;


export const isJsonString = (str: string) => {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
};