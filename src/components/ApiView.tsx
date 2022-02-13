import React, { useState, useEffect } from 'react';

async function request(api: any, setData: Function) {
  const responseStream = await fetch(api.url);
  const response = await responseStream.json();
  setData(response);
}

const ApiView = ({ api, template }: any) => {
  console.log('ApiView :: api :>> ', api);
  console.log('ApiView :: template :>> ', template);

  const [data, setData] = useState();

  useEffect(() => {
    request(api, setData);

    // async function fetchMyAPI() {
    //   let response = await fetch('api/data');
    //   response = await response.json();
    //   dataSet(response);
    // }

    // fetchMyAPI();
  }, []);

  console.log('ApiView Data  :>> ', data);

  return <div>Api View </div>;
};

export default ApiView;
