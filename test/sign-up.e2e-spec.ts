import { expect, test } from '@playwright/test'

test('sign up successfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Establishment name').fill('Pizza Shop')
  await page.getByLabel('Your name').fill('John Doe')
  await page.getByLabel('Your email').fill('johndoe@example.com')
  await page.getByLabel('Your phone').fill('123124124123')

  await page.getByRole('button', { name: 'Complete sign up' }).click()

  const toast = page.getByText('Restaurant registered succesfully.')
  expect(toast).toBeVisible()
})

test('sign up with error', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Establishment name').fill('Invalid name')
  await page.getByLabel('Your name').fill('John Doe')
  await page.getByLabel('Your email').fill('johndoe@example.com')
  await page.getByLabel('Your phone').fill('123124124123')

  await page.getByRole('button', { name: 'Complete sign up' }).click()

  const toast = page.getByText('Error registering restaurant.')
  expect(toast).toBeVisible()
})

test('navigate to new restaurant page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Log in' }).click()

  expect(page.url()).toContain('/sign-in')
})
