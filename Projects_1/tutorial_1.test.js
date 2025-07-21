describe("tutorial_1.js", () => {
  let promptMock;
  let consoleLogSpy;

  beforeEach(() => {
    promptMock = jest.fn();
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    jest.resetModules();
    jest.doMock("prompt-sync", () => () => promptMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.dontMock("prompt-sync");
  });

  test("greets user and welcomes to game", () => {
    promptMock.mockReturnValueOnce("Alice").mockReturnValueOnce("yes");
    require("./tutorial_1");
    expect(consoleLogSpy).toHaveBeenCalledWith(
      "hello",
      "Alice",
      "welcome to our game!"
    );
  });

  test("user wants to play", () => {
    promptMock.mockReturnValueOnce("Bob").mockReturnValueOnce("yes");
    require("./tutorial_1");
    expect(consoleLogSpy).toHaveBeenCalledWith("Great! Let's play.");
  });

  test("user does not want to play", () => {
    promptMock.mockReturnValueOnce("Charlie").mockReturnValueOnce("no");
    require("./tutorial_1");
    expect(consoleLogSpy).toHaveBeenCalledWith("Okay, maybe next time!");
  });

  test("user enters invalid input", () => {
    promptMock.mockReturnValueOnce("Dana").mockReturnValueOnce("maybe");
    require("./tutorial_1");
    expect(consoleLogSpy).toHaveBeenCalledWith("invalid input....");
  });

  test("shouldWePlay input is case insensitive", () => {
    promptMock.mockReturnValueOnce("Eve").mockReturnValueOnce("YeS");
    require("./tutorial_1");
    expect(consoleLogSpy).toHaveBeenCalledWith("Great! Let's play.");
  });
});
