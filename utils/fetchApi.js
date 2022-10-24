import axios from "axios"


    
export const baseUrl ='https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const {data} = await axios.get((url),{
        headers: {
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
        'X-RapidAPI-Key': '9714b4619dmsh335d540bbf548a2p1014a6jsnf738dc2f733f'
        }
    })
    return data;
}
    