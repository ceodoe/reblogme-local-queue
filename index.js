const {Builder,By} = require("selenium-webdriver");
const firefox = require('selenium-webdriver/firefox');
let options = new firefox.Options().addArguments('-headless');

let fs = require("fs");
let path = require("path");
let credentials = JSON.parse(fs.readFileSync(path.join(__dirname, "credentials.json"), "utf8"));    

async function main() {
    let driver = await new Builder()
        .forBrowser("firefox")
        .setFirefoxOptions(options)
        .build();

    await driver.get("https://reblogme.com/login");
    await driver.findElement(By.id("email")).sendKeys(credentials.email);
    await driver.findElement(By.id("password")).sendKeys(credentials.password);
    await driver.findElement(By.css("button[type='submit']")).click();
    await driver.sleep(2000);

    await driver.get("https://reblogme.com/queue");
    await driver.findElement(By.css("div.publishpost:nth-of-type(1)")).click();
    await driver.sleep(2000);
    
    driver.quit();
}

main();
