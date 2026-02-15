import { expect, test } from "@playwright/test";

test("root route renders landing root", async ({ page }, testInfo) => {
  await page.goto("/");
  await expect(page.getByTestId("landing-root")).toBeVisible();
  await expect(page.getByTestId("hero-section")).toBeVisible();
  await expect(page.getByTestId("features-section")).toBeVisible();
  await expect(page.getByTestId("testimonials-section")).toBeVisible();

  await page.screenshot({
    path: `.sisyphus/evidence/task-9-${testInfo.project.name}-root.png`,
    fullPage: true,
  });
});

test("theme toggle switches light and dark", async ({ page }) => {
  await page.goto("/");

  const initialTheme = await page.locator("html").getAttribute("data-theme");
  const nextTheme = initialTheme === "light" ? "dark" : "light";

  await page.getByTestId("theme-toggle").click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", nextTheme);

  await page.getByTestId("theme-toggle").click();
  await expect(page.locator("html")).toHaveAttribute(
    "data-theme",
    initialTheme === "light" ? "light" : "dark",
  );
});

test("cta validates invalid and accepts valid emails", async ({ page }) => {
  await page.goto("/");

  await page.getByTestId("cta-email").fill("invalid-email");
  await page.getByTestId("cta-submit").click();
  await expect(page.getByText("Please enter a valid email address.")).toBeVisible();

  await page.getByTestId("cta-email").fill("test@example.com");
  await page.getByTestId("cta-submit").click();
  await expect(page.getByText("Sending...")).toBeVisible();
  await expect(page.locator(".success-message")).toBeVisible();
});
