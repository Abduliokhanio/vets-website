import React, { useEffect, useState } from 'react';
import HWPCardComponent from './HWPCardComponent';

export default function HelloWorldPage() {
  const [civilWarInfoArray, setCivilWarInfoArray] = useState([]);
  const url =
    'https://services.arcgis.com/qEmpZrqTBf5yoq5n/arcgis/rest/services/Civil_War_Battles/FeatureServer/3/query?where=1%3D1&outFields=*&outSR=4326&f=json';
  useEffect(
    () => {
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
    },
    [url],
  );

  const renderInfo = cwia => {
    return cwia.length === 0 ? (
      <p>no data collected</p>
    ) : (
      <p>there are {cwia.length} entries</p>
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
      <h1>Pulling information from : https://services.arcgis.com </h1>
      <hr />
      {renderInfo(civilWarInfoArray)}
      {displeyInformation(civilWarInfoArray)}
    </main>
  );
}
