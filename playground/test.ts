export type User = {
	name: string
	email: string
}
const fields: User = {
	name: '',
	email: ''
} 
fields.email
fields.name


type MyExclude<T, U> = T extends U ? never : T
