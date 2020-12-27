import React, { Component } from "react";
import Box from '@material-ui/core/Box';

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
    className? : string;
}

export const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, className,...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
            className={className}
        >
            {value === index && (
                <Box>
                    {children}
                </Box>
            )}
        </div>
    );
};
