import storage from './storage/storage.js';
import logger from './resolvers/logger.js';

function init({ storageRoot, loggerFileSuffix }) {
  storage.setStorageRoot(storageRoot);
  logger.setLoggerFileSuffix(loggerFileSuffix);
}

export default init;
