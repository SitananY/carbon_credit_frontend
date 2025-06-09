## carbon_credit_frontend


To get started, first clone the repository:

```bash
git clone https://github.com/SitananY/carbon_credit_frontend.git

cd carbon_credit_frontend

```

Then install dependencies:

```bash
npm install
```

Next, create a .env.local file in the root directory of the project. Your folder structure should look like this:
```bash
carbon_credit_frontend/
├── .env.local    
├── public/
├── src/
└── ...
```
Inside .env.local, add this line (you can use any test value for local development):
```bash
NEXTAUTH_SECRET =your_secret_here 
```
Finally, run the development server:

```bash
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
