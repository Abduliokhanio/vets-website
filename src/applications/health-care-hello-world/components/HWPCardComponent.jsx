import React from 'react';

export default function HWPCardComponent({ element }) {
  return (
    <va-card
      class="record-list-item vads-u-margin-bottom--2p5"
      style={{ maxWidth: '250px' }}
    >
      <p>
        <b>ID:</b> {element.attributes.OBJECTID}
      </p>
      <p>
        <b>BATTLE NAME:</b> {element.attributes.Battle}
      </p>
      <p>
        <b>CAMPAIGN NAME:</b> {element.attributes.Campaign}
      </p>
      <p>
        <b>OTHER NAME:</b> {element.attributes.OtherName}
      </p>
      <hr />
      <p>
        <b>Confederate Commander</b> - {element.attributes.CSACom}
      </p>
      <p>vs </p>
      <p>
        <b>States Commander</b> - {element.attributes.USACom}
      </p>
      <hr />
      <p>
        <b>Victor:</b> {element.attributes.Victor}
      </p>
    </va-card>
  );
}
