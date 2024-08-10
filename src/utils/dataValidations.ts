export const isObjectNotEmpty = <T>(
    anObject: unknown,
): anObject is T => (
    anObject && typeof anObject === 'object' && Object.keys(anObject).length > 0
) as boolean;


export const isValidJsonString = (str: string) => {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
};