<template>
  <div id="app">
        <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
    <shop-header></shop-header>
    <sort></sort>
      <productFilter></productFilter>
  </div>
</template>

<script>

import Product from './components/Product.vue'
import header from './components/header.vue'
import productFilter from './components/productFilter.vue'

export default {
  name: 'app',
  components: {
    'Product': Product,
    'shopHeader': header,
    'productFilter': productFilter
  }
}
</script>

<style>
* {
    box-sizing: border-box;
  }
  body {
      font-family:  Arial, "Helvetica Neue", sans-serif;
      background-color: #f0f4f7;
      margin: 0;
  }
  .made{
    border-bottom: 1px solid #ccc;
    font-size: 20px;
    padding: 20px;
  }
  .header {
    background-color: #2d2d2d;
    padding: 8px;
    display: -ms-flexbox;
  }
.title{
    display: flex; 
    justify-content: space-between;
}
  .left-link{
    display: table;
    margin-left: 30px;
    margin-top: -25px;
    text-decoration: none;
    color: inherit;
  }
  label{    
    padding: 10px 10%;
    display: inline-block;
  }
.row {  
    display: flex;
    padding: 0 2%;
  }
  .side {
    flex: 25%;
    background-color: white;
    cursor: pointer;
    max-height: 500px;
  }
  .main{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-left: 2%;
    flex: 78%;
  }
  .flex-container{
    width: 200px;
    flex-direction: row;
    border-bottom: 1px solid #f0f0f0;
    box-sizing: border-box;
    border: 1px solid #f0f0f0;
    background-color: white;
  }
  .img-product {
    display: block;
    max-width: 50%;
    width: auto;
    margin: 0 auto;
    padding-top: 5%;
  }
.arrow {
  padding-top: 12px;
  float: right;
}
.arrow::before,
.arrow::after {
  position: relative;
  content: '';
  display: block;
  width: 20px;
  height: 1px;
  background: #000;
}

.arrow::before {
  transform: rotate(-45deg);
}

.arrow::after {
  left: 14px;
  transform: rotate(45deg);
}
.vue-slider-component .vue-slider-process {
    background-color: #f47b32;
}
.vue-slider-component .vue-slider-dot.vue-slider-always .vue-slider-tooltip-wrap {
    visibility: hidden!important;
}
input[type="text"] {
    padding-left: 2%;
    width: 100px;
    height: 40px;
    border: 1px solid #e1e1e1;
    border-radius: 2px;
}
.interva-filter{
    padding: 5%;
}
.result{
    border: 1px solid #f47b32;
    background-color: #f47b32;
    border-radius: 3px;
    width: 35px;
    height: 40px;
    margin-left: 4%;
}
.interva-number{
    display: flex;
    justify-content: space-between;
    padding-top: 3%;
}

.input-check {
    padding-left: 12%;
}
input[type="checkbox"] {
 display: none;
}
label {
 color: #000;
 cursor: default;
 font-weight: normal;
 line-height: 30px;
 padding: 10px 0;
 vertical-align: middle;
}
 
label:before {
 content: " ";
 color: #f47b32;
 display: inline-block;
 font: 20px/30px FontAwesome;
 margin-right: 15px;
 position: relative;
 text-align: center;
 text-indent: 0px;
 width: 30px;
 height: 30px;
 background: #FFF;
 border: 1px solid #e3e3e3;
 border-image: initial;
 vertical-align: middle;
}
 
input:checked + label:before {
font-family: "Font Awesome 5 Free";
   content: "\f00c";
   vertical-align: middle;
   font-weight: 900;
}
 
input:disabled + label:before {
 background: #eee;
 color: #aaa;
}
.sort{
    padding: 0 2%;
    display: flex;
    justify-content: space-between;
}
.sort-price{
    width: 256px;
    height: 40px;
    background-color: #f0f4f7;
    border-radius: 8px;
    border: 1px solid #ccc;
    margin-top: 10px;
    font-size: 16px;
}
option {
    background-color: #f0f4f7;
    border-radius: 8px;
    border: 1px solid #ccc;
    }
select {
  padding: 5px 35px 5px 5px;
  font-size: 16px;
  border: 1px solid #ccc;
  height: 34px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url('../public/images/td_d_sort_arrow.png') 96% / 10% no-repeat #eee;
}

select::-ms-expand { 
    display: none; 
}
@media only screen and (min-width : 1220px) {
  .flex-container{
   width: 337px;
  }
}

 @media screen and (max-width: 700px) {
    .row, .navbar {   
      flex-direction: column;
    }
  }
</style>
