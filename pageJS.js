

	const hours1=(a)=>{
		let b = a.getHours();
		if(b>12){
			return b-12;
		}
		else{
			return b;
		}
	}

	const ampm1=(a)=>{
		let b = a.getHours();
		if(b>12)
		{
			return "PM";
		}
		else{
			return "AM";
		}
	}

	let hours = document.getElementById("hours");
	let minutes = document.getElementById("minutes");
	let seconds = document.getElementById("seconds");
	let date_container = document.querySelector(".Date-container");
	let AMPM = document.querySelector(".AMPM-container");

	let months = ["Januery","Februery","March","April","May","June","July","August","Saptember","October","November","December"];

	let day = ["Sunday","Monday","Tuesday","Wednesday","thursday","Friday","Saturday"];

	setInterval(()=>{
			let a = new Date();
	        let h = hours1(a);
	        let m = a.getMinutes();
	        let s = a.getSeconds();
	        let ampm = ampm1(a);
	        let d = day[a.getDay()];
	        let date = a.getDate();
	        let month = months[a.getMonth()]
	        let year = a.getFullYear();

             date_container.innerHTML=(d+" "+date+" "+month+" "+year);
             AMPM.innerHTML=ampm;
		     hours.innerHTML=h;
		     minutes.innerHTML=m;
		     seconds.innerHTML=s;

	},1000);


//js for theme btn

let btn = document.getElementById("theme-btn");
let modal = document.getElementById("mymodal");
let modalbox= document.getElementById("box1");
let close_btn = document.getElementById("close1");

btn.onclick = function(){
	modal.style.display="flex";
	modalbox.style.display="block";
}

close_btn.onclick = function(){
	modal.style.display = "none";
}

//js for changing the theme 
let theme1 = document.getElementById("theme1");
let theme2 = document.getElementById("theme2");
let theme3 = document.getElementById("theme3");
let theme4 = document.getElementById("theme4");

let lastChild = document.head.lastChild;


if(document.head.contains(lastChild)!=="link"){
	let newlink = document.createElement("link");
	newlink.setAttribute('rel','stylesheet');
	newlink.setAttribute('type','text/css');
	newlink.setAttribute('href','theme1.css');
	newlink.setAttribute('id','theme-link');
	document.head.appendChild(newlink);
}


theme1.onclick =function(){
	let child = document.getElementById("theme-link");
	let newlink = document.createElement("link");
	newlink.setAttribute('rel','stylesheet');
	newlink.setAttribute('type','text/css');
	newlink.setAttribute('href','theme1.css');
	child.replaceWith(newlink);
	newlink.setAttribute('id','theme-link');
	modal.style.display="none";
 }

theme2.onclick =function(){
	let child = document.getElementById("theme-link");
	let newlink = document.createElement("link");
	newlink.setAttribute('rel','stylesheet');
	newlink.setAttribute('type','text/css');
	newlink.setAttribute('href','theme2.css');
	child.replaceWith(newlink);
	newlink.setAttribute('id','theme-link');
	modal.style.display="none";
}

theme3.onclick =function(){
	let child = document.getElementById("theme-link");
	let newlink = document.createElement("link");
	newlink.setAttribute('rel','stylesheet');
	newlink.setAttribute('type','text/css');
	newlink.setAttribute('href','theme3.css');
	child.replaceWith(newlink);
	newlink.setAttribute('id','theme-link');
	modal.style.display="none";
}

theme4.onclick =function(){
	let child = document.getElementById("theme-link");
	let newlink = document.createElement("link");
	newlink.setAttribute('rel','stylesheet');
	newlink.setAttribute('type','text/css');
	newlink.setAttribute('href','theme4.css');
	child.replaceWith(newlink);
	newlink.setAttribute('id','theme-link');
	modal.style.display="none";
}