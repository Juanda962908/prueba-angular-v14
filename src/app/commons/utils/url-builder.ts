import { environment } from 'src/environments/environment';
import * as urlTemplate from 'url-template';



export const urlBuilder: any = {
  services(url: string, options: Object = {}): string {
    const serverUrl = getServicesUrl(url);
    return urlTemplate.parse(serverUrl).expand(options);
  }
};

export const urlBuilderWithoutBase: any = {
  services(url: string, options: Object = {}): string {
    return urlTemplate.parse(url).expand(options);
  }
};

function getServicesUrl(url: string): string {
  return environment.api.base + url;
}
