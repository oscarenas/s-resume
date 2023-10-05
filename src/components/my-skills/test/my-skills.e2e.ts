import { newE2EPage } from '@stencil/core/testing';

describe('my-skills', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-skills></my-skills>');

    const element = await page.find('my-skills');
    expect(element).toHaveClass('hydrated');
  });
});
