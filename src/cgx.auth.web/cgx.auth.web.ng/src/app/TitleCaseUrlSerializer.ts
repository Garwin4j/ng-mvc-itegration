import { DefaultUrlSerializer, UrlTree } from "@angular/router";

export class TitleCaseUrlSerializer extends DefaultUrlSerializer {  
    public parse(url: string): UrlTree {
        function toTitleCase(url) {
            return url.split('/')
                       .map(segment => segment ? 
                                       segment[0].toLowerCase() + segment.substr(1) : 
                                       segment)
                       .join('/');
        }
        return super.parse(toTitleCase(url));
    }
}