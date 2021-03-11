
// 정렬
console.log(`\n-array : sort`);
const team = [
	'Joe',
	'Dyan',
	'Bea',
	'Theo',
];
console.log( team.sort() );
console.log( [...team].sort() );


// filter
console.log(`\n-array : filter`);
const staff = [
	{
		name: 'Wesley',
		position: 'musician',
	},
	{
		name: 'Davis',
		position: 'engineer',
	},
];
function getMusicians(staff){
	return staff.filter( member => member.position === 'musician' );
}
console.log( getMusicians(staff) );


// object.keys
console.log(`\n-array : object keys`);
const game1 = {
	player: 'Jim Joans',
	hits: 2,
	runs: 1,
	erros: 0,
};
const game2 = {
	player: 'Jim Joans',
	hits: 3,
	runs: 0,
	erros: 1,
};
const total  = {},
	stats = Object.keys(game1),
	statsLen = stats.length;
for(let i=0 ; i<statsLen ; i++ ){
	const stat = stats[i];
	if( stat !== 'player'){
		total[stat] = game1[stat] + game2[stat];
	}
}
console.log(total);

// find
console.log(`\n-array : find`);
const dogPair = [
	['name', 'Don'],
	['Color', 'black'],
];
function getName(dog){
	return dog.find( attribute => {
		return attribute[0] === 'name';
	})[1];
}
console.log( getName(dogPair) );


// indexOf, includes
console.log(`\n-array : includes`);
const sections = ['contact', 'shipping'];
function displayShipping(sections){
	// return sections.indexOf('shipping') > -1;
	return sections.includes('shipping');
}
console.log(displayShipping(sections));



// Copy array
console.log(`\n-array : copy`);
const cart = ['Name', 'Alice'];
// const copyCart = cart.slice();
const copyCart = [...cart];
console.log(copyCart);



// Delete array
console.log(`\n-array : remove item`);
/*function removeItem(items, removable){
	const index = items.indexOf(removable);
	items.splice( index, 1 );
	return items;
}*/
function removeItem(items, removable){
	const index = items.indexOf(removable);
	return [...items.slice(0, index), ...items.slice(index + 1)];
}
/*function removeItem(items, removable){
	return items.filter( item => item !== removable );
}*/
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log( removeItem( arr, 'b') ); // filter와 find로 개선할 수 있다.



// [...arr]
console.log(`\n-array : format book`);
const book = ['Reason and Persons', 'Derek Parfit', 19.99];
function formatBook( title, author, price){
	return `${title} by ${author} $${price}`;
}
console.log( formatBook(...book) );

console.log(`\n-array : array push`);
const titles = ['Moby Dick', 'White Teeth'];

let moreTitles = [...titles, 'The Consious Wind'];
console.log( moreTitles );

moreTitles = ['The Consious Wind', ...titles];
console.log( moreTitles );

const toCopy = ['Moby Dick', 'White Teeth'];
const copied = toCopy.slice();
console.log( 'copied', copied );

const moreCopied = [...toCopy];
console.log( 'moreCopied', moreCopied );





