import React from "react";
import LeetCodeCalendar from 'leetcode-calendar';
import { Row } from "react-bootstrap";

function Github() {
  const exampleTheme = {
    light: [
      'rgb(235, 235, 235)',
      'rgba(192, 132, 245, 0.44)',
      'rgba(192, 132, 245, 0.6)',
      'rgba(192, 132, 245, 0.76)',
      'rgba(192, 132, 245, 0.92)',
    ],
    dark: [
      'rgb(235, 235, 235)',
      'rgba(192, 132, 245, 0.44)',
      'rgba(192, 132, 245, 0.6)',
      'rgba(192, 132, 245, 0.76)',
      'rgba(192, 132, 245, 0.92)',
    ],
  }
  return (
    (
      <div>
        <LeetCodeCalendar
          username='nikhil846' // Replace with your LeetCode username
          blockSize={15} // Optional: Size of each block in pixels (default: 15)
          blockMargin={5} // Optional: Margin between blocks in pixels (default: 5)
          fontSize={16} // Optional: Font size of the text within blocks (default: 16)
          theme={exampleTheme} // Optional: A custom theme object to style the calendar
          style={{ maxWidth: '1100px', margin:'120px'}} // Optional: Inline styles for the calendar container
        />
      </div>
    )
  );
}

export default Github;
