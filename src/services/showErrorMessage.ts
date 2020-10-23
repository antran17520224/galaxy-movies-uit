import { message } from "antd";

export const showErrorMessage = (messagesList, code) => {
    let curErrors = messagesList.filter((item) => item.code === code);
    if (curErrors.length < 1) {
        message.error("Dữ liệu không hợp lệ", 2);
    } else {
        message.error(curErrors[0].message, 2);
    }
};
