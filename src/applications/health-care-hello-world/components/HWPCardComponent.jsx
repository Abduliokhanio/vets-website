import React from 'react';

export default function HWPCardComponent({ element }) {
  return (
    <va-card class="record-list-item vads-u-margin-bottom--2p5">
      <p>ID: {element.attributes.OBJECTID}</p>
      <p>BATTLE NAME: {element.attributes.Battle}</p>
      <p>CAMPAIGN NAME: {element.attributes.Campaign}</p>
      <p>OTHER NAME: {element.attributes.OtherName}</p>
      <p>
        Confederate Commander - {element.attributes.CSACom} vs States Commander
        - {element.attributes.USACom}
      </p>
      <p>Victor: {element.attributes.Victor}</p>
    </va-card>
  );
}
