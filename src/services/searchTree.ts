export const searchTree = (record: any, matchingTitle: string | number, property: string) => {
    if (record[property] == matchingTitle) {
        return record;
    } else if (record["children"] != null) {
        let result = null;
        for (let i = 0; result == null && i < record["children"].length; i++) {
            result = searchTree(record["children"][i], matchingTitle, property);
        }
        return result;
    }
    return null;
};
