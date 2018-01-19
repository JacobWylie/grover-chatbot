import productDetails from './productDetails';

export default function populateCategories() {
	let arr = Object.keys(productDetails);
	let catArr = [];
	function Category(value, label, trigger) {
		this.value = value;
		this.label = label;
		this.trigger = trigger;
	}

	arr.forEach(cat => {
		let newCat = new Category(cat, cat, 4)
		catArr.push(newCat);
	})
	return catArr
}
