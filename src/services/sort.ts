export const sortByName = (inputData) => {
    let data = inputData;
    data.sort((a, b) => {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    });
    return data;
};
