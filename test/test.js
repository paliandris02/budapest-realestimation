const { Builder, By, Key } = require("selenium-webdriver");
const assert = require("assert");

describe("send request", function () {
  it("successfully sends a request", async function () {
    const URL = "http://localhost:8080";
    const responseExpected = "[object Object]";

    let driver = await new Builder().forBrowser("firefox").build();

    await driver.get(URL);
    const submitBtn = await driver.findElement(By.className("submitBtn"));

    await driver.executeScript("arguments[0].scrollIntoView();", submitBtn);
    await driver.sleep(2000);
    await submitBtn.click();

    let responseActual = await driver
      .findElement(By.className("result"))
      .getText()
      .then((val) => val);

    assert.equal(responseActual, responseExpected);
    await driver.quit();
  });
});
