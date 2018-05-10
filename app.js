import $ from 'jquery';
import Rx from 'rxjs/Rx';




// to override the console log
function mylog(txt)
{
	$('#root').append(txt + '<br>');
}

var console = {};
console.log = function(msg) {
	mylog(msg);
};



function simpleArraySum(n, ar) {
    var sum = 0;
    for(var i = 0; i < n ; i++){
        sum += ar[i];
    }
    return(sum);
}

console.log('');

const btn = $('#btn');
const input = $('#input');
var n = 5
var arr = '1 2 3 4 6'.split(' ');
arr = arr.map(Number);
var sumOfArray = arr.reduce(function(a,b) {return a+b});
console.log(sumOfArray);

console.log(simpleArraySum(n, arr));


   var a0_temp = '5 6 7'.split(' ');
    var a0 = parseInt(a0_temp[0]);
    var a1 = parseInt(a0_temp[1]);
    var a2 = parseInt(a0_temp[2]);
    var b0_temp = '3 6 10'.split(' ');
    var b0 = parseInt(b0_temp[0]);
    var b1 = parseInt(b0_temp[1]);
    var b2 = parseInt(b0_temp[2]);
    var result = solve(a0, a1, a2, b0, b1, b2);
    console.log(result.join(" "));
    

function  solve(a0, a1, a2, b0, b1, b2) {

	let  aa = [a0, a1, a2];
	let  bb = [b0, b1, b2];
	let  isBig = (x, y) => x > y ? 1 : 0 ;
	let  abag = 0;
	let  bbag = 0;
	aa.map(function (k, index) {
			abag +=  isBig(k, bb[index]);
			bbag +=  isBig(bb[index], k);

			//console.log(k + '  ' + bb[index] + '  ' + abag + '  ' + bbag);
	});

	return [abag, bbag];

}

arraymani();

function arraymani() {
    let n_temp = '5 3'.split(' ');
    let n = parseInt(n_temp[0]);
    let m = parseInt(n_temp[1]);
    let res = [];
    let sum = 0;
    let max = 0;

    for (let i = 0; i<n; i++) {
        res[i] = 0;
    }
    
		let r_temp = {};

		r_temp[0] = '1 2 100';
		r_temp[1] = '2 5 100';
		r_temp[2] = '3 4 100';

    for(var a0 = 0; a0 < m; a0++){
        //var a_temp = readLine().split(' ');
        var a = parseInt(r_temp[0]);
        var b = parseInt(r_temp[1]);
        var k = parseInt(r_temp[2]);

        res[a-1] += k;
        if (b<n) res[b]-=k;
    }
  
    for (let i=0; i<n; i++) {
        sum += res[i];
        if (max < sum) max = sum;
    }
   
    console.log(max);
}

// const btnStream$ =  Rx.Observable.fromEvent(btn,'click');


// btnStream$.subscribe(
// 	function(e) {
// 		console.log( e.target.innerHTML); // display button name
// 	},
// 	function(err) {
// 		console.log(err);
// 	},	
// 	function() {
// 		console.log('Completed');
// 	}
// );

// const numbers = [33, 44, 55, 66, 77, 88];
// const number$ = Rx.Observable.from(numbers);

// console.log('Please refer full syntax at my github :');
// console.log(JSON.stringify('<a href=https://github.com/vsaravanan/RxJSFirst/blob/master/src/app.js> https://github.com/vsaravanan/RxJSFirst/blob/master/src/app.js </a>'));
// console.log('');

// console.log('Lesson 1 : display from array [33, 44, 55, 66, 77, 88]');
// console.log('const number$ = Rx.Observable.from(numbers);');
// console.log('number$.subscribe()');

// number$.subscribe(
// 	v => {
// 		console.log(v);
// 	},
// 	err => {
// 		console.log(err);
// 	},	
// 	complete => {
// 		console.log('Completed');
// 	}
// );

// console.log('');




// console.log('Lesson 2 : json data posts');
// console.log('const posts$ = Rx.Observable.from(posts);');


// const posts = [
// 	{title : 'Post 1', body: 'Post one body'},
// 	{title : 'Post 2', body: 'Post two body'},
// 	{title : 'Post 3', body: 'Post three body'},
// ];

// //const postOutput = $('#posts');
// const posts$ = Rx.Observable.from(posts);

// posts$.subscribe(
// 	post => {
// 		//console.log(post);
// 		$('#posts').append('<li><h3>' + post.title + '</h3><p>' + post.body + '</p></li>');
// 	},
// 	err => {
// 		console.log(err);
// 	},	
// 	complete => {
// 		console.log('Completed');
// 	}
// );

// console.log('');


// console.log('Lesson 3 : new Rx.Observable(observer => {} )');
// console.log('observer =>  { observer.next() } ');


// const source$ = new Rx.Observable(observer => {
// 	console.log('Creating Observable');
// 	observer.next('Hello world');
// 	observer.next('Another value');
	
// 	observer.error(new Error('Error: something went wrong'));
	
// 	setTimeout(() => {
// 		observer.next('after 3 seconds');
// 		observer.complete();
// 	},3000)
	
// });

// source$
// .catch(err => Rx.Observable.of(err))
// .subscribe(
// 	x => {
// 		console.log(x);
// 	},
// 	err => {
// 		console.log(err);
// 	},	
// 	complete => {
// 		console.log('Completed after 3 seconds');
// 	}
// );

// console.log('');

// console.log('Lesson 4 : myPromise = new Promise((resolve, reject) => { })');
// console.log('Rx.Observable.fromPromise(myPromise); ');

// const myPromise = new Promise((resolve, reject) => {
// 	console.log('Creating promise');
// 	setTimeout(() => {
// 		resolve('Promise successfully resolved after 3 seconds');
// 	}, 3000);
// });

// // this is normal method
// //myPromise.then( x => {
// //	console.log(x);
// //});

// const source2$ = Rx.Observable.fromPromise(myPromise);
// source2$.subscribe(x => console.log(x));

// console.log('');

// console.log('Lesson 5 : myPromise with ajax data');
// console.log(' return $.ajax({ url: }).promise() ');

// function getUser(username) {
// 	return $.ajax({
// 		url: 'https://api.github.com/users/'+username,
// 		dataType: 'jsonp'
// 	}).promise();
// }

// // bradtraversy

// Rx.Observable.fromPromise(getUser('bradtraversy'))  //e.target.value
// .map(user => user.data.name)
// .subscribe(name =>
// 	{
// 		console.log('name : ' +name);
// 		console.log('but it will be slow and print at the bottom');
		
// 	}
// );



// //const inputSource$ = Rx.Observable.fromEvent($('#input'), 'keyup')

// /*
// inputSource$.subscribe(e => {
// 	Rx.Observable.fromPromise(getUser(e.target.value))  //e.target.value
// 	.subscribe(x => {
// 		console.log(x.data);
// 		$('#name').text(x.data.name);
// 		$('#blog').text(x.data.blog);
// 		$('#repos').text('Public Repos : ' + x.data.public_repos);
// 	});

// });
// */

// // try various methods below
// //const source3$ = Rx.Observable.interval(100).take(5);
// //const source3$ = Rx.Observable.timer(5000,2000).take(5);
// //const source3$ = Rx.Observable.range(25,32);
// //const source3$ = Rx.Observable.interval(100).take(10)
// //	.map(v => v * 2);




// const source3$ = Rx.Observable.from(['John','Tom','Shawn'])
// 	.map(v => v.toUpperCase())
// 	.map(v => 'I am ' + v)
// ;

// source3$.subscribe(
// 	x => console.log(x),
// 	err => {
// 		console.log(err);
// 	},	
// 	complete => {
// 		console.log('Completed');
// 	}

// );


// console.log('');
// console.log("Lesson 6 : x.Observable.from(users).pluck('age');");

// const users = [
// 	{name:'Will', age:33},
// 	{name:'Mike', age:34},
// 	{name:'Paul', age:35},
// ];

// const users$ = Rx.Observable.from(users).pluck('age');

// users$.subscribe(x => console.log(x));

// console.log('');
// console.log(`Lesson 7 : Rx.Observable.of() merge ... `);


// Rx.Observable.of('Hello')
// 	.merge(Rx.Observable.of('Everyone'))
// 	.subscribe(x => console.log(x))
// ;


// //Rx.Observable.interval(2000)
// //	.merge(Rx.Observable.interval(500))
// //	.take(10)
// //	.subscribe(x => console.log(x))
// //;
// //
// console.log('');
// console.log(`Lesson 8 : Rx.Observable.range(0,5).map(v => 'Range1: ' + v) `);	
// console.log('Rx.Observable.concat()');

// const source6$ = Rx.Observable.range(0,5).map(v => 'Range1: ' + v);
// const source7$ = Rx.Observable.range(6,5).map(v => 'Range2: ' + v);

// Rx.Observable.concat(source6$, source7$)
// 	.subscribe(x => console.log(x))
// ;


// console.log('');
// console.log(`Lesson 9 : Rx.Observable.of().subscribe() `);	

// Rx.Observable.of('Hello')
// 	.subscribe(v => {
// 		Rx.Observable.of(v + 'Everyone')
// 			.subscribe(x => console.log(v + x));
// });

// console.log('');
// console.log(`Lesson 10 : Rx.Observable.of().mergeMap() `);	

// Rx.Observable.of('Hello')
// 	.mergeMap(v => {
// 		return Rx.Observable.of(v + 'Everyone')
// 	})
// 	.subscribe(x => console.log(x)); // v is not accessible here
// ;



// console.log('');
// console.log(`Lesson 11 : Rx.Observable.interval(2000).map(v => 'Merge1: ' + v) `);	

// const source4$ = Rx.Observable.interval(2000).map(v => 'Merge1: ' + v);
// const source5$ = Rx.Observable.interval(2000).map(v => 'Merge2: ' + v);

// Rx.Observable.merge(source4$, source5$)
// 	.take(15)
// 	.subscribe(x => console.log(x))
// ;



// // bradtraversy

// console.log('');

// console.log(` to test Lesson 12 type bradtraversy in input box`);
// console.log(`switchMap `);	

// console.log('');

// const inputSource2$ = Rx.Observable.fromEvent($('#input'), 'keyup')
// 	.map(e => e.target.value)
// 	.switchMap ( v => {
// 		return Rx.Observable.fromPromise(getUser(v))
// 	});

// inputSource2$.subscribe(x => {
// 		$('#name').text(x.data.name);
// 		$('#blog').text(x.data.blog);
// 		$('#repos').text('Public Repos : ' + x.data.public_repos);
// 	});




// //const inputStream$ =  Rx.Observable.fromEvent(input,'keyup');
// //
// // 
// //inputStream$.subscribe(
// //	function(e) {
// //		console.log(e.target.value);
// //	},
// //	function(err) {
// //		console.log(err);
// //	},	
// //	function() {
// //		console.log('Completed');
// //	}
// //);
// //
// //const moveStream$ =  Rx.Observable.fromEvent(document,'mousemove');
// //
// // 
// //moveStream$.subscribe(
// //	function(e) {
// //		console.log(e.target.value);
// //		output.append('X : ' + e.clientX + 'Y : ' + e.clientY  );
// //	},
// //	function(err) {
// //		console.log(err);
// //	},	
// //	function() {
// //		console.log('Completed');
// //	}
// //);
// // 

// // var printlog = function () {

// // 	this.log = function (msg) {
// // 		mylog(msg);
// // 	}

// // }

// // var m = new printlog();
// // m.log('fdff....');

// // var print2log = function () {
	
// // 	var log = function(msg) {
// // 		mylog(msg);
// // 	}
// // 	return {log} ;

// // };

// // var m = print2log();
// // print2log().log('uuuu....');