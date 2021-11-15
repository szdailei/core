import fs from 'fs';
import { join, dirname } from 'path';
import TOMLParser from '@iarna/toml/parse-string.js';
import {getWorkingDir} from '../src/utils/index.js'

function getWorkingDir() {
  return process.cwd();
}

async function getRootDir() {
  const root = getWorkingDir();
  return root;
}

async function getRelativeStructure() {
  const root = await getRootDir();
  const structureFile = join(root, 'scripts/structure.toml');
  const data = await fs.promises.readFile(structureFile, 'utf8');
  const structure = TOMLParser(data);
  structure.root = root;
  return structure;
}

function getAbsoluteStructureByStruc(struc) {
  const { root } = struc;

  const dest = join(root, struc.dest);
  const destOfWeb = join(root, struc.destOfWeb);

  const src = join(root, struc.src);
  const srcOfServer = join(root, struc.srcOfServer);
  const srcOfClient = join(root, struc.srcOfClient);
  const srcOfDebug = join(root, struc.srcOfDebug);
  const srcOfHtml = join(root, struc.srcOfHtml);

    const test = join(root, struc.test);

  return {
    root,
    dest,
    src,
    destOfWeb,
    srcOfServer,
    srcOfClient,
    srcOfDebug,
    srcOfHtml,
    test,
  };
}

async function getStructure() {
  const struc = await getRelativeStructure();
  return getAbsoluteStructureByStruc(struc);
}

export { getTheScriptDir, getWorkingDir, getRootDir, getStructure };
