import Api from "../APIs/api";
import {expect} from 'chai';


const api = new Api();

describe("Get the Latest Launch" , () => {
    let data,id,getData;

    it('Should be able to get the latest launch data with status code 200' , async() =>{
        data = await api.getLatestLaunch();
        expect(data.response_status).equals(200);
    })

    it('Should be able to get the latest launch data with success response' , async() =>{
        data = await api.getLatestLaunch();
        expect(data.body.success).equals(true);
    })

    it('Fetch a Launch ID' , async() =>{
        id = data.body.id;
        console.log("ID is ",id);
    })

    it('Should be able to get one  launch ' , async() =>{
        getData = await api.getOneLaunch(id);
        console.log("DeleteResponse  ",getData);
        expect(data.response_status).equals(200);
        
    })

});