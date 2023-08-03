import app from './app';
import {BASE_URL, PORT} from './config';


app.listen(PORT, () => {
    console.log(`server listen on port -> ${PORT}\n${BASE_URL}${PORT}`);
}) 