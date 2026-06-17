import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { setTimeout as delay } from 'node:timers/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, '..');
const nginxHome = 'E:/Program Files/Nginx';
const nginxExe = join(nginxHome, 'nginx.exe');
const deployDir = join(nginxHome, 'html/resume');
const distDir = join(projectRoot, 'dist');
const siteUrl = 'http://localhost:8088';
const isWin = process.platform === 'win32';

function run(command, args, options = {}) {
  let result;

  if (isWin) {
    const quotedArgs = args.map((arg) => (/\s/.test(arg) ? `"${arg}"` : arg)).join(' ');
    const cmd = `"${command}" ${quotedArgs}`.trim();
    result = spawnSync(cmd, {
      cwd: options.cwd ?? projectRoot,
      stdio: 'inherit',
      shell: true,
      ...options,
    });
  } else {
    result = spawnSync(command, args, {
      cwd: options.cwd ?? projectRoot,
      stdio: 'inherit',
      shell: false,
      ...options,
    });
  }

  if (result.status !== 0) {
    throw new Error(`Command failed: ${command} ${args.join(' ')}`);
  }
}

function step(message) {
  console.log(`\n==> ${message}`);
}

console.log('========================================');
console.log('  Resume site - deploy to Nginx');
console.log('========================================');

step('[1/4] Build frontend');
const viteBin = join(projectRoot, 'node_modules', 'vite', 'bin', 'vite.js');
run(process.execPath, [viteBin, 'build']);

step('[2/4] Copy static files to Nginx');
if (!existsSync(deployDir)) {
  mkdirSync(deployDir, { recursive: true });
}

if (isWin) {
  const copyCmd = `robocopy "${distDir}" "${deployDir}" /E /NFL /NDL /NJH /NJS /NC /NS`;
  const copy = spawnSync(copyCmd, { stdio: 'inherit', shell: true });
  if (copy.status > 7) {
    throw new Error('Failed to copy static files with robocopy.');
  }
} else {
  run('cp', ['-R', `${distDir}/.`, deployDir]);
}

console.log(`Deployed to: ${deployDir}`);

step('[3/4] Validate and start Nginx');
if (!existsSync(nginxExe)) {
  throw new Error(`Nginx not found: ${nginxExe}`);
}
run(nginxExe, ['-t', '-p', nginxHome]);

const reloadCmd = `"${nginxExe}" -s reload -p "${nginxHome}"`;
const reload = spawnSync(reloadCmd, { stdio: 'pipe', shell: true });

if (reload.status !== 0) {
  spawnSync('taskkill /F /IM nginx.exe', { stdio: 'ignore', shell: true });
  await delay(1000);
  const start = spawnSync(`"${nginxExe}" -p "${nginxHome}"`, { stdio: 'ignore', shell: true });
  if (start.status !== 0) {
    throw new Error('Failed to start Nginx.');
  }
  console.log('Nginx started.');
} else {
  console.log('Nginx reloaded.');
}

await delay(1000);

step('[4/4] Verify site');
const check = await fetch(siteUrl);
if (!check.ok) {
  throw new Error(`Site check failed with status ${check.status}`);
}

console.log('\nDeploy success!');
console.log(`Open: ${siteUrl}`);
