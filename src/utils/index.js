/*
@require  none
@ensure
1. return dir of this script if ESModule format. 
    Note, you should copy the code into the first running script if you didn't use pack tool.
    Because theScriptDir is same dir as the first running script only for packed all scripts into one.
2. return dir of the first running script if CJSModule format.
3. return dir of the running exe if exe format packed by pkg.
*/
function getTheScriptDir() {
  const isESModule = typeof __dirname === 'undefined';

  let theScriptDir;
  if (isESModule) {
    theScriptDir = new URL('.', import.meta.url).pathname;
  } else {
    // __dirname is always '/snapshot' in pkg environment, not real script path.
    theScriptDir = process.pkg ? dirname(process.execPath) : __dirname;
  }
  return theScriptDir;
}

function getWorkingDir() {
  return process.cwd();
}

function makeid() {
  const length = 16;
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function trim(text) {
  if (text) {
    return text.trim();
  }
  return text;
}



export { getTheScriptDir, getWorkingDir, makeid, trim };
