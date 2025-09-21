import React from 'react';
import GeneralsVsComponent from './GeneralsVsComponent';

export default function HWPCardComponent({ element }) {
  const otherNameChecker = ele => {
    return ele.attributes.OtherName.trim() !== '' ? (
      <p>
        <b>OTHER NAME:</b> {element.attributes.OtherName}
      </p>
    ) : (
      <p>
        <b>OTHER NAME:</b>
        No other name provided
      </p>
    );
  };

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
      {otherNameChecker(element)}
      <GeneralsVsComponent element={element} />
      <p>
        <b>Victor:</b> {element.attributes.Victor}
      </p>
    </va-card>
  );
}
