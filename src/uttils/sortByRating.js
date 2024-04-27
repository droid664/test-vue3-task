export const sortByRating = (arr, direction = 'DESC') => {
	return arr.toSorted((a, b) => {
		if (direction === 'ASC') {
			return a.rating.rate - b.rating.rate
		} else {
			return b.rating.rate - a.rating.rate
		}
	})
}
