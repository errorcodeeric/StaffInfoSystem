
async function readJSON() {
    const BASE_JSON_BIN_URL = "https://api.jsonbin.io/v3/b";
    const binID = "6536c5010574da7622bcb7fb"
    const response = await axios.get(BASE_JSON_BIN_URL + "/" + binID + "/latest");
    return response.data.record;
}