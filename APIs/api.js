import ApiHelper from "./utility";
import {endpoints,createPayload} from './constant';

const apiHelper = new ApiHelper();

export default class Api{

    async createLaunch(){
        const url = endpoints.create;
        console.log("URL : ",url);
        const data = createPayload
        console.log("DATA-------------",data);
        console.log("-----------end---");
        return await apiHelper.postCall(url,data);

    }

    async getLatestLaunch(){
        const url = endpoints.latest;
        console.log("URL : ",url);
        return await apiHelper.getCall(url);
    }

    async getOneLaunch(id){
        const url = endpoints.create+'/:'+id;
        console.log("URL : ",url);
        return await apiHelper.getCall(url);
    }

    async deleteLaunch(id){
        const url = endpoints.delete+id;
        console.log("Delete URL is ",url);
        const data = {}
        return await apiHelper.deleteCall(url,data);

    }
}