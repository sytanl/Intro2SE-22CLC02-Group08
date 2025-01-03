import React from 'react';

const BellWithDot = ({ hasUnread }) => {
  return (
    <div style={{ position: 'relative', display: 'inline-block', cursor: 'pointer' }}>
      {/* Bell Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        width="24"
        height="24"
        fill="currentColor"
      >
        <path d="M224 0c-17.7 0-32 14.3-32 32v19.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416h384c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32z" />
      </svg>
      {/* Dot Icon */}
      {hasUnread && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="10"
          height="10"
          fill="red"
          style={{
            position: 'absolute',
            top: '0',
            right: '0',
            transform: 'translate(50%, -50%)',
          }}
        >
          <circle cx="256" cy="256" r="256" />
        </svg>
      )}
    </div>
  );
};

export default BellWithDot;
