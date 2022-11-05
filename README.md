## Getting Started
	. Next.js
	. TypeScript
	. GraphQL API


### Key Features
	. Seeder Script: Import and delete data from database
	. Dynamic form with proper types
	. GraphQL (Server + Client) instead of **REST API**
	. Material-UI: For front-end Designing


First, run the development server:

```bash
$ yarn dev
```

### Seeder Script
Learn about seeder by `/data/server/seeder.ts`

#### Seeder Commands
```
$ yarn seeder 				=> Read all 3 collections (users, products, reviews)
$ yarn seeder --users 			=>   " 	Only 	users 	collection
$ yarn seeder --products 		=>   " 	 "  	products   "
$ yarn seeder --reviews 		=>   " 	 "  	reviews    "

$ yarn seeder --import         		=> Import All 3 	collections	
$ yarn seeder --import users 		=>   " 	   " 	users  	  "
$ yarn seeder --import products 	=>   " 	   " 	products  "
$ yarn seeder --import reviews 		=>   " 	   " 	reviews   "
```


#### Seeder Script in `package.json`
```
"scripts": {
"dev": "next dev",
"build": "next build",
"start": "next start",
"lint": "next lint",

	"seeder" 		: "nodemon data/server/seeder.ts",
	"seeder-users" 		: "nodemon data/server/seeder.ts --users",
	"seeder-products" 	: "nodemon data/server/seeder.ts --products",
	"seeder-reviews" 	: "nodemon data/server/seeder.ts --reviews",

	"seeder-import" 	: "nodemon data/server/seeder.ts --import",
	"seeder-import-users" 	: "nodemon data/server/seeder.ts --import users",
	"seeder-import-products": "nodemon data/server/seeder.ts --import products",
	"seeder-import-reviews" : "nodemon data/server/seeder.ts --import reviews"
},
```