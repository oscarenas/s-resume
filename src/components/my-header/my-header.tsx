import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-header',
  styleUrl: 'my-header.css',
  shadow: true,
})
export class MyHeader {
  @Prop() name: string = '';
  @Prop() label: string = '';
  @Prop() website: string = '';
  @Prop() email: string = '';
  @Prop() phone: string = '';

  render() {
    return (
      <header class="m-5 lg:m-10 w-auto" role="banner" aria-label="Basic Information">
        <div class="flex flex-row" aria-labelledby="Name">
          <div class="basis-full">
            <div class="ml-10 mt-7 md:ml-12 md:h-14 lg:ml-20 lg:mt-8 2xl:mt-6 lg:h-16 2xl:mb-6">
              <h1 class="text-4xl md:text-6xl lg:text-7xl 2xl:text-8xl mb-auto position-title">{this.name!}</h1>
            </div>
            <div class="h-28 w-28 md:h-36 md:w-36 lg:h-52 lg:w-52 circle-gradient  rounded-full absolute top-6 -z-10"></div>
          </div>
        </div>

        <div class="flex flex-col xl:flex-row">
          <div class="ml-10 basis-full md:ml-14 lg:basis-1/2 lg:ml-20 xl:basis-1/2">
            <h2 class="text-lg md:text-3xl lg:text-3xl xl:text-2xl 2xl:text-5xl  mb-3 position-label">{this.label}</h2>
          </div>

          <div class="basis-full mt-6 md:basis-4/6 md:mt-9 lg:mt-16 lg:basis-1/2 xl:basis-full xl:mt-4">
            <div class="divide-y divide-gray-700">
              <div class="w-auto"></div>

              <div class="flex flex-col pt-3 md:flex-row md:pt-6 lg:pt-9 header-info" role="complementary">
                <div class="basis-full md:basis-3/12 lg:basis-3/12" role="contentinfo" aria-label="Phone Number">
                  <div class="flex flex-row align-top mb-6">
                    <div class="border-b-2 border-gray-700 pb-2 pt-1 mr-4  md:hidden lg:block">
                      <a href={`tel:${this.phone}`} title={`📞 ${this.phone}`}>
                        <img src="https://resume-oscarenas.web.app/icons/phone.svg" alt="phone number" width="32" height="32" />
                      </a>
                    </div>
                    <div class="flex flex-row align-top">
                      <div>
                        <div class="flex flex-row align-top">
                          <div class="hidden md:block md:mt-2 md:mr-2  lg:hidden xl:hidden 2xl:hidden"></div>

                          <h3 class=" text-lg font-bold 2xl:text-3xl">phone</h3>
                        </div>
                        <div>
                          <p class=" text-base text-gray-600 2xl:text-3xl header-info-phone">{this.phone}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="basis-full md:basis-4/12 lg:basis-4/12" role="contentinfo" aria-label="Email">
                  <div class="flex flex-row align-top mb-6">
                    <div class="border-b-2 border-gray-700 pb-2 pt-1 mr-4  md:hidden lg:block">
                      <img src="https://resume-oscarenas.web.app/icons/mail.svg" alt="phone number" width="32" height="32" />
                    </div>
                    <div>
                      <div>
                        <div class="flex flex-row align-top">
                          <div class="hidden md:block md:mt-2 md:mr-2  lg:hidden xl:hidden 2xl:hidden"></div>

                          <div>
                            <h3 class="text-lg font-bold 2xl:text-3xl">email</h3>
                          </div>
                        </div>
                        <div>
                          <p class=" text-base text-gray-600 2xl:text-3xl">{this.email}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="basis-full md:basis-6/12 lg:basis-5/12" role="contentinfo" aria-label="website">
                  <div class="flex flex-row align-top mb-6">
                    <div class="border-b-2 border-gray-700 pb-2 pt-1 mr-4  md:hidden lg:block">
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <img src="https://resume-oscarenas.web.app/icons/website.svg" alt="phone number" width="32" height="32" />
                      </a>
                    </div>
                    <div>
                      <div>
                        <div class="flex flex-row align-top">
                          <div class="hidden md:block md:mt-2 md:mr-2  lg:hidden xl:hidden 2xl:hidden">🌐</div>

                          <div>
                            <h3 class=" text-lg font-bold  2xl:text-3xl">website</h3>
                          </div>
                        </div>
                        <div>
                          <p class=" text-base text-gray-600  2xl:text-3xl">{this.website}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
