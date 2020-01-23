
type mappedTypes = {
  [key: string]: any;
}

// eslint-disable-next-line @typescript-eslint/no-inferrable-types
export const getDeep: any = (val: any, path: Array<string>, pathIndex: number = 0) => {
  const isObj: (obj: any) => boolean = (obj: any) => obj === Object(obj);
  const currPath = path[pathIndex];
  const valIsObj = isObj(val);
  const valIsArr = Array.isArray(val);
  // console.log('pathIndex: ', pathIndex, ' length: ', path.length, ' currPath: ', currPath);
  // console.log('main val: ', val);

  const getFromObj = (t: any, type: any) => {
    const objType = currPath[type];
    const objKeys = Object.keys(objType);
    const obj: mappedTypes = {};
    obj.type = type;
    obj.id = t.sys.id;
    obj.fields = {};
    objKeys.forEach((tC: string) => {
      if (t.fields[tC]) {
        obj.fields[tC] = t.fields[tC];
      }
    });
    return obj;
  };

  if (valIsArr && currPath) {
    const retVal = val.map((t: any) => getFromObj(t, t.sys.contentType.sys.id));
    return getDeep(retVal, path, pathIndex + 1);
  }

  if (valIsObj && isObj(currPath)) {
    const retVal = getFromObj(val, val.sys.contentType.sys.id);
    return getDeep(retVal, path, pathIndex + 1);
  }

  if (valIsObj && currPath) {
    return getDeep(val.fields[currPath], path, pathIndex + 1);
  }

  return val;
};
