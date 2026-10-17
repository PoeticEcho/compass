const fs=require('node:fs');fs.writeFileSync('assets/styles.css',fs.readFileSync('assets/tailwind.css','utf8')+'\n'+fs.readFileSync('assets/custom.css','utf8'));
