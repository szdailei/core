import { getRoot, getFileList, getFile } from './files.js';
import logger from './logger.js';

const resolvers = [getRoot, getFileList, getFile, logger];

export default resolvers;
