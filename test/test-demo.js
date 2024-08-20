const request = require("supertest");
const assert = require('chai').assert

describe('API test for restful-api.dev', () => {
   const BASE_URL = "https://api.restful-api.dev/"
   it('Test GET all objects', async () => {
        const response = await request(BASE_URL)
        .get("objects")

        //assertion
         assert.equal(response.statusCode, 200)
         assert.equal(response.body[0].name, "Google Pixel 6 Pro")
         assert.equal(response.body[0].data.color, "Cloudy White")
    }); 

   it('Test POST Store objects', async () => {
      const body = {
         "name": "Apple MacBook Pro 16",
         "data": {
            "year": 2019,
            "price": 1849.99,
            "CPU model": "Intel Core i9",
            "Hard disk size": "1 TB"
         }
      }
      const response = await request(BASE_URL)
      .post("objects")
      .send(body)
      console.log(response.statusCode);
      console.log(response.body)

  }); 
 });