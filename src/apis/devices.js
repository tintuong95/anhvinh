import axios from "../utils/axios";

export const getAllDevices = () => axios.get("/devices");

export const getDeviceDetails = (id) => axios.get("/devices/" + id);

export const createDevice = (data) => axios.post("/devices", data);

export const updateDevice = (id, data) => axios.put("/devices/" + id, data);

export const deleteDevice = (id) => axios.delete("/devices/" + id);
