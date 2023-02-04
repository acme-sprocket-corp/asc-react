import { AppRoute, appRoutes } from "./App.routes";

describe("app.routes", () => {
  it("appRoute has correct path", () => {
    expect(AppRoute).toStrictEqual("/");
  });

  it("routeObject has correct properties", () => {
    const routeObject = appRoutes([]);

    expect(routeObject.path).toStrictEqual("/");
    expect(routeObject.element).not.toBeNull();
  });
});
