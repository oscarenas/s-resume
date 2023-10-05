import { newSpecPage } from '@stencil/core/testing';
import { MySkillItem } from '../my-skill-item';

describe('my-skill-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MySkillItem],
      html: `<my-skill-item></my-skill-item>`,
    });
    expect(page.root).toEqualHtml(`
      <my-skill-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-skill-item>
    `);
  });
});
