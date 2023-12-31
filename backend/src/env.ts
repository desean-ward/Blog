//****** Checks for valid .ENV ***** */
import { cleanEnv, port, str } from "envalid";

const env = cleanEnv(process.env, {
    PORT: port(),
    MONGO_URI: str(),
    WEBSITE_URL: str(),
})

export default env

