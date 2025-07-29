import request from "supertest";
import { Server } from "../src/server";

const PORT = 4000;

describe("Server", () => {
  let server: Server;

  beforeAll(async () => {
    server = new Server({ port: PORT });
    await server.start();
  });

  afterAll(async () => {
    await server.stop();
  });

  it("responds to GET / with expected text", async () => {
    const response = await request(`http://localhost:${PORT}`).get("/");

    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello World!");
  });
});
