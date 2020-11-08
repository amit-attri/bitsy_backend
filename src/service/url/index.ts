'use strict';
import * as _ from 'lodash';

import Utils from '../../utils/url_util'; 
import UrlDm from './dm';
import urlGeneratorService from "./url_generator_service";

const createShortUrl = async (url : string) => {
  if(!Utils.isValidUrl(url))
    throw {message: "Invalid Url", error: "Invalid Url"};
  
  const result = await UrlDm.findByOriginalUrl(url);
  if(result.length > 0) {
    return result[0];
  }
  const {shortenedUrl, host, uniqueCode} = urlGeneratorService.generateShortUrl();
  return await UrlDm.create(url, shortenedUrl, uniqueCode, 0);
};

const getOriginalUrlFromUniqueCode = async (uniqueCode: string) : Promise<string> => {
  if(!uniqueCode)
    throw {message: "Invalid Url", error: "Invalid Url"};
  const urlData = await UrlDm.findByUniqueCode(uniqueCode);
  if(!urlData || _.isNull(urlData))
    throw {message: "Invalid Url", error: "Invalid Url"};
  const numberOfVisits = urlData.numberOfVisits;
  UrlDm.update({numberOfVisits: numberOfVisits + 1, lastHitAt: Date.now()})
  return urlData.originalUrl;
}

const getTopVisitedUrls = async () : Promise<Array<object>> => {
  return await UrlDm.findAll({}, '', 0,10, {numberOfVisits: 'desc'});
}

export default {
  createShortUrl,
  getOriginalUrlFromUniqueCode,
  getTopVisitedUrls
}