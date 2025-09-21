import React, { useEffect, useState } from 'react';
import HWPCardComponent from './HWPCardComponent';
import HelloWorldPageTitleComponent from './HelloWorldPageTitleComponent';

export default function HelloWorldPage() {
  const [civilWarInfoArray, setCivilWarInfoArray] = useState([]);
  const url =
    'https://services.arcgis.com/qEmpZrqTBf5yoq5n/arcgis/rest/services/Civil_War_Battles/FeatureServer/3/query?where=1%3D1&outFields=*&outSR=4326&f=json';
  useEffect(() => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Resopnse ISSUE: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setCivilWarInfoArray(data.features);
      })
      .catch(error => {
        throw error;
      });
  });

  const renderInfo = cwia => {
    return cwia.length === 0 ? (
      <p>no data collected</p>
    ) : (
      <p>
        there are <b>{cwia.length}</b> entries
      </p>
    );
  };

  const displeyInformation = cwia => {
    return cwia.map(element => (
      <div key={element.attributes.OBJECTID}>
        <HWPCardComponent element={element} />
      </div>
    ));
  };

  return (
    <main>
      <div style={{ paddingLeft: '20px' }}>
        <HelloWorldPageTitleComponent />
        <div style={{ paddingRight: '20px' }}>
          <hr />
        </div>
        {renderInfo(civilWarInfoArray)}
      </div>
      <div className="battle-grid">{displeyInformation(civilWarInfoArray)}</div>
    </main>
  );
}
