/**
 * Created by anasrazafirdousi on 3/18/17.
 */
import { Injectable } from '@angular/core';

@Injectable()
export class PathResolver {

    private suffix: any;

    constructor() {

        // TODO: PathResolver : Asset Suffix table should come from a config
        this.suffix = {
            image: '/../../../assets/img/',
            video: '../../../assets/video/',
            audio: '../../../assets/audio/',
            document: '../../../assets/document/'
        };
    }

    public resolvePath(assetName, assetType) {
        console.log(this);
        return this.suffix[assetType] + assetName;
    }
}
