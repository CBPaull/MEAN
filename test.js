function log(arr){
			for (i=0; i<arr.length; i++){
				console.log(arr[i]);
			}
		}
		log([3,5,'dojo','rocks','micheal','sensei']);
		function pushto(arr, value){
			arr.push(value);
			console.log(arr);
		}
		pushto([1,3,5,7,9], 100);
		function addto(x){
			x.push('Hello');
			x.push('world');
			x.push('Javascript is fun');
			console.log(x);
		}
		addto([25]);
		function sumto(number){
			var sum = 0;
			for( i=0; i<= number; i++){
				sum+=i;
			}
			console.log(sum);
		}
		sumto(500);
		function findmin(arr){
			var min = arr[0]
			for (i=1; i<arr.length;i++){
				if (arr[i]<min){
					min = arr[i];
				}
			}
			console.log(min);
		}
		findmin([1,5,90,25,-3,0])
		function findavg(arr){
			var sum = arr[0]
			for (i=1; i<arr.length; i++){
				sum+= arr[i];
			}
			avg = sum/arr.length;
			console.log(avg);
		}
		findavg([1,5,90,25,-3,0]);
		
		function printninja(){
			var new_ninja = {name: 'Jessica',
			profession: 'coder',
			favorite_language: 'JavaScript', //like that's even a question!
			dojo: 'Dallas'}
			for (key in new_ninja){
				console.log(new_ninja[key]);
			}
		}
		printninja();