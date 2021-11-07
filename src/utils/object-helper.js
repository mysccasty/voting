export const updateObjectInArray = (items, itemId, objPropName, newObjectProps, objProp, func) => {
    return items.map(u => {
        if (u[objPropName] === itemId) {
            return {...u, ...newObjectProps, [objProp]: func(u[objProp])}
        }
        return u;
    })
}