
import { test, expect } from '@playwright/test';

test('practice working with web elements', async ({ page }) => {

    // Navigate to the practice application
    await page.goto('https://demo.playwright.dev/todomvc/');


    // Locate a textbox by its placeholder
    const todoTextbox =
        page.getByPlaceholder('What needs to be done?');


    // Type into textbox
    await todoTextbox.fill('Learn Playwright');


    // Press Enter
    await todoTextbox.press('Enter');


    // Locate text
    const todoItem =
        page.getByText('Learn Playwright');


    // Verify text is visible
    await expect(todoItem).toBeVisible();


    // Locate a checkbox
    const checkbox =
        page.getByRole('checkbox', {
            name: 'Toggle Todo'
        });


    // Check checkbox
    await checkbox.check();


    // Verify checkbox is checked
    await expect(checkbox).toBeChecked();


    // Click Completed
    await page.getByRole('link', {
        name: 'Completed'
    }).click();


    // Make sure our item is displayed
    await expect(
        page.getByText('Learn Playwright')
    ).toBeVisible();

});