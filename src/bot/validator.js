const validWords = ['apple', 'samsung', 'parrot', 'htc', 'oculus', 'microsoft', 'lenovo', 'suunto',
					'polar', 'asus', 'amazon', 'tchibo', 'iphone 7 128gb', 'iphone 7 32gb', 'iphone 7 plus',
					'galaxy s8', 'galaxy s8 plus', 'bebop', 'bebop 2', 'vive', 'rift vr', 'macbook 12',
					'macbook air 11', 'macbook air 13', 'macbook pro 13', 'surface book', 'yoga 300',
					'apple watch 38mm', 'apple watch 42mm', 'suunto ambit 3', 'polar v800', 'asus watch',
					'alexa dot', 'alexa echo', 'qbo milk master', 'samsung powerbot'];

export default function validator(value) {
	value = value.toLowerCase();
	if (!validWords.includes(value)) {
		return 'Sorry that is not a valid entry!'
	}
	return true;
}
