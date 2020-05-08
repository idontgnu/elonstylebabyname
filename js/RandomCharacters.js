document.getElementById("Generate_it").addEventListener('click',generate);


function generate_random_string(string_length){
    var random_string = '';
    var random_ascii;
    var ascii_low = 32;
    var ascii_high = 173;
	var random_name = '';
	
    for(var i = 0; i < string_length; i++) {
        random_ascii = Math.floor((Math.random() * (ascii_high - ascii_low)) + ascii_low);
		 	 if (126 < random_ascii && random_ascii < 173){
				random_ascii=32;
				
			}  
			
		random_string += String.fromCharCode(random_ascii)
		console.log(random_ascii);
	}
	return random_string;
    }

function generate_random_number(){
    var num_low = 0;
    var num_high = 9;
    return Math.floor((Math.random() * (num_high - num_low)) + num_low);
}

function generate() {
    return random_name = generate_random_string(generate_random_number()+3) + generate_random_number();
	
}

console.log(generate());
document.getElementById("generate-names").onclick = function(){
var html='<ul class="list">';
                html+=`<li>${random_name}</li>`;
            html+='</ul>';
            document.querySelector('#result').innerHTML=html;
}
