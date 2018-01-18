const productDetails = {
	iphone7128gb: {
		name: "iPhone 7",
		specs: '2GB RAM, 128GB, 4.7", 12MP',
		brand: "Apple Iphone",
		price: "\u20AC44.99/month",
		link: "https://getgrover.com/de-de/products/iphone-7-128-gb-2818",
		img: "https://res-5.cloudinary.com/grover/image/upload/c_limit,h_1000,w_1000,q_auto,f_auto/glyj6cga4f2nsh2nwohk.png"
	},
	iphone732gb: {
		name: "iPhone 7",
		specs: '3GB RAM, 32GB, 5.5 ", 12MP',
		brand: "Apple Iphone",
		price: "\u20AC54.90/month",
		link: "https://getgrover.com/de-de/products/iphone-7-plus-32gb-2865",
		img: "https://res-4.cloudinary.com/grover/image/upload/c_limit,h_1000,w_1000,q_auto,f_auto/ohjiwfm2e189otnkjflw.png"
	},
	iphone7plus: {
		name: "iPhone 7 Plus",
		specs: '3GB RAM, 128GB, 5.5 ", 12MP',
		brand: "Apple Iphone",
		price: "\u20AC79.90/month",
		link: "https://getgrover.com/de-de/products/iphone-7-plus-128-gb-2821",
		img: "https://res-1.cloudinary.com/grover/image/upload/c_limit,h_1000,w_1000,q_auto,f_auto/mdv4vuew2pkcurafyrs7.png"
	},
	galaxys8: {
		name: "Galaxy S8",
		specs: '4GB RAM, 64GB, 5.8 ", 12MP',
		brand: "Samsung",
		price: "\u20AC69.90/month",
		link: "https://getgrover.com/de-de/products/samsung-galaxy-s8-64gb-5830",
		img: "https://res-2.cloudinary.com/grover/image/upload/c_limit,h_1000,w_1000,q_auto,f_auto/r8b89pitr3qmdhqvv0yp.png"
	},
	galaxys8plus: {
		name: "Galaxy S8+",
		specs: '4GB RAM, 64GB, 6.2 ", 12MP',
		brand: "Samsung",
		price: "\u20AC79.90/month",
		link: "https://getgrover.com/de-de/products/samsung-galaxy-s8-plus-64gb-5831",
		img: "https://res-2.cloudinary.com/grover/image/upload/c_limit,h_1000,w_1000,q_auto,f_auto/r8b89pitr3qmdhqvv0yp.png"
	},
	bebop: {
		name: "Parrot Bebop Drone",
		specs: 'WiFi, 14 megapixel "fisheye" camera',
		brand: "Parrot",
		price: "\u20AC99.90/month",
		link: "https://getgrover.com/de-de/products/parrot-bebop-drone-skycontroller-150",
		img: "https://res-1.cloudinary.com/grover/image/upload/c_limit,h_1000,w_1000,q_auto,f_auto/hfsywjfstwluqdhynd0y.png"
	},
	bebop2: {
		name: "Parrot Bebop 2 Drone",
		specs: 'WiFi, 14 megapixel "fisheye" camera',
		brand: "Parrot",
		price: "\u20AC89.90/month",
		link: "https://getgrover.com/de-de/products/parrot-bebop-2-skycontroller-2-1828",
		img: "https://res-3.cloudinary.com/grover/image/upload/c_limit,h_1000,w_1000,q_auto,f_auto/mh2z0oegqsnez2jv4ci9.png"
	},
	vive: {
		name: "Vive",
		specs: '2160 x 1200, 90Hz, Built-in audio',
		brand: "HTC",
		price: "\u20AC79.90/month",
		link: "https://getgrover.com/de-de/products/htc-vive-5143",
		img: "https://res-4.cloudinary.com/grover/image/upload/c_limit,h_1000,w_1000,q_auto,f_auto/omt4nis1xvluqtjcawpr.png"
	},
	riftvr: {
		name: "Rift VR",
		specs: '2160 x 1200, 90Hz, Built-in audio',
		brand: "Oculus",
		price: "\u20AC46.90/month",
		link: "https://getgrover.com/de-de/products/oculus-rift-vr-5221",
		img: "https://res-4.cloudinary.com/grover/image/upload/c_limit,h_1000,w_1000,q_auto,f_auto/wehebtj6c2souql95lhs.png"
	},
	macbook12: {
		name: 'Macbook 12',
		specs: 'Intel Core M-5Y31, 8GB RAM, 256GB SSD, 12"',
		brand: "Apple",
		price: "\u20AC99.90/month",
		link: "https://getgrover.com/de-de/products/macbook-12-core-m-5y31-8gb-ram-256gb-ssd-514",
		img: "https://res-5.cloudinary.com/grover/image/upload/c_limit,h_1000,w_1000,q_auto,f_auto/pj3xwlbdexsno4gcviqd.png"
	},
	macbookair11: {
		name: 'Macbook Air 11',
		specs: 'Intel Core i7-2720QM, 8GB RAM, 512GB SSD, 11"',
		brand: "Apple",
		price: "\u20AC154.00/month",
		link: "https://getgrover.com/de-de/products/macbook-air-116-22-ghz-i7-8gb-512gb-6081",
		img: "https://res-2.cloudinary.com/grover/image/upload/c_limit,h_1000,w_1000,q_auto,f_auto/ck1dl6iseqhrphmla5sm.png"
	},
	macbookair13: {
		name: 'Macbook Air 13',
		specs: 'Intel Core i5-5250U, 4GB RAM, 128GB SSD, 13"',
		brand: "Apple",
		price: "\u20AC99.90/month",
		link: "https://getgrover.com/de-de/products/macbook-air-13-3-core-i5-5250u-4gb-ram-516",
		img: "https://res-3.cloudinary.com/grover/image/upload/c_limit,h_1000,w_1000,q_auto,f_auto/lkx7apkyojc7zxau6dyq.png"
	},
	macbookpro13: {
		name: 'Macbook Pro 13',
		specs: 'Intel Core i5-6360U, 8GB RAM, 256GB SSD, 13"',
		brand: "Apple",
		price: "\u20AC149.90/month",
		link: "https://getgrover.com/de-de/products/macbook-pro-13-20-ghz-prozessor-256-gb-2884",
		img: "https://res-5.cloudinary.com/grover/image/upload/c_limit,h_1000,w_1000,q_auto,f_auto/m27eklhg5kjhj3uxbicw.png"
	},
	surfacebook: {
		name: 'Surface Book',
		specs: 'Intel Core i7 dGPU, 16GB RAM, 512GB SSD, 13.5"',
		brand: "Microsoft",
		price: "\u20AC199.90/month",
		link: "https://getgrover.com/de-de/products/microsoft-surface-book-512gb-intel-3323",
		img: "https://res-1.cloudinary.com/grover/image/upload/c_limit,h_1000,w_1000,q_auto,f_auto/ovdp9yxui14kmqpvpmhs.png"
	},
	yoga300: {
		name: 'YOGA 300-11IBR',
		specs: 'Intel Core m3-6Y30, 4GB RAM, 256GB SSD, 11.6"',
		brand: "Lenovo",
		price: "\u20AC79.90/month",
		link: "https://getgrover.com/de-de/products/lenovo-yoga-700-11isk-80qe0027ge-5149",
		img: "https://res-4.cloudinary.com/grover/image/upload/c_limit,h_1000,w_1000,q_auto,f_auto/pb36vp1pgyghmozx3gre.png"
	},
	applewatch38mm: {
		name: 'Apple Watch Series 1 38mm',
		specs: 'Series 1, stainless steel case, 38mm sports strap black',
		brand: "Apple Watch",
		price: "\u20AC39.90/month",
		link: "https://getgrover.com/de-de/products/apple-watch-38mm-black-88",
		img: "https://res-1.cloudinary.com/grover/image/upload/c_limit,h_1000,w_1000,q_auto,f_auto/d53myo9myovzk3hosnlm.png"
	},
	applewatch42mm: {
		name: 'Apple Watch 42mm',
		specs: 'Series 1, Stainless Steel Case, White Bracelet',
		brand: "Apple Watch",
		price: "\u20AC59.90/month",
		link: "https://getgrover.com/de-de/products/apple-watch-42mm-white-87",
		img: "https://res-2.cloudinary.com/grover/image/upload/c_limit,h_1000,w_1000,q_auto,f_auto/gddvfqsgqqzcooj4xuwt.png"
	},
	suuntoambit3: {
		name: 'Suunto Ambit 3 Peak',
		specs: '7 days battery life',
		brand: "Suunto",
		price: "\u20AC29.90/month",
		link: "https://getgrover.com/de-de/products/suunto-ambit-3-peak-sapphire-489",
		img: "https://res-3.cloudinary.com/grover/image/upload/c_limit,h_1000,w_1000,q_auto,f_auto/hnndb1de7pkvirr8cyur.png"
	},
	polarv800: {
		name: 'Polar Watch V800 BLACK',
		specs: '2 days battery life',
		brand: "Polar",
		price: "\u20AC19.90/month",
		link: "https://getgrover.com/de-de/products/polar-v800-hr-486",
		img: "https://res-5.cloudinary.com/grover/image/upload/c_limit,h_1000,w_1000,q_auto,f_auto/l1qx0jhtky4pkwqefdde.png"
	},
	asuswatch: {
		name: 'Apple Watch 42mm',
		specs: 'Stainless steel, 2 days battery life, Android Wear, white',
		brand: "Asus",
		price: "\u20AC21.90/month",
		link: "https://getgrover.com/de-de/products/asuswi503q-2rbge0001-zenwatch-3-weiss-4955",
		img: "https://res-2.cloudinary.com/grover/image/upload/c_limit,h_1000,w_1000,q_auto,f_auto/hnpxqx5rfyikkzwyr2dt.png"
	},
	alexadot: {
		name: 'Amazon Echo Dot',
		specs: 'Alexa Voice Service, 2nd generation, black',
		brand: "Amazon",
		price: "\u20AC9.90/month",
		link: "https://getgrover.com/de-de/products/alexa-dot-5325",
		img: "https://res-1.cloudinary.com/grover/image/upload/c_limit,h_1000,w_1000,q_auto,f_auto/lds8r2psi6lcbnenppq2.png"
	},
	alexaecho: {
		name: 'Amazon Alexa Echo',
		specs: '360 ° omnidirectional sound, voice control',
		brand: "Amazon",
		price: "\u20AC14.90/month",
		link: "https://getgrover.com/de-de/products/alexa-echo-5324",
		img: "https://res-4.cloudinary.com/grover/image/upload/c_limit,h_1000,w_1000,q_auto,f_auto/yafiygwycktlbluunp23.png"
	},
	qbomilkmaster: {
		name: 'Qbo Coffee Maker You Rista with Milk Master',
		specs: 'with 32 capsules',
		brand: "Qbo",
		price: "\u20AC19.90/month",
		link: "https://getgrover.com/de-de/products/qbo-you-rista-and-milk-master-5283",
		img: "https://res-5.cloudinary.com/grover/image/upload/c_limit,h_1000,w_1000,q_auto,f_auto/bjknqibgaisejpobfc45.png"
	},
	samsungpowerbot: {
		name: 'Samsung POWERbot VR20J9020UR / EC',
		specs: 'Powerful Robotic Suction delivers optimal cleaning results',
		brand: "Asus",
		price: "\u20AC79.90/month",
		link: "https://getgrover.com/de-de/products/samsung-vr-20-j-9020-ur-eg-4911",
		img: "https://res-1.cloudinary.com/grover/image/upload/c_limit,h_1000,w_1000,q_auto,f_auto/u6t6qvbsmnlxa8tunswg.png"
	}
}

export default productDetails;










































