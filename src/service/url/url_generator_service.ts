'use strict';
import * as shortid from "shortid";

import Constants from "../../common/constants";


const generateShortUrl = () => {
  const uniqueCode = shortid.generate();
  const shortenedUrl = Constants.HOST + uniqueCode;
  return {
    uniqueCode,
    host: Constants.HOST,
    shortenedUrl
  }
}

export default {
  generateShortUrl
}