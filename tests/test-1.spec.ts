import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.eviltester.com/');

  await page.getByRole('link', { name: 'Tools' }).click();

  await page.getByRole('link', {
    name: 'Test Pages Practice App for',
  }).click();

  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('link', {
      name: 'The Test Pages Online Hosted',
    }).click(),
  ]);

  await page1.waitForLoadState('domcontentloaded');

  // Keep your remaining test steps here.
await page1.goto(
  'https://testpages.eviltester.com/pages/basics/basic-web-page/'
);

await expect(
  page1.getByRole('heading', {
    name: 'Basic Web Page',
    exact: true,
  })
).toBeVisible();
  await page1.getByText('A paragraph of text').click();
  await page1.getByText('Another paragraph of text').click();
  await page1.getByRole('button', { name: 'Click Me' }).click();

await expect(
  page1.getByRole('button', { name: 'Click Me', exact: true })
).toHaveText('Click Me');

  await expect(
  page1.getByText('You clicked the button!', { exact: true })
).toBeVisible();
  await page1.getByRole('link', { name: 'Element Attributes' }).click();
  await page1.getByRole('link', { name: 'Locator Approaches' }).click();
  await page1.getByRole('button', { name: 'name button' }).click();
  await page1.getByRole('img', { name: 'an image of a button' }).click();
  await page1.getByRole('textbox', { name: 'inputplaceholder' }).click();
  await page1.getByRole('link', { name: 'Multiple Elements' }).click();
  await page1.getByRole('heading', { name: 'Select a Role' }).click();
  await page1.getByRole('radio', { name: 'Tester' }).check();
  await page1.getByRole('button', { name: 'Submit Choice' }).click();
  await page1.getByText('Successfully submitted: tester').click();
  await page1.getByRole('link', { name: 'Input Elements' }).click();
  await page1.getByRole('link', { name: 'Basic Input Elements - Events' }).click();
  await page1.getByRole('button', { name: 'A Button' }).click();
  await page1.getByRole('checkbox', { name: 'Checkbox' }).check();
  await page1.getByRole('radio', { name: 'Radio 1' }).check();
  await page1.getByRole('radio', { name: 'Radio 2' }).check();
  await page1.getByRole('link', { name: 'Number Inputs' }).click();
  await page1.getByRole('spinbutton', { name: 'number with defaults' }).click();
  await page1.getByRole('spinbutton', { name: 'number with defaults' }).fill('25');
  await page1.getByRole('spinbutton', { name: 'number with defaults' }).click();
  await page1.getByText('value: 25').click();
  await page1.getByRole('spinbutton', { name: 'number with min, max and step' }).fill('96');
  await page1.getByRole('spinbutton', { name: 'number with min, max and step' }).click();
  await page1.getByText('value: 96').click();
  await page1.getByRole('slider', { name: 'range with defaults' }).fill('90');
  await page1.getByText('90').click();
  await page1.getByRole('slider', { name: 'range with min, max and step' }).fill('805');
  await page1.getByText('805').click();
  await page1.locator('label').filter({ hasText: 'Forms' }).click();
  await page1.locator('label').filter({ hasText: 'Forms' }).check();
  await page1.locator('#m-pagesformsbasic-inputs').click();
  await page1.getByRole('button', { name: 'A Button' }).click();
  await page1.getByRole('checkbox', { name: 'Checkbox' }).check();
  await page1.getByRole('radio', { name: 'Radio 1' }).check();
  await page1.getByText('Hidden').click();
  await page1.getByRole('button', { name: 'submit' }).click();
  await page1.getByText('checkbox on').click();
  await page1.getByText('radio').click();
  await page1.getByText('One', { exact: true }).click();
  await page1.getByText('hidden').click();
  await page1.getByText('bob').click();
  await page1.getByText('submitbutton').click();
  await page1.getByText('submit', { exact: true }).click();
  await page1.getByRole('link', { name: 'Number Inputs' }).click();
  await page1.getByRole('slider', { name: 'range' }).fill('51');
  await page1.getByRole('spinbutton', { name: 'number' }).click();
  await page1.getByRole('spinbutton', { name: 'number' }).fill('23');
  await page1.getByRole('button', { name: 'submit' }).click();
  await page1.getByText('number', { exact: true }).click();
  await page1.getByText('23').click();
  await page1.getByRole('paragraph').filter({ hasText: 'range' }).click();
  await page1.getByText('51').click();
  await page1.getByText('submitbutton').click();
  await page1.getByText('submit', { exact: true }).click();
  await page1.getByRole('link', { name: 'Text Inputs' }).click();
  await page1.getByRole('button', { name: 'Make All Fields - required' }).click();
  await page1.getByRole('textbox', { name: 'Text', exact: true }).click();
  await page1.getByRole('textbox', { name: 'Text', exact: true }).fill('ewe');
  await page1.getByRole('searchbox', { name: 'Search' }).click();
  await page1.getByRole('searchbox', { name: 'Search' }).fill('ew');

  await page1.getByRole('textbox', { name: 'Password' }).fill('Test');
  await page1.getByRole('textbox', { name: 'email url' }).click();
  await page1.getByRole('textbox', { name: 'email url' }).fill('QA@me.com');
  await page1.locator('#url-input').click();
  await page1.locator('#url-input').fill('www.QA.com');
  await page1.locator('#url-input').press('Tab');
  await page1.getByRole('textbox', { name: 'tel' }).fill('754-366-4466');
  await page1.getByRole('textbox', { name: 'None (text)' }).click();
  await page1.getByRole('textbox', { name: 'None (text)' }).fill('ewe');
  await page1.getByRole('button', { name: 'submit' }).click();
  await page1.locator('#url-input').click();
  await page1.locator('#url-input').press('ControlOrMeta+ArrowLeft');
  await page1.locator('#url-input').press('ControlOrMeta+ArrowLeft');
  await page1.locator('#url-input').press('ControlOrMeta+ArrowLeft');
  await page1.locator('#url-input').press('ControlOrMeta+Shift+ArrowLeft');
  await page1.locator('#url-input').press('ControlOrMeta+Shift+ArrowLeft');
  await page1.locator('#url-input').press('ControlOrMeta+Shift+ArrowLeft');
  await page1.locator('#url-input').fill('http://QA.com');
  await page1.getByRole('button', { name: 'submit' }).click();
  await page1.getByRole('paragraph').filter({ hasText: /^text$/ }).click();
  await page1.locator('[id="_valuetext"]').click();
  await page1.getByText('search').click();
  await page1.getByText('ew', { exact: true }).click();
  await page1.getByText('password').click();
  await page1.getByText('Test', { exact: true }).click();
  await page1.getByText('email').click();
  await page1.getByText('QA@me.com').click();
  await page1.getByText('url').click();
  await page1.getByText('http://QA.com').click();
  await page1.getByText('tel').click();
  await page1.getByText('-366-4466').click();
  await page1.getByText('text-default').click();
  await page1.locator('[id="_valuetext-default"]').click();
  await page1.getByText('submitbutton').click();
  await page1.getByText('submit', { exact: true }).click();
});