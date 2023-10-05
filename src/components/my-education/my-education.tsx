import { Component, Host, Prop, h } from '@stencil/core';
import { School } from '../../interfaces/type';

@Component({
  tag: 'my-education',
  styleUrl: 'my-education.css',
  shadow: true,
})
export class MyEducation {
  @Prop() school: School[];

  render() {
    return (
      <Host>
        <section class="mx-5 mb-12" role="region" aria-label="Education" id="education">
          <div class="flex flex-col md:flex-row">
            <div class="basis-full md:basis-1/4 lg:1/3">
              <h3 class="inline-flex flex-row text-xl font-semibold md:flex-col md:border-b-4 md:border-gray-700 md:pb-3 mb-1 section-title">
                <span class="mr-2">Education</span>
              </h3>
            </div>
            <div class="basis-full" role="complementary">
              <div class="flex flex-row">
                <div class="basis-1/3">
                  <div class="border-t-4 border-gray-600 h-12"></div>
                </div>
                <div class="basis-full">
                  <div class="border-t-4 border-amber-400 h-12"></div>
                </div>
              </div>
              {this.school?.map((item, index) => (
                <my-education-item key={index}>
                  <span slot="startDate">{item.startDate}</span>
                  <span slot="endDate">{item.endDate}</span>
                  <span slot="institution">{item.institution}</span>
                  <span slot="studyType">{item.studyType}</span>
                </my-education-item>
              ))}
            </div>
          </div>
        </section>
      </Host>
    );
  }
}
