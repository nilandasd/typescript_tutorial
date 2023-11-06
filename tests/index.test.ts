import request from "supertest";
import connectToMongo from '../src/config/mongo';
import app from "../src/app";
import mongoose from "mongoose";

beforeEach((done) => {
  connectToMongo.then(() => done());
})

afterEach((done) => {
	mongoose.connection.db.dropDatabase({}).then((error) => {
		mongoose.connection.close().then(() => done());
	});
})

describe("Test index.ts", () => {
  test("Catch-all route", async () => {
    const res = await request(app).get('/');
    expect(res.type).toEqual('text/html');
  });
});
