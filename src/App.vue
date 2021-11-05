<template>
	<router-view />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap');

* {
	font-family: 'Open Sans', sans-serif;
}

body {
	background-image: url(./assets/img/background-image.jpg);
	background-color: #434039;
	margin-top: 50px;
	padding: 0;
}


.contaner {
	background-color: white;
	border-radius: 10px;
	margin: 0 auto;
	padding: 8px;
	text-align: center;
	width: 50%;
	box-shadow: 0px 0px 13px 2px #2c2a26;
}

p {
	font-size: 18px;
}

.input {
	font-size: 16px;
	height: 30px;
	width: 70%;
	padding: 5px;
	margin: 5px;
	border-radius: 20px;
	border: 3px solid rgb(141, 141, 141);
}
.mini_l {
	width: 33.5%;
	border-radius: 20px 0 0 20px;
	margin: 5px 1px 0 0;
}
.mini_r {
	width: 33.5%;
	border-radius: 0 20px 20px 0;
	margin: 5px 1px 0 1px;
}

.input:focus {
	border: 3px solid rgb(131, 131, 131);
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}

.btn {
	background-color: #be6464;
	color: rgb(255, 255, 255);
	margin: 10px;
	padding: 0, 15px, 15px, 0;
	height: 40px;
	width: 150px;
	border-radius: 20px;
	font-weight: bold;
	font-size: 16px;
}


.hr {
	border: 0;
	height: 2px;
	margin: 10px;
	background: rgb(66, 55, 55);
	background-image: -webkit-linear-gradient(left, #fff, #000, #fff);
	background-image: -moz-linear-gradient(left, #fff, #000, #fff);
	background-image: -ms-linear-gradient(left, #fff, #000, #fff);
	background-image: -o-linear-gradient(left, #fff, #000, #fff);
}
</style>
