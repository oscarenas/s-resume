import { Component, Prop, h } from '@stencil/core';
import { LocationInfo } from '../../interfaces/type';

@Component({
  tag: 'my-profile',
  styleUrl: 'my-profile.css',
  shadow: true,
})
export class MyProfile {
  @Prop() summary: string;
  @Prop() image: string;
  @Prop() location: LocationInfo;
  @Prop() name: string;

  render() {
    return (
      <section class="mx-5 xl:mx-10 -mt-5 mb-12" role="region" aria-label="Profile" id="profile">
        <div class="flex flex-col md:flex-row" role="complementary">
          <div class="basis-full md:basis-1/3" role="contentinfo" aria-label="Location">
            {/* ADDRESS */}
            <div class="flex flex-row align-top mb-6">
              <div class="border-b-2 border-gray-700 pb-2 pt-1 mr-4  md:hidden lg:hidden xl:hidden 2xl:hidden">
                <img src="https://resume-oscarenas.web.app/icons/location.svg" alt="Location Icon" />
              </div>
              <div>
                <div>
                  <div class="flex flex-row align-top">
                    <div class="md:border-b-4 md:border-gray-700 md:mb-3">
                      <h3 class="text-lg font-bold 2xl:text-3xl section-title">location</h3>
                    </div>
                  </div>
                  <div>
                    <p class=" text-base text-gray-700  2xl:text-3xl section-subtitle">
                      {this.location?.city}, {this.location?.country}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PROFILE */}
          <div class="basis-full md:basis-full" role="contentinfo" aria-label="Profile">
            <div class="relative mb-3 -z-10">
              <div class="bg-amber-400 w-32 mt-2 -z-10 h-3 absolute left-1/3 md:left-0"></div>
              <h3 class=" text-xl font-bold  2xl:text-3xl ml-3 text-center md:text-left section-title">Profile</h3>
            </div>

            {/* AVATAR - BIO */}
            <div class="flex flex-col lg:flex-row justify-start items-center">
              <div class="basis-full md:basis-1/4">
                <div class="h-52 lg:h-40 lg:mx-5">
                  <img src="https://resume-oscarenas.web.app/avatar.png" alt="Avatar" class="rounded-full" />
                  <div class="avatar-hide"></div>
                </div>
              </div>
              <div class="basis-full md:basis-full mt-6">
                <p class=" text-lg leading-8 summary-text" aria-label="Bio">
                  {this.summary}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
