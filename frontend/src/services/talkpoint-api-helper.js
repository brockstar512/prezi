import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:3001"
});



//delete
export const deleteTalk = async (pointId) => {
    const resp = await api.delete(`/talkpoint/${pointId}`);
    return resp.data
}

export const getTalkById = async (id) => {
    const resp = await api.get(`/talkpoint/${id}`)
}

//create   
export const createTalk = async (sectId, body) => {
    console.log(body)
    const resp = await api.put(`/sections/addpoint/${sectId}`, body);
    return resp.data
}

//update talk point
export const updateTalk = async (pointId, body) => {
    const resp = await api.put(`/talkpoint/${pointId}`, body);
    return resp.data
}