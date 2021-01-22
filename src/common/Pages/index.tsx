import * as React from "react"
import { Result, Button } from "antd";

export const NotAcceptPage = () => (
    <div
        style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}
    >
        <Result
            status="403"
            title="Bạn không quyền truy cập trang này"
            extra={
                <Button
                    type="primary"
                    danger
                    key="console"
                    onClick={() => {
                        localStorage.clear();
                        window.location.reload();
                    }}
                >
                    Đăng xuất
                </Button>
            }
        />
    </div>
);
