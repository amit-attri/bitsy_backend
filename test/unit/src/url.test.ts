import {setupStuff, clearStuff, teardownStuff} from "../mockers/init";
import UrlGenerator from "../../../src/service/url/url_generator_service"

beforeAll(async () => {
  await setupStuff();
});

afterEach(async () => {
  await clearStuff();
  jest.clearAllMocks();
});

afterAll(async () => {
  await teardownStuff();
})

describe("generating short url", () => {
  it('generating short url should pass', async () => {
    
    const shortUrlObj1 = await UrlGenerator.generateShortUrl();
    const shortUrlObj2 = await UrlGenerator.generateShortUrl();
    
    expect(shortUrlObj1.shortenedUrl).toBeDefined();
    expect(shortUrlObj1.uniqueCode ).toBeDefined();
  
    expect(shortUrlObj2.shortenedUrl).toBeDefined();
    expect(shortUrlObj2.uniqueCode ).toBeDefined();
  
    expect(shortUrlObj1.shortenedUrl ).not.toEqual(shortUrlObj2.shortenedUrl)
  });
})