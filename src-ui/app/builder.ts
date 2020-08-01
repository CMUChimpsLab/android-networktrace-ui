import * as _ from 'lodash';
import { TAXONOMIES, HomePageCompanies } from './constants';

export function BuildRowGroups(data: Array<any>, forceExpand = false) {
    const apps = _.uniqBy(data.map(x => {
        return { app: x.app, title: x.title, icon: x.icon };
    }), x => x.app);
    const groups = _.groupBy(data, 'app');
    const rowGroups = [];
    apps.forEach(item => {
        const rows = [];
        const _group = groups[item.app];
        (_group as Array<any>).forEach(_x => {
            const relinfo = _x.relinfo;
            if (!_.isEmpty(relinfo)) {
                const info = GetTaxonomyInfo(relinfo.type);
                const appInfo = _x.appinfo;
                rows.push({
                    app: appInfo.app,
                    title: appInfo.title ? appInfo.title : appInfo.app,
                    host: relinfo.host,
                    icon: appInfo.icon ? appInfo.icon : 'assets/playstore.png',
                    type: relinfo.type,
                    purpose: relinfo.purpose,
                    typeInfo: info,
                    purposeInfo: info.purposes.find(x => x.key === relinfo.purpose)
                });
            }
        });
        rowGroups.push({
            app: item.app,
            rows: rows,
            expanded: forceExpand
        });
    });
    return {
        groups: groups,
        rowGroups: rowGroups
    };
}

export function SortRowGroups(rowGroups, activeSorterCol, activeSorterDirection) {
    rowGroups.forEach((group: any) => {
        group.rows.sort((a, b) => {
            if (activeSorterCol === 'what') {
                const labela = a.typeInfo && a.typeInfo.label ? a.typeInfo.label : '';
                const labelb = b.typeInfo && b.typeInfo.label ? b.typeInfo.label : '';
                return activeSorterDirection === 'ASC' ?
                    labela.localeCompare(labelb) : labelb.localeCompare(labela);
            } else if (activeSorterCol === 'where') {
                return activeSorterDirection === 'ASC' ?
                    a.host.localeCompare(b.host) : b.host.localeCompare(a.host);
            } else if (activeSorterCol === 'why') {
                const labela = a.purposeInfo && a.purposeInfo.label ? a.purposeInfo.label : '';
                const labelb = b.purposeInfo && b.purposeInfo.label ? b.purposeInfo.label : '';
                return activeSorterDirection === 'ASC' ?
                    labela.localeCompare(labelb) : labelb.localeCompare(labela);
            }
        });
    });
    return rowGroups;
}

export function GetMaxCountObject(objects) {
    let maxValue = 0, maxType = null;
    for (const prop in objects) {
        if (objects[prop] > maxValue) {
            maxValue = objects[prop];
            maxType = prop;
        }
    }
    return maxType;
}
export const GetPurposeInfo = (id: string, purpose: string = null) => {
    let firstLevel = null;
    let taxonomySplits = [];
    if (id) {
        taxonomySplits = id.split('.');
        firstLevel = TAXONOMIES.find(x => x.name === taxonomySplits[0]);
    }
    if (firstLevel) {
        const taxonomy: any = firstLevel.taxonomies
            .map(y => {
                return {
                    name: y.name,
                    icon: `md-outline-icon outline-${y.icon}`,
                    label: y.label,
                    purposes: y.purposes
                };
            })
            .find(y => y.name === taxonomySplits[1]);
        if (taxonomy) {
            return taxonomy.purposes.find(p => p.key === purpose);
        }
    }
    return null;
};
export const GetTaxonomyInfo = (id: string) => {
    const taxonomySplits = id.split('.');
    const firstLevel = TAXONOMIES.find(x => x.name === taxonomySplits[0]);
    if (firstLevel) {
        const taxonomy: any = firstLevel.taxonomies
            .map(y => {
                return {
                    name: y.name,
                    icon: `md-outline-icon outline-${y.icon}`,
                    label: y.label,
                    purposes: y.purposes,
                    description: y.description
                };
            })
            .find(y => y.name === taxonomySplits[1]);
        if (taxonomy) {
            return taxonomy;
        }
    }
    return null;
};
export const GetMappedTaxonomies = (list: Array<any>) => {
    let result = [];
    list.forEach(item => {
        const taxonomySplits = item.split('.');
        const firstLevel = TAXONOMIES.find(x => x.name === taxonomySplits[0]);
        if (firstLevel) {
            const taxonomy: any = firstLevel.taxonomies.find(y => y.name === taxonomySplits[1]);
            if (taxonomy) {
                taxonomy.key = taxonomy.name;
                taxonomy.dualKey = item;
                taxonomy.value = false;
            }
            result.push(taxonomy);
        }
    });
    result = result.sort((x, y) => x.name.localeCompare(y.name));
    return result;
};
export const GetMappedTaxonomyPurposes = (taxonomyList: Array<any>, list: Array<any>) => {
    let purposeList = taxonomyList.map(x => x.purposes).reduce((prev, curr) => curr.concat(prev), []);
    purposeList = purposeList.filter(i => list.indexOf(i.key) !== -1);
    purposeList.forEach(x => {
        x.value = false;
    });
    purposeList = _.uniqBy(purposeList, (x: any) => x.key);
    return purposeList;
};


function GetCompanyWiseInfo(company, _relationships) {
    const _taxonomies = _.uniq(_relationships.map(r => r.type)).map((i: any) => GetTaxonomyInfo(i));
    const obj = {
        hostIdentifier: company.hostIdentifier,
        who_company: company.hostCompanyName,
        who_company_icon: (_relationships[0].hostinfo && _relationships[0].hostinfo.icon) ?
            _relationships[0].hostinfo.icon : 'assets/worldwide_256.png',
        appIds: _.uniq(_relationships.map(r => r.app)),
        taxonomyIcons: _taxonomies.map(i => {
            return {
                description: i.description,
                icon: i.icon,
                label: i.label
            };
        }),
        active: false
    };
    return obj;
}

export const BuildHostsForHomePage = (data) => {
    const _companies = HomePageCompanies;
    const groupedByCompanies = [];
    _companies.forEach(company => {
        const _relationships = data.filter(f => f.hostinfo.who_company === company.hostCompanyName);
        const obj = GetCompanyWiseInfo(company, _relationships);
        groupedByCompanies.push(obj);
    });
    const _otherRelationships = data.filter(f => _.includes(_companies.map(x => x.hostCompanyName), f.hostinfo.who_company) === false);
    const _otherObj = GetCompanyWiseInfo({
        hostIdentifier: 'third-party-services',
        hostCompanyName: 'Other Services'
    }, _otherRelationships);
    groupedByCompanies.push(_otherObj);
    return groupedByCompanies;
};

export const BuildAppsForHomePage = (data) => {
    const _appMaps = data.map((x: any) => {
        return {
            app: x.app,
            title: x.appinfo.title,
            icon: x.appinfo.icon ? x.appinfo.icon : 'assets/playstore.png',
            active: false,
        };
    });
    const _apps = _.uniqBy(_appMaps, (x: any) => x.app);
    _apps.forEach(app => {
        app.hostIds = _.uniq(data.filter(x => x.app === app.app).map(x => GetHostIdentifier(x.hostinfo)));
    });
    return _apps;
};

export const GetHostIdentifier = (hostinfo) => {
    const host = HomePageCompanies.find(x => x.hostCompanyName === hostinfo.who_company);
    if (host) {
        return host.hostIdentifier;
    } else {
        return 'third-party-services';
    }
};
export const GetRelationships = (relationships) => {
    return relationships.map((rel: any) => {
        const taxonomyInfo = GetTaxonomyInfo(rel.type);
        const purposeInfo = GetPurposeInfo(rel.type, rel.purpose);
        return {
            appTitle: rel.appinfo.title,
            appIcon: rel.appinfo.icon,
            hostTitle: rel.hostinfo.domain,
            taxonomyIcon: taxonomyInfo.icon,
            taxonomyLabel: taxonomyInfo.label,
            purposeLabel: purposeInfo.label
        };
    });
};
