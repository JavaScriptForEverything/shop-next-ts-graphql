import { addToLocal } from '@/util/index'
import { useEffect, useState } from 'react'
import { ProductDocument } from '../types'




type Returns = [ 
	carts: ProductDocument[], 
	addToCart: (product: ProductDocument) => void
]

const useAddToCart = (): Returns => {
	const [ carts, setCarts ] = useState<ProductDocument[]>([])

	// useEffect(() => {
	// 	const oldCarts = localStorage.getItem(addToLocal('carts'))
	// 	if(!oldCarts) return

	// 	const cartsObject =	JSON.parse(oldCarts)
	// 	setCarts(cartsObject)
	// }, [])

	const addToCart = (product: ProductDocument) => {
		setCarts([ ...carts, product ])

		const updatedCarts = JSON.stringify([ ...carts, product ])
		localStorage.setItem(addToLocal('carts'), updatedCarts)
	}

	return [ carts, addToCart ]
}

export default useAddToCart