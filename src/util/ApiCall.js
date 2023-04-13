import { api_base_url } from "./Constants";

async function ApiCall(path) {
    try {
        const result = await fetch(api_base_url + path);
        return await result.json();
    } catch (error) {
        return null;
    }
}
export default ApiCall;
