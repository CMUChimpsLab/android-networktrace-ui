"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const _ = __importStar(require("lodash"));
const constants_1 = require("./constants");
function BuildRowGroups(data, forceExpand = false) {
    const apps = _.uniqBy(data.map(x => {
        return { app: x.app, title: x.title, icon: x.icon };
    }), x => x.app);
    const groups = _.groupBy(data, 'app');
    const rowGroups = [];
    apps.forEach(item => {
        const rows = [];
        const _group = groups[item.app];
        _group.forEach(_x => {
            const relinfo = _x.relinfo;
            if (!_.isEmpty(relinfo)) {
                const info = exports.GetTaxonomyInfo(relinfo.type);
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
exports.BuildRowGroups = BuildRowGroups;
function SortRowGroups(rowGroups, activeSorterCol, activeSorterDirection) {
    rowGroups.forEach((group) => {
        group.rows.sort((a, b) => {
            if (activeSorterCol === 'what') {
                const labela = a.typeInfo && a.typeInfo.label ? a.typeInfo.label : '';
                const labelb = b.typeInfo && b.typeInfo.label ? b.typeInfo.label : '';
                return activeSorterDirection === 'ASC' ?
                    labela.localeCompare(labelb) : labelb.localeCompare(labela);
            }
            else if (activeSorterCol === 'where') {
                return activeSorterDirection === 'ASC' ?
                    a.host.localeCompare(b.host) : b.host.localeCompare(a.host);
            }
            else if (activeSorterCol === 'why') {
                const labela = a.purposeInfo && a.purposeInfo.label ? a.purposeInfo.label : '';
                const labelb = b.purposeInfo && b.purposeInfo.label ? b.purposeInfo.label : '';
                return activeSorterDirection === 'ASC' ?
                    labela.localeCompare(labelb) : labelb.localeCompare(labela);
            }
        });
    });
    return rowGroups;
}
exports.SortRowGroups = SortRowGroups;
function GetMaxCountObject(objects) {
    let maxValue = 0, maxType = null;
    for (const prop in objects) {
        if (objects[prop] > maxValue) {
            maxValue = objects[prop];
            maxType = prop;
        }
    }
    return maxType;
}
exports.GetMaxCountObject = GetMaxCountObject;
exports.GetPurposeInfo = (id, purpose = null) => {
    let firstLevel = null;
    let taxonomySplits = [];
    if (id) {
        taxonomySplits = id.split('.');
        firstLevel = constants_1.TAXONOMIES.find(x => x.name === taxonomySplits[0]);
    }
    if (firstLevel) {
        const taxonomy = firstLevel.taxonomies
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
exports.GetTaxonomyInfo = (id) => {
    const taxonomySplits = id.split('.');
    const firstLevel = constants_1.TAXONOMIES.find(x => x.name === taxonomySplits[0]);
    if (firstLevel) {
        const taxonomy = firstLevel.taxonomies
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
exports.GetMappedTaxonomies = (list) => {
    let result = [];
    list.forEach(item => {
        const taxonomySplits = item.split('.');
        const firstLevel = constants_1.TAXONOMIES.find(x => x.name === taxonomySplits[0]);
        if (firstLevel) {
            const taxonomy = firstLevel.taxonomies.find(y => y.name === taxonomySplits[1]);
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
exports.GetMappedTaxonomyPurposes = (taxonomyList, list) => {
    let purposeList = taxonomyList.map(x => x.purposes).reduce((prev, curr) => curr.concat(prev), []);
    purposeList = purposeList.filter(i => list.indexOf(i.key) !== -1);
    purposeList.forEach(x => {
        x.value = false;
    });
    purposeList = _.uniqBy(purposeList, (x) => x.key);
    return purposeList;
};
