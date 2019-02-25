<template>

</template>
<script>
    export default {
        name: 'sort'        
    }
</script>
<style>
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
  background: url('../../public/images/td_d_sort_arrow.png') 96% / 10% no-repeat #eee;
}

select::-ms-expand { 
    display: none; 
}
</style>
