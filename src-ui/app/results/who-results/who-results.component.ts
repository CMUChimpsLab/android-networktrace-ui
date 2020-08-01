import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { AppService } from '../../app.service';
import * as _ from 'lodash';
import { DataService } from '../../data.service';
import { GetTaxonomyInfo, GetPurposeInfo } from '../../builder';

@Component({
    selector: 'app-who-results',
    templateUrl: './who-results.component.html',
    styleUrls: ['./who-results.component.scss']
})
export class WhoResultsComponent implements OnChanges {
    @Input() app: string;
    skip = 0;
    limit = 1000;
    whoResultGroups = [];
    constructor(
        private appService: AppService,
        private dataService: DataService,

    ) { }
    ngOnChanges() {
        if (!_.isEmpty(this.app)) {
            this.whoResultGroups = [];
            this.dataService.getAppRelationships(this.app, this.skip, this.limit).subscribe((data: any) => {
                console.log(data);
                const groupedData = _.groupBy(data, x => x.relinfo.type);
                for (const item in groupedData) {
                    if (groupedData[item]) {
                        const itemInfo = {
                            taxonomy: GetTaxonomyInfo(item),
                            relationships: (groupedData[item] as Array<any>).map(rel => {
                                return {
                                    host: rel.relinfo.host,
                                    purpose: GetPurposeInfo(item, rel.relinfo.purpose)
                                };
                            })
                        };
                        this.whoResultGroups.push(itemInfo);
                    }
                }
            });
        }
    }

}
