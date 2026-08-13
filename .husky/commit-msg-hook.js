const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const timelogPath = path.join(__dirname, '../timelog.md');
const commitMessageFile = process.argv[2];

// Read commit message
const commitMessage = fs.readFileSync(commitMessageFile, 'utf-8').trim();

// Get commit details
const now = new Date();
const timestamp = now.toISOString();

// Get staged files
let stagedFiles = '';
try {
  stagedFiles = execSync('git diff --cached --name-only', { encoding: 'utf-8' }).trim();
} catch (e) {
  stagedFiles = 'No files';
}

const filesFormatted = stagedFiles.replace(/\n/g, ', ') || 'No files';

// Create table row
const tableRow = `| ${timestamp} | ${filesFormatted} | ${commitMessage} |`;

// Initialize or update timelog.md
if (!fs.existsSync(timelogPath)) {
  const header = '# Time Log\n\n| Timestamp | Files Changed | Message |\n|-----------|---------------|----------|\n';
  fs.writeFileSync(timelogPath, header + tableRow + '\n');
} else {
  fs.appendFileSync(timelogPath, tableRow + '\n');
}

console.log('✓ Timelog updated');