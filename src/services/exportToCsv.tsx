import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
const fileExtension = ".xlsx";

export const exportToCSV = (csvData, fileName: string) => {
    const ws = XLSX.utils.json_to_sheet(csvData);
    ws.A1.v = "Họ và tên";
    ws.B1.v = "Điện thoại";
    ws.C1.v = "Giới tính";
    ws.D1.v = "Email";
    ws.E1.v = "Ngày sinh";
    ws.F1.v = "Số CMND";
    ws.G1.v = "Ngày cấp";
    ws.H1.v = "Nơi cấp";
    ws.I1.v = "Thời gian cập nhật KYC";
    ws.J1.v = "Địa chị thường trú";
    ws.K1.v = "Địa chị tạm trú";
    ws.L1.v = "Hình ảnh KYC";
    ws.M1.v = "Lí do từ chối";
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
};
