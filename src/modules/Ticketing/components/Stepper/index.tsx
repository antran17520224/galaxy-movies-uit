import Button from "@material-ui/core/Button";
import Step from "@material-ui/core/Step";
import StepConnector from "@material-ui/core/StepConnector";
import { StepIconProps } from "@material-ui/core/StepIcon";
import StepLabel from "@material-ui/core/StepLabel";
import Stepper from "@material-ui/core/Stepper";
import {
    createStyles,
    makeStyles,
    Theme,
    withStyles
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import EventSeatIcon from "@material-ui/icons/EventSeat";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import PaymentIcon from "@material-ui/icons/Payment";
import clsx from "clsx";
import React from "react";
import { Seats } from "../Seats";
import "./Stepper.scss";

const ColorlibConnector = withStyles({
    alternativeLabel: {
        top: 22
    },
    active: {
        "& $line": {
            backgroundImage:
                "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
            boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)"
        }
    },
    completed: {
        "& $line": {
            backgroundImage:
                "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)"
        }
    },
    line: {
        height: 3,
        border: 0,
        backgroundColor: "#eaeaf0",
        borderRadius: 1
    }
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
    root: {
        backgroundColor: "#ccc",
        zIndex: 1,
        color: "#fff",
        width: 50,
        height: 50,
        display: "flex",
        borderRadius: "50%",
        justifyContent: "center",
        alignItems: "center"
    },
    active: {
        backgroundImage:
            "linear-gradient(270deg, rgba(9,41,121,1) 19%, rgba(0,212,255,1) 100%);",
        boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)"
    },
    completed: {
        backgroundImage:
            "linear-gradient(270deg, rgba(9,41,121,1) 19%, rgba(0,212,255,1) 100%);"
    }
});

function ColorlibStepIcon(props: StepIconProps) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;

    const icons: { [index: string]: React.ReactElement } = {
        1: <EventSeatIcon />,
        2: <FastfoodIcon />,
        3: <PaymentIcon />,
        4: <DoneAllIcon />
    };

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
                [classes.completed]: completed
            })}
        >
            {icons[String(props.icon)]}
        </div>
    );
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: "100%"
        },
        button: {
            marginRight: theme.spacing(1)
        },
        instructions: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1)
        },
        stepperRoot: {
            backgroundColor: "transparent",
            padding: 0
        },
        stepLabel: {
            color: "#bdbdbd",
            fontSize: "15px"
        },
        stepLabelRoot: {
            "& .MuiStepLabel-label.MuiStepLabel-active": {
                color: "#fff"
            },
            "& .MuiStepLabel-label.MuiStepLabel-completed": {
                color: "#fff"
            }
        }
    })
);

function getSteps() {
    return ["Chọn ghế", "Chọn đồ ăn", "Thanh toán", "Đặt vé thành công"];
}

function getStepContent(step: number) {
    switch (step) {
        case 0:
            return <Seats />;
        case 1:
            return "What is an ad group anyways?";
        case 2:
            return "This is the bit I really care about!";
        default:
            return "Unknown step";
    }
}
interface IProps {}
export const CustomizedSteppers: React.FC<IProps> = props => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className={classes.root}>
            <Stepper
                alternativeLabel
                activeStep={activeStep}
                connector={<ColorlibConnector />}
                classes={{
                    root: classes.stepperRoot
                }}
            >
                {steps.map(label => (
                    <Step key={label}>
                        <StepLabel
                            StepIconComponent={ColorlibStepIcon}
                            classes={{
                                label: classes.stepLabel,
                                root: classes.stepLabelRoot
                            }}
                        >
                            {label}
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
            <>
                {activeStep === steps.length ? (
                    // lúc đặt thành công
                    <>
                        <Button
                            onClick={handleReset}
                            className={classes.button}
                        >
                            Reset
                        </Button>
                    </>
                ) : (
                    <div className="wrapper-step-content">
                        {getStepContent(activeStep)}
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleNext}
                            className={classes.button}
                        >
                            {activeStep === steps.length - 1
                                ? "Hoàn thành"
                                : "Kế tiếp"}
                        </Button>
                    </div>
                )}
            </>
        </div>
    );
};
