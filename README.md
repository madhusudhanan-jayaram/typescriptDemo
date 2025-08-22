📝 Running TypeScript Files
Option 1: Compile then Run
tsc example.ts        # compiles to example.js
node example.js       # run with Node.js

Option 2: Compile All Files (if tsconfig.json is present)
tsc                   # compiles all .ts files
node dist/example.js  # run from output folder (if "outDir": "dist")

Option 3: Run Directly with ts-node

Install:

npm install -g ts-node
Run:

ts-node example.ts

📂 Project Structure (example)
typescript_exercise/
│
├── enums/
│   ├── example-enum.ts
│   └── another-example.ts
│
├── strong-typing/
│   └── example2.ts
│
├── dist/             # compiled JavaScript output (ignored in Git)
│
├── package.json
├── tsconfig.json
├── README.md
└── .gitignore
