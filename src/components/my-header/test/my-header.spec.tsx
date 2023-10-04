import { newSpecPage } from '@stencil/core/testing';
import { MyHeader } from '../my-header';

describe('my-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyHeader],
      html: `<my-header></my-header>`,
    });
    expect(page.root).toEqualHtml(`
      <my-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-header>
    `);
  });
});
