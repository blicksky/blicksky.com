const getProxiedProperty = (getValue) =>
    new Proxy({}, { get: (object, property) => getValue(property) });

const AWS = getProxiedProperty((awsProductName) =>
    getProxiedProperty((dataTypeName) => (properties) => ({
        Type: ['AWS', awsProductName, dataTypeName].join('::'),
        Properties: properties
    }))
);

const Ref = (logicalName) => ({ Ref: logicalName });

const Fn = [
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
].reduce(
    (functionsByName, name) => ({
        ...functionsByName,
        [name]: (parameters) => ({
            [`Fn::${name}`]: parameters
        })
    }),
    {}
);

module.exports = {
    AWS,
    Ref,
    Fn
};
