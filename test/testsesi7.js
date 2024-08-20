const request = require(`supertest`);
const assert  = require(`chai`).assert
const should  = require(`chai`).should
const expect  = require(`chai`).expect
const fs = require(`fs`)

var chai = require(`chai`);
chai.use(require('chai-json-schema'));

describe('API Test for "reqres.in"', () => {
    it('Test - GET all list',async () => {
        const response = await request ("https://reqres.in/api/unknown").get("list")
        console.log(response.statusCode)

        const schemaPath = "resources/JsonSchema/post-object-schema.json"
        const jsonSchema =  JSON.parse(fs.readFileSync(schemaPath,`utf-8`))
        assert.jsonSchema(response.body, jsonSchema)
    });
    
    it('Test - POST  Store list',async () => {
        const response = await request ("https://reqres.in/api/unknown")
        .post("list")
        .send(
            {
                "data": {
                    "id": 2,
                    "name": "fuchsia rose",
                    "year": 2001,
                    "color": "#C74375",
                    "pantone_value": "17-2031"
                },
                "support": {
                    "url": "https://reqres.in/#support-heading",
                    "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
                }
            }
        )
    });

    it('Test - PUT all list',async () => {
        const response = await request ("https://reqres.in/api/unknown").get("list")
        console.log(response.statusCode===200)

        const schemaPath = "resources/JsonSchema/post-object-schema.json"
        const jsonSchema =  JSON.parse(fs.readFileSync(schemaPath,`utf-8`))
        assert.jsonSchema(response.body, jsonSchema)
    });

    it('Test - DELETE all list',async () => {
        const response = await request ("https://reqres.in/api/unknown").get("list")
        console.log(response.statusCode===204)

        const schemaPath = "resources/JsonSchema/post-object-schema.json"
        const jsonSchema =  JSON.parse(fs.readFileSync(schemaPath,`utf-8`))
        assert.jsonSchema(response.body, jsonSchema)
    });
});