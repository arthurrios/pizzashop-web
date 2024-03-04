import { expect, test } from '@playwright/test'

test('sign in successful', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByLabel('Your email').fill('johndoe@example.com')
  await page.getByRole('button', { name: 'Access panel' }).click()

  const toast = page.getByText('We sent an auth link to your email.')
  expect(toast).toBeVisible()
})

test('sign in with wrong credentials', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByLabel('Your email').fill('wrong@example.com')
  await page.getByRole('button', { name: 'Access panel' }).click()

  const toast = page.getByText('Invalid credentials.')
  expect(toast).toBeVisible()
})

test('navigate to new restaurant page', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'New establishment' }).click()

  expect(page.url()).toContain('/sign-up')
})
