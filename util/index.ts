/* Form Validator


const initialFields: InitialFields = {
	coverPhoto: { name: '', size: '', url: '' },
	images: [],
	...addProductForm
}

type TempObj = {
	[key: string]: string
}
export type MyImage = {
	name: string,
	size: string,
	url: string
}
export type FieldsProps = {
	coverPhoto: MyImage,
	images: MyImage[]
}

const isFormValidate = (fields: InitialFields, setFieldsError: React.Dispatch<React.SetStateAction<TempObj>>): boolean => {
	const tempObj: TempObj = {}

	Object.entries(fields).forEach(([key, value]) => {
		if(Array.isArray(value) && !value.length) return tempObj.images = `${key} field is empty`
		if(typeof value === 'string' && !value.trim()) return tempObj[key] = `${key} field is empty`
		if(value && !(value as MyImage).url ) return tempObj.coverPhoto = `${key} field is empty`
	})

	setFieldsError(tempObj)
	return Object.values(tempObj).every( field => !field)
}

*/ 




// used in carts: projectName + carts
export const addToLocal = (name: string) => {
	const NEXT_PUBLIC_PROJECT_NAME: string = process.env.NEXT_PUBLIC_PROJECT_NAME || ''

	return `${NEXT_PUBLIC_PROJECT_NAME}-${name}`
}


export const shorter = (content: string, length = 30): string => {
	if(content.length <= length) return content

	return content.substring(0, length) + '...'
}


// File Size
export const humanReadableFileSize = (bytes: number, si=true, dp=1) => {
  const thresh = si ? 1000 : 1024;

  if (Math.abs(bytes) < thresh) {
    return bytes + ' B';
  }

  const units = si
    ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
  let u = -1;
  const r = 10**dp;

  do {
    bytes /= thresh;
    ++u;
  } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);


  return bytes.toFixed(dp) + ' ' + units[u];
}
// console.log(humanReadableFileSize(1551859712))  // 1.4 GiB

