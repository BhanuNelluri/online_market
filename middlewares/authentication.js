import jwt from 'jsonwebtoken';
export const authentication = async (req, res, next) => {
    try {

        const token = req.headers.authorization.split(" ")[1];
        let decodedData;

        if (token) {
            decodedData = jwt.verify(token, 'test');
            req.userId = decodedData?.id;
        }else{
            json.res({messgae:"authentication needed"});
        }

        next();
    }
    catch (error) {
        console.log(error);
    }
}

