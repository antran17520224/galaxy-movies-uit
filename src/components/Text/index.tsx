import * as React from "react";


export const TextBold = ({ text }: { text: string | number}) => (
    <div
        style={{
            color: "#333",
            fontSize: "1rem",
            fontWeight: 600,
        }}
    >
        {text}
    </div>
);