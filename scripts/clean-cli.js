import shell from 'shelljs';
import { getStructure } from '../structure.js';

async function clean() {
  const { dest } = await getStructure();
  if (existsSync(dest)) {
    shell.rm('-rf', dest);
  }
}

clean()
