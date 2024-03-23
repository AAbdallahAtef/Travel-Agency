import React from 'react';

const HorizontalLineWithText = ({ text }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ flex: 1, borderBottom: '1px solid #D2D2D2' }}></div>
      <span style={{ padding: '0 10px' }}>{text}</span>
      <div style={{ flex: 1, borderBottom: '1px solid #D2D2D2' }}></div>
    </div>
  );
};
export default HorizontalLineWithText;