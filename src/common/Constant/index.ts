import { IError, IValidateMessage } from "./../Interface";

export const dateFormat = "DD/MM/YYYY";

//---------------//
//===== Example Errors Code
//--------------//

// export const errorAdminAccountMessages: Array<IError> = [
//     {
//         code: "adminAccountNotFound",
//         message: "Không tìm thấy tài khoản quản trị !",
//     },
// ];

export const errorShopOwnerMessages: Array<IError> = [
    {
        code: "shopOwnersWrongPassword",
        message: "Mật khẩu của chủ shop không đúng !",
    },
    {
        code: "shopOwnersPhoneOrIdentityExisted",
        message: "Số điện thoại hoặc chứng minh nhân đã tồn tại !",
    },
    {
        code: "shopOwnersAccountUserNameExisted",
        message: "Tên tài khoản đã tồn tại !",
    },
    {
        code: "shopOwnersUsernameNotFound",
        message: "Tên tài khoản không tồn tại !",
    },
    {
        code: "invalid",
        message: "Phí mặc định không hợp lệ !",
    },
];

//===//==============================//===//
// ${label} or ${name} - Get the name or label of current input
// When you custom label of FormItem, the value of label will be 'undefined'
// so you must add message property to the rule
//===//==============================//===//
//=== Descriptions about Antd ValidateMessages ===//
//=== Link: https://github.com/react-component/field-form/blob/master/src/utils/messages.ts

export const validateMessages: IValidateMessage = {
    required: "${label} không được bỏ trống!",
    whitespace: "'${label}' không được bỏ trống!",
    string: {
        len: "'${label}' phải có đúng ${len} kí tự!",
        min: "'${label}' phải có tối thiểu ${min} kí tự!",
        max: "'${label}' không thể dài hơn ${max} kí tự!",
        range: "'${label}' phải trong khoản từ ${min} đến ${max} kí tự!",
    },
    date: {
        format: "'${label}' định dạng thời gian không hợp lệ!",
        parse: "'${label}' không thể chuyển sang định dạng ngày!",
        invalid: "'${label}' thời gian không hợp lệ!",
    },
    number: {
        len: "'${label}' phải bằng ${len}!",
        min: "'${label}' không thể nhỏ hơn ${min}!",
        max: "'${label}' khổng thể lớn hơn ${max}!",
        range: "'${label}' phải ở khoản từ ${min} đến ${max}!",
    },
    array: {
        len: "'${name}' phải có đúng ${len} về độ dài của mảng!",
        min: "'${name}' không được bé hơn ${min} về độ dài của mảng!",
        max: "'${name}' không được lớn hơn ${max} về độ dài của mảng!",
        range:
            "'${name}' phải trong khoản từ ${min} đến ${max} về độ dài của mảng!",
    },
};
