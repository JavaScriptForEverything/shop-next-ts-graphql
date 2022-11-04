export type User = {
	name: string
	email: string
}

// const fields: User = {
// 	name: '',
// 	email: ''
// } 

type DynamicField = {
	[key: string]: string
}

const fields: DynamicField = {
	name: '',
	email: ''
} 
Object.keys(fields).forEach(field => fields[field])


const name: 'name' | 'email' = 'email'
// const name: keyof User = 'email'
// const name: 'email' | 'name' = 'email'
// const name: keyof typeof fields = 'email'
fields[name]

// Object.keys(fields).forEach(field => [fields[field]])
// Object.keys(fields).forEach( (field) => [fields[field as keyof User]])

// method-2: Directly tell that this name is not regular string instead key of the object
// const name: keyof User = 'email'  				// No type Assersion

fields[name]




/*
	Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 
	'{ name: string; email: string; }'.
  No index signature with a parameter of type 'string' was found on type '{ name: string; email: string; }'


	/ ⛔️ Error: Element implicitly has an 'any' type
// because expression of type 'string' can't be used
// to index type '{ name: string; }'.
// No index signature with a parameter of type 'string'
// was found on type '{ name: string; }'.ts(7053)


			TypeScript is telling us that the type string is too broad and 
			not all strings are keys in the object, 
			so we have to make sure the specific string is one of the object's keys.
*/

// Type Assersion method
// Method-1: We have to tell that this name is the key of the type of that object
fields[name as keyof typeof fields] 	// wording with values

// 👇️ type T = "name" | "country"
type T = keyof typeof fields


fields[name as keyof User] 	// wording with values

// 👇️ type T = "name" | "country"
type U = keyof User



/*
We used a type assertion to indicate to TypeScript that the str variable is not of type string, but rather it is a union type containing only the keys of the object.

Now TypeScript lets us access the specific property without throwing the error.
We used keyof typeof to get a union type of the object's keys

*/


Object.keys(fields).forEach(field => {

	// fields[field]
	fields[field as keyof User]
	fields[field as keyof typeof fields]

})