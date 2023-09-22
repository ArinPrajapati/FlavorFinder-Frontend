import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

interface StepProgressBarProps {
  percent: number;
}
const StepProgressBar: React.FC<StepProgressBarProps> = ({ percent }) => {
  return (
    <ProgressBar
      percent={percent}
      filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
    >
      <Step transition="scale">
        {({ accomplished }: { accomplished: boolean }) => (
          <img
            style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
            width="30"
            src="https://www.svgrepo.com/show/384403/accept-check-good-mark-ok-tick.svg"
            alt="Step 1"
          />
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished }: { accomplished: boolean }) => (
          <img
            style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
            width="30"
            src="https://www.svgrepo.com/show/384403/accept-check-good-mark-ok-tick.svg"
            alt="Step 2"
          />
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished }: { accomplished: boolean }) => (
          <img
            style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
            width="30"
            src="https://www.svgrepo.com/show/384403/accept-check-good-mark-ok-tick.svg"
            alt="Step 1"
          />
        )}
      </Step>
    </ProgressBar>
  );
};

export default StepProgressBar;
