import { createRequest } from "node-mocks-http";
import { GET } from "@/app/api/hello/route";

describe("/api/hello", () => {
  it("Returns expected result", async () => {
    const req = createRequest<Request>({
      method: "GET",
      url: "/api/hello",
    });

    const res = await GET(req);

    expect(res.status).toBe(200);
    expect(await res.text()).toBe("Hello, Next.js!");
  });
});
