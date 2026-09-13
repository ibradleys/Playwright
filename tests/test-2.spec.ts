import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // await page.goto('await page.goto('https://portal.onehome.com/en-US/properties?token=eyJPU04iOiJNQVIiLCJ0eXBlIjoiMSIsImNvbnRhY3RpZCI6NDA5NDQ5Nywic2V0aWQiOiIxNjM1NTg0Iiwic2V0a2V5IjoiOTMiLCJlbWFpbCI6ImlicmFkbGV5c0BnbWFpbC5jb20iLCJyZXNvdXJjZWlkIjowLCJhZ2VudGlkIjozNDgyNjksImlzZGVsdGEiOmZhbHNlLCJWaWV3TW9kZSI6IjEifQ==&SMS=0');
  // await page.goto('https://portal.onehome.com/en-US/properties/map?token=eyJPU04iOiJNQVIiLCJ0eXBlIjoiMSIsImNvbnRhY3RpZCI6NDA5NDQ5Nywic2V0aWQiOiIxNjM1NTg0Iiwic2V0a2V5IjoiOTMiLCJlbWFpbCI6ImlicmFkbGV5c0BnbWFpbC5jb20iLCJyZXNvdXJjZWlkIjowLCJhZ2VudGlkIjozNDgyNjksImlzZGVsdGEiOmZhbHNlLCJWaWV3TW9kZSI6IjEifQ%3D%3D&SMS=0&searchId=a3b42ad3-782a-3199-8443-519cf0d7d334');
  // await page.getByRole('group').locator('#Combined-Shape').click();
  // await page.getByLabel('65F71944-75E7-4BBD-BC45-').check();
  await page.goto('https://portal.onehome.com/en-US/properties/list?token=eyJPU04iOiJNQVIiLCJ0eXBlIjoiMSIsImNvbnRhY3RpZCI6NDA5NDQ5Nywic2V0aWQiOiIxNjM1NTg0Iiwic2V0a2V5IjoiOTMiLCJlbWFpbCI6ImlicmFkbGV5c0BnbWFpbC5jb20iLCJyZXNvdXJjZWlkIjowLCJhZ2VudGlkIjozNDgyNjksImlzZGVsdGEiOmZhbHNlLCJWaWV3TW9kZSI6IjEifQ%3D%3D&SMS=0&searchId=a3b42ad3-782a-3199-8443-519cf0d7d334');
  await page.getByText('11 Swift Creek CourtSt Peters').click();
  await page.getByText('11 Swift Creek Court St').click();
  const addressLocator = page.getByText('11 Swift Creek Court St');

const address: string = await addressLocator.innerText();
console.log(address);
  await page.locator('body').press('ControlOrMeta+c');
await page.getByRole('link', { name: 'All Listings', exact: true }).click();
await page.getByText('Cherrywood CourtSt Peters, MO 63376').click();
console.log('Current URL:', page.url());
console.log('Matches:', await addressLocator.count());



// await page.getByText('Cherrywood Court St Peters, MO 63376').click();
// await page.getByRole('link', { name: 'All Listings', exact: true }).click();
// await page.getByText('8204 Bristol Valley DriveSt').click();
// await page.getByText('8204 Bristol Valley Drive St').click();
// await page.getByRole('link', { name: 'All Listings', exact: true }).click();
// await page.getByText('37 Great Lakes DriveSt Peters').click();
// await page.getByText('37 Great Lakes Drive St').click();
// await page.getByRole('link', { name: 'All Listings', exact: true }).click();
// await page.getByText('Heald DriveO\'Fallon, MO 63368').click();
// await page.getByText('Heald Drive O\'Fallon, MO 63368').click();
// await page.getByRole('link', { name: 'All Listings', exact: true }).click();
// await page.getByText('Dusty Brook DriveO\'Fallon, MO 63366').click();
// await page.getByText('456 Dusty Brook Drive O\'').click();
// await page.getByRole('link', { name: 'All Listings', exact: true }).click();
// await page.getByText('7523 Cinnamon Teal DriveO\'').click();
// await page.getByText('7523 Cinnamon Teal Drive O\'').click();
// await page.getByRole('link', { name: 'All Listings', exact: true }).click();
// await page.getByText('Marsh AvenueBallwin, MO 63011').click();
// await page.getByText('Marsh Avenue Ballwin, MO 63011').click();
// await page.getByRole('link', { name: 'All Listings', exact: true }).click();
// await page.getByText('Cascade Lake DriveBallwin, MO 63021').click();
// await page.getByText('630 Cascade Lake Drive').click();
// await page.getByRole('link', { name: 'All Listings', exact: true }).click();
// await page.getByText('Trio DriveWentzville, MO 63385').click();
// await page.getByText('2007 Trio Drive Wentzville, MO').click();
// await page.getByRole('link', { name: 'All Listings', exact: true }).click();
// await page.getByText('29 Mill Race DriveSt Peters, MO').click();
// await page.getByText('Mill Race Drive St Peters, MO 63376').click();
// await page.getByRole('link', { name: 'All Listings', exact: true }).click();
// await page.getByText('204 Boulder Point DriveSt').click();
// await page.getByText('204 Boulder Point Drive St').click();
// await page.getByRole('link', { name: 'All Listings', exact: true }).click();
// await page.getByText('Irish SeaHigh Ridge, MO 63049').click();
// await page.getByText('Irish Sea High Ridge, MO 63049').click();
// await page.getByRole('link', { name: 'All Listings', exact: true }).click();
// await page.getByText('16 Mill Race DriveSt Peters,').click();
// await page.getByText('16 Mill Race Drive St Peters').click();
// await page.getByRole('link', { name: 'All Listings', exact: true }).click();
// await page.getByText('Peruque Estates LaneWentzville, MO 63385').click();
// await page.getByText('104 Peruque Estates Lane').click();
// await page.getByRole('link', { name: 'All Listings', exact: true }).click();
// await page.getByText('8 Ardwick DriveSt Peters, MO 63376-').click();
// await page.getByText('8 Ardwick Drive St Peters, MO 63376-').click();
// await page.getByRole('link', { name: 'All Listings', exact: true }).click();
// await page.getByText('804 Dutch Mill DriveBallwin,').click();
// await page.getByText('804 Dutch Mill Drive Ballwin').click();
// await page.getByRole('link', { name: 'All Listings', exact: true }).click();
// await page.getByText('Quiet Bend DriveWentzville, MO 63385').click();
// await page.getByText('219 Quiet Bend Drive').click();
// await page.getByRole('link', { name: 'All Listings', exact: true }).click();
// await page.getByText('Sara Beth CourtSt Peters, MO 63376').click();
// await page.getByText('Sara Beth Court St Peters, MO 63376').click();
// await page.getByRole('link', { name: 'All Listings', exact: true }).click();
// await page.getByText('Patsy LaneO\'Fallon, MO 63366').click();
// await page.getByText('Patsy Lane O\'Fallon, MO 63366').click();
// await page.getByRole('link', { name: 'All Listings', exact: true }).click();
// await page.getByText('Arborshadow CourtSt Peters, MO 63376').click();
// await page.getByText('42 Arborshadow Court St').click();
// await page.getByRole('link', { name: 'All Listings', exact: true }).click();
// await page.getByText('207 Sassafras Parc DriveO\'').click();
// await page.getByText('207 Sassafras Parc Drive O\'').click();
// await page.getByRole('link', { name: 'All Listings', exact: true }).click();
// await page.getByText('23 Crescent Woods DriveSt').click();
// await page.getByText('23 Crescent Woods Drive St').click();

//     const address1 = getByText();
    
//     ([
//       ['View sales reports', '/address/'],
//       ['View account settings', '/settings'],


// await page.getByRole('link', { name: 'All Listings', exact: true }).click();
// await page.locator('.tile-container').click();  

//     const destinations = new Map([
//       ['View sales reports', '/address/'],
//       ['View account settings', '/settings'],
  
  
      //Realtor.com Site
  // await page1.goto('https://www.realtor.com/');
  // await page1.getByRole('button', { name: 'Refresh page' }).click();
  // await page1.getByRole('button', { name: 'Refresh page' }).click();');
  // await page.goto('https://portal.onehome.com/en-US/properties/map?token=eyJPU04iOiJNQVIiLCJ0eXBlIjoiMSIsImNvbnRhY3RpZCI6NDA5NDQ5Nywic2V0aWQiOiIxNjM1NTg0Iiwic2V0a2V5IjoiOTMiLCJlbWFpbCI6ImlicmFkbGV5c0BnbWFpbC5jb20iLCJyZXNvdXJjZWlkIjowLCJhZ2VudGlkIjozNDgyNjksImlzZGVsdGEiOmZhbHNlLCJWaWV3TW9kZSI6IjEifQ%3D%3D&SMS=0&searchId=a3b42ad3-782a-3199-8443-519cf0d7d334');
  // await page.locator('svg').filter({ hasText: '65F71944-75E7-4BBD-BC45-' }).click();
  // await page.getByLabel('65F71944-75E7-4BBD-BC45-').check();
  // await page.goto('https://portal.onehome.com/en-US/properties/list?token=eyJPU04iOiJNQVIiLCJ0eXBlIjoiMSIsImNvbnRhY3RpZCI6NDA5NDQ5Nywic2V0aWQiOiIxNjM1NTg0Iiwic2V0a2V5IjoiOTMiLCJlbWFpbCI6ImlicmFkbGV5c0BnbWFpbC5jb20iLCJyZXNvdXJjZWlkIjowLCJhZ2VudGlkIjozNDgyNjksImlzZGVsdGEiOmZhbHNlLCJWaWV3TW9kZSI6IjEifQ%3D%3D&SMS=0&searchId=a3b42ad3-782a-3199-8443-519cf0d7d334');



  //hover over property link
//   const button = page.getByRole('button', { name: 'link' });

// await button.hover();

// // Wait for the hover description to appear.
// const tooltip = page.getByRole('tooltip');
// await tooltip.waitFor({ state: 'visible' });

// const description = (await tooltip.innerText()).trim();
// console.log('Button description:', description);

// // Example: choose a destination based on the description.
// const destinations = new Map([
//   ['View sales reports', '/address/'],
//   ['View account settings', '/settings'],
//);

// const destination = destinations.get(description);

// if (destination) {
//   await page.goto(new URL(destination, page.url()).href);
})