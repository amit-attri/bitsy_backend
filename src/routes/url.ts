import * as express from 'express';
const router = express.Router();
import Controller from "../controller";


//create new url
router.post('/create', Controller.createShortUrl);


router.get('/get/:uniqueCode', Controller.getOriginalUrl);

router.get('/getAll', Controller.getTopVisitedUrls);

export default router;