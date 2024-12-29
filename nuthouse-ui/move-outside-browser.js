const fs = require('fs-extra');
const path = require('path');

// Define directories
const distDir = path.join(__dirname, 'dist/nuthouse-ui');
const browserDir = path.join(distDir, 'browser');

// Move everything from 'browser' to the root of 'dist/nuthouse-ui'
function moveFiles() {
  try {
    const files = fs.readdirSync(browserDir); // Correct function name: readdirSync
    files.forEach((file) => {
      const src = path.join(browserDir, file); // Source path
      const dest = path.join(distDir, file); // Destination path

      fs.moveSync(src, dest, { overwrite: true }); // Move file or folder
      console.log(`Moved ${file} to root.`);
    });

    // Remove the now-empty 'browser' directory
    fs.removeSync(browserDir);
    console.log('Cleaned up browser directory.');
  } catch (err) {
    console.error('Error during file move:', err);
  }
}

// Execute the move
moveFiles();
