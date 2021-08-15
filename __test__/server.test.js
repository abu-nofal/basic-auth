'use strict';
const {app} = require('../src/server');
// I do not have to run it
const supertest = require('supertest');
const request = supertest(app);
const base64 = require('base-64');

describe('my API Server', ()=> {

    // add scenarios & test cases 
    it('handles 404 on a bad route', async () => {
       
        const response = await request.get('/asd'); // async
        expect(response.status).toEqual(404);
    });


    it('handles 404 on a bad method', async () => {
    
        const response = await request.post('/'); // async
        expect(response.status).toEqual(404);
    });



    it('200 get route /', async () => {
        const response = await request.get('/'); // async
        expect(response.status).toEqual(200);
        
    
    });
    it('200 get route /', async () => {
        const response = await request.get('/'); // async
      
        expect(response.text).toEqual('hello m3lem 😛');
        
    
    });

    let obj={
        username:'ahmad10',
        password:'test123'
    }

    it('Create a record using POST signup ', async () => {
       
        const response = await request.post('/signup').send(obj); // async
        expect(response.status).toEqual(201);
      
    
    });

    it('Create a record using POST signin ', async () => {
        // let test=base64.encoded('ahmad01:test123')
       
        const response = await request.post('/signin').set('Authorization', `Basic YWhtYWQxMDp0ZXN0MTIz`); // async
        expect(response.status).toEqual(200);
    expect(response.body.username).toBe('ahmad10');
      
    
    });

    // it('the middelwear basic auth  ' ,async()=>{
    //     const response = await request.post('/signin').set('Authorization', `Basic YWhtYWQ1OnRlc3QxM`); // async
    //         expect(response.status).toEqual(500);

    // })



    
})

