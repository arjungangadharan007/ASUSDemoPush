import {expect, test} from "@playwright/test";

test("first test",async ({page})=>{
   await page.goto("https://www.saucedemo.com")
   await page.locator('[data-test="username"]').fill("standard_user");
   await page.locator('[data-test="password"]').fill("secret_sauce");
   await expect(page.locator('[data-test="login-button"]')).toHaveCount(1);
   await expect(page.locator("//*[@id='login-button']")).toBeEnabled()
//    await page.locator("//*[@id='login-button']").click();
//   const message = await page.getByText('Swag Labs').textContent();
//    await expect(page.getByText('Swag Labs')).toBeDisabled
//    console.log(message);
})


