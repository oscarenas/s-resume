import { Component, Prop, h } from '@stencil/core';
import { Profile } from '../../interfaces/type';

@Component({
  tag: 'my-footer',
  styleUrl: 'my-footer.css',
  shadow: true,
})
export class MyFooter {
  @Prop() email: string;
  @Prop() phone: string;
  @Prop() name: string;
  @Prop() github: Profile;
  @Prop() linkedin: Profile;

  render() {
    return (
      <footer class="mx-5 mb-6 border-t-2 border-gray-300 border-dotted" aria-label="footer">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 place-content-start md:place-content-center text-sm lg:text-lg font-semibold mt-6 ">
          <div class="flex flex-row mx-auto justify-center items-center " role="contentinfo" aria-label="Phone">
            <img src="https://resume-oscarenas.web.app/icons/phone.svg" width={24} height={24} alt="Picture of the author" class="2xl:h-16 2xl:w-16" />
            <div class=" ml-1 phone">
              <a href={`tel:${this.phone}`} title={`📞 ${this.phone}`}>
                {this.phone}
              </a>
            </div>
          </div>

          <div class="flex flex-row mx-auto justify-center items-center" role="contentinfo" aria-label="Linkedin">
            <img src="https://resume-oscarenas.web.app/logos/linkedin.png" width={24} height={24} alt="Phone" class="2xl:h-16 2xl:w-16" />
            <div class=" ml-1">
              <a href={this.linkedin?.url} target="_blank" rel="noopener noreferrer">
                {this.linkedin?.username}
              </a>
            </div>
          </div>

          <div class="flex flex-row mx-auto justify-center items-center" role="contentinfo" aria-label="GitHub">
            <img src="https://resume-oscarenas.web.app/logos/github.png" width={24} height={24} alt="Picture of the author" class="2xl:h-16 2xl:w-16" />
            <div class=" ml-1">
              <a href={this.github?.url} target="_blank" rel="noopener noreferrer">
                {this.github?.username}
              </a>
            </div>
          </div>

          <div class="flex flex-row mx-auto md:justify-center items-center" role="contentinfo" aria-label="email">
            <img src="https://resume-oscarenas.web.app/icons/mail.svg" width={24} height={24} alt="Picture of the author" class="2xl:h-16 2xl:w-16" />
            <div class=" ml-1">
              <a href={'mailto:' + this.email}>{this.email}</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
