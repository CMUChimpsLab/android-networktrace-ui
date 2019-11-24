import * as _ from "lodash";
import { TAXONOMIES } from "./constants";

export function BuildRowGroups(data: Array<any>, forceExpand = false) {
  const apps = _.uniqBy(
    data.map(x => {
      return { app: x.app, title: x.title, icon: x.icon };
    }),
    x => x.app
  );
  const groups = _.groupBy(data, "app");
  const rowGroups = [];
  const rowTypes = [];
  apps.forEach(item => {
    const rows = [];
    const g = groups[item.app];

    (g as Array<any>).forEach(g_data => {
      const relinfo = g_data.relinfo;
      if (!_.isEmpty(relinfo)) {
        const info = GetTaxonomyInfo(relinfo.type);
        const appInfo = g_data.appinfo;
        rows.push({
          app: appInfo.app,
          title: appInfo.title ? appInfo.title : appInfo.app,
          host: relinfo.host,
          icon: appInfo.icon ? appInfo.icon : "assets/playstore.png",
          type: relinfo.type,
          purpose: relinfo.purpose,
          typeInfo: info,
          purposeInfo: info.purposes.find(x => x.key === relinfo.purpose)
        });
        if (info != null) {
          rowTypes.push(info);
        }
      }
    });

    // const typeNames = _.uniq(_.map(rowTypes, e => e.label));
    const typeNames = _.uniqBy(
      _.map(rowTypes, function(e) {
        return { name: e.label, icon: e.icon };
      }),
      function(e) {
        return e.name;
      }
    );

    const typeMap = [];
    typeNames.forEach(type => {
      typeMap.push({
        key: type.name,
        icon: type.icon,
        rData: []
      });
    });

    _.forEach(rows, r => {
      const rInfoType = r.typeInfo.label == null ? "" : r.typeInfo.label;
      _.forEach(typeMap, t => {
        if (t.key == rInfoType) {
          t.rData.push(r);
        }
      });
    });

    console.log(typeMap);

    rowGroups.push({
      app: item.app,
      rows: rows,
      types: typeNames,
      typeMap: typeMap,
      expanded: forceExpand
    });
  });
  return {
    groups: groups,
    rowGroups: rowGroups
  };
}

// export function GroupData(rowGroups) {
//   var newGroups = [];
//   rowGroups.forEach((group: any) => {
//     var x = _.mapValues(_.groupBy(group, "typeInfo"), l =>
//       l.map(data => _.omit(data, "typeInfo"))
//     );
//     newGroups.push(x);
//   });
//   return newGroups;
// }

export function SortRowGroups(
  rowGroups,
  activeSorterCol,
  activeSorterDirection
) {
  rowGroups.forEach((group: any) => {
    group.rows.sort((a, b) => {
      const labela = a.typeInfo && a.typeInfo.label ? a.typeInfo.label : "";
      const labelb = b.typeInfo && b.typeInfo.label ? b.typeInfo.label : "";
      return activeSorterDirection === "ASC"
        ? labela.localeCompare(labelb)
        : labelb.localeCompare(labela);
      //   if (activeSorterCol === "what") {
      //     const labela = a.typeInfo && a.typeInfo.label ? a.typeInfo.label : "";
      //     const labelb = b.typeInfo && b.typeInfo.label ? b.typeInfo.label : "";
      //     return activeSorterDirection === "ASC"
      //       ? labela.localeCompare(labelb)
      //       : labelb.localeCompare(labela);
      //   } else if (activeSorterCol === "where") {
      //     return activeSorterDirection === "ASC"
      //       ? a.host.localeCompare(b.host)
      //       : b.host.localeCompare(a.host);
      //   } else if (activeSorterCol === "why") {
      //     const labela =
      //       a.purposeInfo && a.purposeInfo.label ? a.purposeInfo.label : "";
      //     const labelb =
      //       b.purposeInfo && b.purposeInfo.label ? b.purposeInfo.label : "";
      //     return activeSorterDirection === "ASC"
      //       ? labela.localeCompare(labelb)
      //       : labelb.localeCompare(labela);
      //   }
    });
  });
  return rowGroups;
}

export function GetMaxCountObject(objects) {
  let maxValue = 0,
    maxType = null;
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
    taxonomySplits = id.split(".");
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
  const taxonomySplits = id.split(".");
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
    const taxonomySplits = item.split(".");
    const firstLevel = TAXONOMIES.find(x => x.name === taxonomySplits[0]);
    if (firstLevel) {
      const taxonomy: any = firstLevel.taxonomies.find(
        y => y.name === taxonomySplits[1]
      );
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
export const GetMappedTaxonomyPurposes = (
  taxonomyList: Array<any>,
  list: Array<any>
) => {
  let purposeList = taxonomyList
    .map(x => x.purposes)
    .reduce((prev, curr) => curr.concat(prev), []);
  purposeList = purposeList.filter(i => list.indexOf(i.key) !== -1);
  purposeList.forEach(x => {
    x.value = false;
  });
  purposeList = _.uniqBy(purposeList, (x: any) => x.key);
  return purposeList;
};
