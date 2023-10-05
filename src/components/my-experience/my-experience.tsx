import { Component, Prop, h } from '@stencil/core';
import { Work } from '../../interfaces/type';

@Component({
  tag: 'my-experience',
  styleUrl: 'my-experience.css',
  shadow: true,
})
export class MyExperience {
  @Prop() work: Work[];
  render() {
    return (
      <section class="mx-5 mb-12" aria-label="Work Experience" id="work">
        <div class="flex flex-col md:flex-row" role="complementary">
          <div class="basis-full md:basis-1/4 lg:1/3">
            <h3 class="inline-flex flex-row text-xl font-semibold md:flex-col md:border-b-4 md:border-gray-700 md:pb-3 mb-1 section-title">
              <span class="mr-2">Work</span>
              <span>Experience</span>
            </h3>
          </div>

          <div class="basis-full">
            {/* BORDER DIVIDER */}
            <div class="flex flex-row">
              <div class="basis-1/3">
                <div class="border-t-4 border-gray-600 h-12"></div>
              </div>
              <div class="basis-full">
                <div class="border-t-4 border-amber-400 h-12"></div>
              </div>
            </div>

            {/* {listWorkItems} */}
            {this.work?.map((item, index) => (
              <my-experience-item key={index} item={item}></my-experience-item>
            ))}
          </div>
        </div>
      </section>
    );
  }
}
