
import { test, type Page } from '@playwright/test';

test('test', async ({ page }: { page: Page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.getByRole('heading', { name: 'todos' }).click();
  await page.getByRole('heading', { name: 'todos' })
  await page.getByRole('textbox', { name: 'What needs to be done?' }).click();
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Feed the Cat');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Pet the Dog');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Water the Plants');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Sweep the Floor');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Do the Dishes');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Clean the Bathroom');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Do the Laundry');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByText('Feed the Cat').click();
  await page.getByText('Pet the Dog').click();
  await page.getByText('Water the Plants').click();
  await page.getByText('Sweep the Floor').click();
  await page.getByText('Do the Dishes').click();
  await page.getByText('Clean the Bathroom').click();
  await page.getByText('Do the Laundry').click();
  await page.getByRole('listitem').filter({ hasText: 'Feed the Cat' }).getByLabel('Toggle Todo').check();
  await page.getByRole('listitem').filter({ hasText: 'Pet the Dog' }).getByLabel('Toggle Todo').check();
  await page.getByRole('listitem').filter({ hasText: 'Water the Plants' }).getByLabel('Toggle Todo').check();
  await page.getByRole('listitem').filter({ hasText: 'Sweep the Floor' }).getByLabel('Toggle Todo').check();
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.getByText('Feed the Cat').click();
  await page.getByText('Pet the Dog').click();
  await page.getByText('Water the Plants').click();
  await page.getByText('Sweep the Floor').click();
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Do the Dishes' }).getByLabel('Toggle Todo').check();
  await page.getByRole('listitem').filter({ hasText: 'Clean the Bathroom' }).getByLabel('Toggle Todo').check();
  await page.getByRole('checkbox', { name: 'Toggle Todo' }).check();
  await page.getByRole('link', { name: 'All' }).click();
  await page.getByText('Do the Dishes').click();
  await page.getByText('Clean the Bathroom').click();
  await page.getByText('Do the Laundry').click();
  await page.getByRole('button', { name: 'Clear completed' }).click();
  // Validate All Tasks Cleared

  await page.getByRole('textbox', { name: 'What needs to be done?' }).click();

  await page.getByRole('heading', { name: 'todos' })
})