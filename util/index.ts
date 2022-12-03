
// used in carts: projectName + carts
export const addToLocal = (name: string) => {
	const NEXT_PUBLIC_PROJECT_NAME: string = process.env.NEXT_PUBLIC_PROJECT_NAME || ''

	return `${NEXT_PUBLIC_PROJECT_NAME}-${name}`
}


export const shorter = (content: string, length = 30): string => {
	if(content.length <= length) return content

	return content.substring(0, length) + '...'
}