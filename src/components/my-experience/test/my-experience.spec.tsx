import { newSpecPage } from '@stencil/core/testing';
import { MyExperience } from '../my-experience';

describe('my-experience', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyExperience],
      html: `<my-experience></my-experience>`,
    });
    expect(page.root).toEqualHtml(`
      <my-experience>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-experience>
    `);
  });
});
