'use strict';

const urlRegex =/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;

const isValidUrl = (url: string) : boolean => {
  return urlRegex.test(url);
}

export default {
  isValidUrl
}