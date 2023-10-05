import { newSpecPage } from '@stencil/core/testing';
import { MyExperienceItem } from '../my-experience-item';

describe('my-experience-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyExperienceItem],
      html: `<my-experience-item></my-experience-item>`,
    });
    expect(page.root).toEqualHtml(`
      <my-experience-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-experience-item>
    `);
  });
});
