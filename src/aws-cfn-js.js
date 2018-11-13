const buildHandler = (typeParts) => ({
    get: (object, property) =>
        new Proxy(Function, buildHandler([...typeParts, property])),

    apply: (target, thisArg, [properties, attributes]) => ({
        Type: typeParts.join('::'),
        ...attributes,
        Properties: properties
    })
});

const AWS = new Proxy(Function, buildHandler(['AWS']));

const Ref = (logicalName) => ({ Ref: logicalName });

const Fn = {};

[
    'Base64',
    'Cidr',
    'FindInMap',
    'GetAtt',
    'GetAZs',
    'ImportValue',
    'Join',
    'Select',
    'Split',
    'Sub',
    'Transform',
    'And',
    'Equals',
    'If',
    'Not',
    'Or'
].forEach((functionName) => {
    Fn[functionName] = (params) => ({
        [`Fn::${functionName}`]: params
    });
});

module.exports = {
    AWS,
    Ref,
    Fn
};
