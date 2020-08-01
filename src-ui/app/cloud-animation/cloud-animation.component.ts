import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import * as _ from 'lodash';
import { CloudSVGs } from '../constants';
import { gsap, Sine } from 'gsap';
import { BuildHostsForHomePage, BuildAppsForHomePage, GetHostIdentifier, GetRelationships } from '../builder';

function tweenProperty(target, prop, min, max) {
    return gsap.to(target, random(8, 10), {
        [prop]: random(min, max),
        ease: Sine.easeInOut,
        onComplete: tweenProperty,
        onCompleteParams: [target, prop, min, max],
    });
}
function random(min, max) {
    if (max == null) { max = min; min = 0; }
    return Math.random() * (max - min) + min;
}

declare var LeaderLine: any;

@Component({
    selector: 'app-cloud-animation',
    templateUrl: './cloud-animation.component.html',
    styleUrls: ['./cloud-animation.component.scss']
})
export class CloudAnimationComponent implements OnInit, OnDestroy {
    params = {
        'apps': [
            'com.facebook.katana',
            'com.google.android.talk',
            'com.twitter.android',
            'com.zhiliaoapp.musically',
        ]
    };
    services = [];
    apps = [];
    minWidth = 150;
    minHeight = 150;
    relationships = [];
    linesDrawn = [];
    activeRelationships = [];
    activeType = null;
    constructor(
        private dataService: DataService,
    ) { }
    ngOnInit() {
        this.dataService.getBaseRelationships(this.params, 0, 100).subscribe((data: any) => {
            (data as Array<any>).forEach((rel: any) => {
                rel.appIdentifier = rel.app;
                rel.hostIdentifier = GetHostIdentifier(rel.hostinfo);
            });
            this.services = BuildHostsForHomePage(data);
            this.apps = BuildAppsForHomePage(data);
            this.relationships = data;
            setTimeout(() => {
                this.paintConnections();
                setTimeout(() => {
                    this.onAppClick(this.apps[0]);
                });
            });
        });
    }
    ngOnDestroy() {
        this.linesDrawn.forEach(obj => obj.line.remove());
    }
    onAppMouseEnter(app) {
        console.log('app', app);
    }
    onHostMouseEnter(host) {
        console.log('host', host);
    }
    onHostClick(host) {
        this.activeType = null;
        this.activeRelationships = [];
        host.active = !host.active;
        if (!host.active) {
            this.deactivateApps();
            this.resetLines();
        } else {
            this.activeType = 'host';
            this.activateApps(host.appIds);
            this.activateLines(host.hostIdentifier);
            console.log(host);
            this.activeRelationships =  GetRelationships(this.relationships.filter(rel => rel.hostIdentifier === host.hostIdentifier));
        }
        this.services.forEach((service: any) => {
            service.active = service.hostIdentifier !== host.hostIdentifier ? false : service.active;
        });
    }
    onAppClick(app) {
        this.activeType = null;
        this.activeRelationships = [];
        app.active = !app.active;
        if (!app.active) {
            this.deactivateHosts();
            this.resetLines();
        } else {
            this.activeType = 'app';
            this.activateHosts(app.hostIds);
            this.activateLines(null, app.app);
            this.activeRelationships =  GetRelationships(this.relationships.filter(rel => rel.app === app.app));
        }
        this.apps.forEach((_app: any) => {
            _app.active = _app.app !== app.app ? false : _app.active;
        });
    }
    activateHosts(hostIds) {
        this.services.forEach((host: any) => {
            host.active = _.includes(hostIds, host.hostIdentifier) ? true : false;
        });
    }
    activateApps(appIds) {
        this.apps.forEach((app: any) => {
            app.active = _.includes(appIds, app.app) ? true : false;
        });
    }
    deactivateApps() {
        this.apps.forEach((app: any) => {
            app.active = false;
        });
    }
    deactivateHosts() {
        this.services.forEach((service: any) => {
            service.active = false;
        });
    }
    activateLines(hostIdentifier = null, appIdentifier = null) {
        this.linesDrawn.forEach((lineObj: any) => {
            lineObj.line.setOptions({
                dash: { animation: false, gap: 0 },
                color: '#eee',
                size: 2
            });
            if (hostIdentifier) {
                if (lineObj.host === hostIdentifier) {
                    lineObj.line.setOptions({
                        dash: { animation: true, gap: 4 },
                        color: '#3f51b5',
                        size: 2
                    });
                }
            }
            if (appIdentifier) {
                if (lineObj.app === appIdentifier) {
                    lineObj.line.setOptions({
                        dash: { animation: true, gap: 4 },
                        color: '#3f51b5',
                        size: 2
                    });
                }
            }
        });
    }
    resetLines() {
        this.linesDrawn.forEach((lineObj: any) => {
            lineObj.line.setOptions({
                dash: { animation: false, gap: 0},
                color: '#eee',
                size: 2
            });
        });
    }
    paintConnections() {
        this.relationships.forEach((rel: any, i) => {
            const _lineObj = this.linesDrawn.find(x => x.app === rel.appIdentifier && x.host === rel.hostIdentifier);
            if (!_lineObj) {
                const start = document.querySelector(`[data-app-id="${rel.appIdentifier}"] .anchor`);
                const end = document.querySelector(`[data-host-id="${rel.hostIdentifier}"] .anchor`);
                const line = new LeaderLine(start, end, {
                    dash: { animation: false, gap: 0},
                    color: '#eee',
                    size: 2
                });
                const lineObj = {
                    app: rel.appIdentifier,
                    host: rel.hostIdentifier,
                    active: false,
                    line
                };
                this.linesDrawn.push(lineObj);
            }
        });
    }
    paintSVGs() {
        const elem = document.getElementById('svg-container');
        if (elem) {
            const wrapperRect = elem.getBoundingClientRect();
            let maxHeight = 0;
            this.services.forEach((cloud, i) => {
                cloud.id = '_cloud_' + i;
                cloud.active = false;
                const cloudElemTmpl = document.createElement('template');
                cloudElemTmpl.innerHTML = _.sample(CloudSVGs);
                const cloudElem = document.createDocumentFragment();
                cloudElem.appendChild(cloudElemTmpl.content);
                const itemWrapper = document.createElement('DIV');
                itemWrapper.classList.add('cloud-item-wrapper');
                const svg = cloudElem.querySelector('svg');
                itemWrapper.setAttribute('id', cloud.id);
                if (svg) {
                    const width = this.minWidth * cloud.taxonomyIcons.length;
                    const height = this.minHeight * cloud.taxonomyIcons.length;
                    maxHeight = Math.max(maxHeight, height);
                    svg.setAttribute('width', `${width}px`);
                    svg.setAttribute('height', `${height}px`);
                    const centerOfWrapper = wrapperRect.width / 2;
                    const svgLeftPosition = centerOfWrapper - (width / 2);
                    itemWrapper.style.width = `${width}px`;
                    itemWrapper.style.height = `${height}px`;
                    itemWrapper.style.left = `${svgLeftPosition}px`;
                    itemWrapper.style.zIndex = `${i + 1}`;
                }
                elem.style.height = `${maxHeight}px`;
                itemWrapper.appendChild(cloudElem);
                const iconsData = this.getIconWrapper(cloud);
                itemWrapper.appendChild(iconsData);
                elem.appendChild(itemWrapper);
                setTimeout(() => {
                    this.tryToMove(cloud);
                });
            });
        }
    }
    getIconWrapper(cloud) {
        const elem = document.createElement('div');
        elem.classList.add('taxonomy-icons-wrapper');
        cloud.taxonomyIcons.forEach((info: any) => {
            const iconElem = document.createElement('div');
            iconElem.classList.add('taxonomy-icons');
            iconElem.innerHTML = `<i class="${info.icon}"></i>`;
            elem.appendChild(iconElem);
        });
        return elem;
    }
    tryToMove(cloud) {
        cloud.onActiveChange = () => {
            if (cloud.active) {
                (cloudElm as HTMLElement).classList.add('active');
                cloud.tweens.forEach(t => t.pause());
            } else {
                (cloudElm as HTMLElement).classList.remove('active');
                cloud.tweens.forEach(t => t.play());
            }
        };
        const cloudElm: any = document.getElementById(cloud.id);
        const svgContainer = document.getElementById('svg-container');
        const width = svgContainer.getBoundingClientRect().width;
        const height = svgContainer.getBoundingClientRect().height;
        const dx = width * 0.5;
        const dy = height * 0.20;
        cloud.tweens = [
            tweenProperty(cloudElm, 'x', -dx, dx),
            tweenProperty(cloudElm, 'y', -dy, dy)
        ];
        const g = (cloudElm as HTMLElement).querySelector('g');
        (g as SVGElement).addEventListener('click', () => {
            this.services.forEach((_cloud) => {
                if (_cloud.id === cloud.id) {
                    _cloud.active = !_cloud.active;
                } else {
                    _cloud.active = false;
                }
                cloud.onActiveChange();
            });
        });
    }
}
