<template>
    <div>
        <div class="sort">
            <h3>Смартфоны Алматы</h3>
            <select class="sort-price" v-model="sortByPrice">
                <option value="asc" selected>По возрастанию цены</option>
                <option value="desc">По убыванию цены</option>
            </select>
        </div>
        <div class="row"> 

            <div class="side">
                <div class="made" @click='toggle = !toggle'>Производитель
                    <span class="arrow"></span>
                </div>
                <div v-for="(item,index) in phoneModels" :key="index" class="input-check">
                    <input :value="item.value" type='checkbox' v-model="selectedPhoneModel" :id="item.value" >
                    <label :for="item.value" class="filter-product" v-show="toggle">
                        {{item.name}} ({{item.count}})
                    </label>
                </div>
                <div class="made" @click='toggle2 = !toggle2'>Цена
                    <span class="arrow"></span>
                </div>
                <div v-show="toggle2" class="interva-filter">
                    <vue-slider v-model="sliderValue" v-bind="options"></vue-slider>
                    <div class="interva-number">
                        <input type="text" :value="sliderValue[0]" >
                        <input type="text" style="margin-left: 5%;" :value="sliderValue[1]" >
                        <button class="result">ok</button>
                    </div>
                </div>
            </div>

            <product :items="this.filteredProducts"></product>

        </div>
    </div>

</template>

<script>
import vueSlider from 'vue-slider-component';
import Product from '../components/Product';

import json from '../../public/test.json';

export default {
    name: 'productFilter',
    components: {
        vueSlider,
        Product,
    },
    data() {
        return {
            toggle: true,
            toggle2: true,
            sliderValue: [0,100],
            options: {
                eventType: 'auto',
                width: 'auto',
                min: 0,
                max: 100,
                interval: 500,
            },
            products: json,
            sortByPrice: 'asc',
            phoneModels: [
                {
                    name: "Huawei",
                    value: "Huawei",
                    count: 0,
                },
                {
                    name: "Nokia",
                    value: "Nokia",
                    count: 0,
                },
                {
                    name: "Samsung",
                    value: "Samsung",
                    count: 0,
                },
                {
                    name: "Xiaomi",
                    value: "Xiaomi",
                    count: 0,
                },
                {
                    name: "LG",
                    value: "LG",
                    count: 0,
                }
            ],
            selectedPhoneModel: []
        }
    },
    methods: {
        in_array: function(needle, haystack) {
            var length = haystack.length;
            for(var i = 0; i < length; i++) {
                if(haystack[i] == needle) return true;
            }
            return false;
        },
        findMinMax: function(arr = this.products) {
            let min = arr[0].price.value;
            let max = arr[0].price.value;
            for (let i = 1, len=arr.length; i < len; i++) {
                let v = arr[i].price.value;
                min = (v < min) ? v : min;
                max = (v > max) ? v : max;
            }
            return [min, max];
        },
        incrementCount: function(brand) {
            let models = this.phoneModels;
            let length = models.length;
            for(let i=0; i<length; i++) {
                if(models[i].value == brand) {
                   models[i].count++;
                   break;
                }
            }
        },
        setCountToZero: function() {
            let models = this.phoneModels;
            let length = models.length;
            for(let i=0; i<length; i++) {
               models[i].count = 0;
            }
        }
    },
    computed: {
		filteredProducts: function() {
            let vm = this;
            var selectedModel = vm.selectedPhoneModel;

            vm.setCountToZero();

            let minMaxValue = vm.findMinMax();
            vm.options.min = minMaxValue[0];
            vm.options.max = minMaxValue[1];
            if(vm.sliderValue[0] == 0) {
               vm.sliderValue = [minMaxValue[0],minMaxValue[1]]; 
            }

            var minPrice = vm.sliderValue[0];
            var maxPrice = vm.sliderValue[1];

//            console.log(selectedModel);
  //          console.log(minPrice + '-' + maxPrice);

//            console.log();

            let arr = [];
            vm.products.filter(function(model) {
                
                let modelFilted = false;
                let priceFiltered = false;
                if(selectedModel.length == 0 || vm.in_array(model.brand,selectedModel)) {
                    modelFilted = true;
                }
                if(model.price.value >= minPrice && model.price.value <= maxPrice) {
                    priceFiltered = true;
                }

                if(modelFilted && priceFiltered) {
                    vm.incrementCount(model.brand);
                    arr.push(model);
                }
            });

            return arr.slice().sort(function(a, b) {
                if(vm.sortByPrice == 'asc') return a.price.value - b.price.value;
                else return b.price.value - a.price.value;
            });

        }
	}
}

</script>

<style>

</style> 

