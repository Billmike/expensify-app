// const book = {
// 	title: 'Ego is the Enemy',
// 	author: 'Ryan Holiday',
// 	publisher: {
// 		name: 'Penguin'
// 	}
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(`The name of the Publisher is ${publisherName}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [coffee, , price] = item;
console.log(`A medium ${coffee} costs ${price}.`);
