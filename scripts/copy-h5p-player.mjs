// Copies the h5p-standalone player (version pinned in package.json) into
// public/h5p-player so pages can load it same-origin. Runs before dev/build.
import { cpSync, rmSync } from 'node:fs';

const src = 'node_modules/h5p-standalone/dist';
const dest = 'public/h5p-player';
rmSync(dest, { recursive: true, force: true });
cpSync(src, dest, { recursive: true });
