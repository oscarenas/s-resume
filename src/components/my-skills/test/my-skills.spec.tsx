import { newSpecPage } from '@stencil/core/testing';
import { MySkills } from '../my-skills';

describe('my-skills', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MySkills],
      html: `<my-skills></my-skills>`,
    });
    expect(page.root).toEqualHtml(`
      <my-skills>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-skills>
    `);
  });
});
