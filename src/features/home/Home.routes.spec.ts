import { homeRoutes } from "./Home.routes";

describe("homeRoutes", () => {
  it("routeObject has correct properties", () => {
    const routeObject = homeRoutes();

    expect(routeObject.index).toStrictEqual(true);
    expect(routeObject.element).not.toBeNull();
  });
});
