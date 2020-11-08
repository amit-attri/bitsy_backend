'use strict';
import Models from './models';
const UrlDao = Models.url;

const findByOriginalUrl = async (originalUrl :string) => {
  return await UrlDao.find({ originalUrl})
}

const findByUniqueCode = async (uniqueCode: string) => {
  return await UrlDao.findOne({ uniqueCode})
}

const create = async (originalUrl: string, shortenedUrl: string, uniqueCode: string, numberOfVisits: number) => {
  return await UrlDao.create({originalUrl, shortenedUrl, uniqueCode, numberOfVisits})
}

const update = async (data) => {
  return await UrlDao.update(data);
}

const findAll = async (query, requiredFields, skip = 0, limit, sortBy = {}) => {
  return await UrlDao.find(query, requiredFields).sort(sortBy).skip(skip).limit(limit);
}

export default {
  findByOriginalUrl,
  create,
  findByUniqueCode,
  update,
  findAll
}