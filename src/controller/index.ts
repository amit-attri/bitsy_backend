'use strict';
import  UrlService from  '../service/url';
import { Response, Request } from "express";
import {Errors} from "../common/error";

const createShortUrl = async (req: Request, res: Response) => {
  const url = req.body.url;
  try {
    const result = await UrlService.createShortUrl(url);
    return res.status(200).json({
      status: 'OK',
      item: result
    })
  }
  catch (error) {
    return res.status(501).json(Errors.RESPONSE_ERROR(error));
  }
};

const getOriginalUrl = async (req: Request, res: Response) => {
  const uniqueCode = req.params.uniqueCode;
  try {
    const originalUrl = await UrlService.getOriginalUrlFromUniqueCode(uniqueCode);
    return res.redirect(originalUrl);
  }
  catch (error) {
    return res.status(501).json(Errors.RESPONSE_ERROR(error));
  }
};

const getTopVisitedUrls = async (req: Request, res: Response) => {
  try {
    const topVisitedSites = await UrlService.getTopVisitedUrls();
    return res.status(201).json({
      status : "OK",
      urls: topVisitedSites
    })
  }
  catch (error) {
    return res.status(501).json(Errors.RESPONSE_ERROR(error));
  }
};

export default {
  createShortUrl,
  getOriginalUrl,
  getTopVisitedUrls
}