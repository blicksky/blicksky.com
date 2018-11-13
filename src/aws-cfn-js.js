const buildHandler = (typeParts) => ({
    get: (object, property) => new Proxy(Function, buildHandler([...typeParts, property])),
    
    apply: (target, thisArg, [properties, attributes]) => ({
        Type: typeParts.join('::'),
        ...attributes,
        Properties: properties
    })
});

const AWS = new Proxy(Function, buildHandler(['AWS']));

module.exports = {
    AWS
};
