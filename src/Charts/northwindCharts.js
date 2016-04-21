import {bindable,inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class NorthwindCharts{
    isDisplayed = false;
    produce=[];
    seafoods=[];
    
    constructor(http){
      this.heading='Welcome to Aurelia!';
      
      http.configure(config =>{
        config.useStandardConfiguration()
        .withBaseUrl('http://services.odata.org/V3/Northwind/Northwind.svc/');
      });
      
      this.http = http;
    }
    
    activate(){
      
      return this.http.fetch('Sales_by_Categories?$format=json')
      .then(response => response.json())
      .then(data => data.value)
      .then(rawData => {
        this.produce = this.CreateProduceGraphData(rawData,this.GetRandomColor);
        this.seafoods = this.CreateSeafoodGraphData(rawData,this.GetRandomColor);
      });
    }
    
    GetRandomColor(){
      var letters ='0123456789ABCDEF'.split('');
      var color ='#';
      for(var i=0; i< 6; i++){
        color += letters[Math.floor(Math.random()*16)];
      }
      return color;
    }
    
    CreateSeafoodGraphData(rawGraphData,colgen){
      let seafoodData =[];
      rawGraphData.forEach(function(item){
        // console.log(item);
        if(item.CategoryName==='Seafood'){
          seafoodData.push({
            value:item.ProductSales,
            color:colgen(),
            highlight: colgen(),
            label: item.ProductName
          });
        }
      });
      return seafoodData;
    }
    
    CreateProduceGraphData(rawGraphData,colgen){
      let produceData =[];
      
      rawGraphData.forEach(function(item){
        if(item.CategoryName === 'Produce'){
          produceData.push({
            value:item.ProductSales,
            color: colgen(),
            highlight:colgen(),
            label:item.ProductName
          });
        }
      });
      return produceData;
    }
}
