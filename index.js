if (process.argv.length < 3) {
    console.log('Script parameter required. Look under ./scripts for the options. For example: node index.js simple');
    process.exit(1);
}

const script = process.argv[2];
import(`./scripts/${script}.js`);
