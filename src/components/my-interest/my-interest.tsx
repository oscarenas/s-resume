import { Component, Prop, h } from '@stencil/core';
import { Interest } from '../../interfaces/type';

@Component({
  tag: 'my-interest',
  styleUrl: 'my-interest.css',
  shadow: true,
})
export class MyInterest {
  @Prop() interest: Interest[];

  render() {
    return (
      <section class="mx-5 mb-12" role="region" aria-label="Interests" id="interest">
        <div class="flex flex-col md:flex-row" role="complementary">
          <div class="basis-full md:basis-1/4 lg:1/3">
            <h3 class="inline-flex flex-row text-xl font-semibold md:flex-col md:border-b-4 md:border-gray-700 md:pb-3 mb-1">
              <span class="mr-2">Interests</span>
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

            <div class="grid grid-cols-3 md:grid-cols-4 grid-flow-row gap-4">
              {this.interest?.map((item, index) => (
                <div key={index} class="flex flex-col items-center justify-center" role="contentinfo" aria-label={item.name}>
                  <div class="bg-amber-300 rounded-full p-4">
                    <div class="">
                      <img src={item.icon} width="64" height="64" alt={item.name} class="2xl:h-16 2xl:w-16" />
                    </div>
                  </div>
                  <div class="text-center mb-9">
                    <h4 class="h5.text-base.md:text-lg.font-semibold.capitalize.text-gray-600">{item.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
