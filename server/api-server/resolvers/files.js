import storage from '../storage/storage.js';

async function getRoot() {
  const root = await storage.getStorageRoot();
  return root;
}

async function getFileList(dir) {
  const fileList = await storage.getFileList(dir);
  return fileList;
}

async function getFile(file) {
  const content = await storage.getFile(file);
  return content;
}

export { getRoot, getFileList, getFile };
