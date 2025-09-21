import React from 'react';

export default function GeneralsVsComponent({ element }) {
  return (
    <va-card background>
      <p>
        <b>Confederate Commander</b> - {element.attributes.CSACom}
      </p>
      <div style={{ textAlign: 'center' }}>
        <b>vs</b>
      </div>
      <p>
        <b>States Commander</b> - {element.attributes.USACom}
      </p>
    </va-card>
  );
}
