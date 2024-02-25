import { NextRequest } from "next/server";

// src/app/api/route.ts
export async function POST(request: NextRequest, context: { params }) {
  const md5 = require('md5');
  const password = 'password';
  const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const xAuthToken = md5(`${password}_${timestamp}`);

  console.log(timestamp);

  const res = await fetch('http://api.valantis.store:40000', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Auth-Token': xAuthToken,
    },
    body: JSON.stringify({   
      action: context.params.nameOfMethod,
      params: context.params.optionalParams
    }),
  });

  if (!res.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await res.json();
  return data;
}
