import fetch from 'node-fetch';

export default class ApiHelper{

    async postCall(url,data) {
        try{
            const config = {
                method : 'POST',
                headers : {
                    'content-Type' : 'application/json',
                    'Accept-Language':'en-US'
                },
                body : JSON.stringify(data)
            }
            const response = await fetch(url, config)
            console.log("Response : ",response)
            const res_data = await response.json();
            console.log("API Response: ",res_data);
            return{
                body: res_data
            }
        } catch(error){
            return console.log(`Error : ${error}`)
        }
    }

    async getCall(url){
        try{
            const config = {
                method : 'GET',
                headers : {'content-Type' : 'application/json',
                'Accept-Language':'en-US'},
            } 
            const response = await fetch(url , config);
            const res_data = await response.json();
            console.log("API Response : ",res_data);
            return{
                response_status : response.status,
                body : res_data
            }
               }catch(error){
                   return console.log(`Error: ${error}`)
               }

    }

    async deleteCall(url,data) {
        try{
            const config = {
                method : 'DELETE',
                headers : {
                    'content-Type' : 'application/json',
                    'Accept-Language':'en-US'
                },
                body : JSON.stringify(data)
            }
            const response = await fetch(url, config)
            console.log("Response : ",response)
            const res_data = await response.json();
            console.log("API Response: ",res_data);
            return{
                body: res_data
            }
        } catch(error){
            return console.log(`Error : ${error}`)
        }
    }

}