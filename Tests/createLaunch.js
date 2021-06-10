import Api from "../APIs/api";
import {expect} from 'chai';


const api = new Api();

describe("Get the Latest Launch" , () => {
    let data;

    it('Should be able to get the latest launch data with status code 200' , async() =>{
        data = await api.createLaunch();
        console.log(data);
        expect(data.response_status).equals(201);
    })

    it('Should be able to get the latest launch data with success response' , async() =>{
        data = await api.createLaunch();
        expect(data.body.success).equals(true);
    })


});