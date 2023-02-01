import axios from "axios";

const http = 
{
    get : async () =>
    {
        const response = await axios.get('https://api.covid19api.com/summary')
       return response.data.Countries
    }
}

export default http;