export const updateObjectInArray = (items, itemId, objPropName, newObjectProps) => {
    return items.map(u => {
        if (u[objPropName] === itemId) {
            return {...u, ...newObjectProps}
        }
        return u;
    })
}
export const maxInArray = (items, propName, newObjProp) => {
    let idMax = [];
    let max = 0;
    for (let key of items){
        if (key[propName]===max){
            idMax.push(key);
        }
        if (key[propName]>max){
            max = key[propName];
            idMax = [];
            idMax.push(key);
        }

        debugger;
    }
    return idMax
}