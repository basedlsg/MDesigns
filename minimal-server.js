import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

// Serve static files from dist/public
app.use(express.static(path.join(__dirname, 'dist/public')));

// Serve the built React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/public/index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 KME WORLD website running at http://localhost:${PORT}`);
  console.log('✅ Updated website structure:');
  console.log('   • Navigation: Seen On → Collaborations → Information → Shop');
  console.log('   • Homepage: Press coverage & magazine features');
  console.log('   • Information: Tabbed (About, Contact, Services)');
  console.log('   • Collaborations: MISHKA and TOMBOGO projects');
});