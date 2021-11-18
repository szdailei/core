import init from './init.js';
import startServer from '../http/start-server.js';
import { sendResponse } from '../http/response.js';
import match from './route/match.js';
import routers from './route/routers.js';

async function resolveUrl(req, res, { method, url }, options) {
  const { func } = match(url, routers);
  if (func) {
    func(req, res, { method, url }, options);
    return;
  }

  const message = `Not found handler of ${url}, method: ${method}`
  const result = {
    errors: [
      {
        message,
        locations: [{ line: 1, column: 1 }],
      },
    ],
  };
  const resData = JSON.stringify(result);
  sendResponse(res, 200, resData);
}

function apiServer(port, { storageRoot, loggerFileSuffix }) {
  init({ storageRoot, loggerFileSuffix });

  const server = startServer(port, { storageRoot, loggerFileSuffix }, resolveUrl);
  return server;
}

export default apiServer;
