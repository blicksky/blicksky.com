const getPropertyProxy = (getValue) =>
    new Proxy({}, { get: (target, property) => getValue(property) });

const AWS = getPropertyProxy((awsProductName) =>
    getPropertyProxy((dataTypeName) => (resourceProperties) => ({
        Type: ['AWS', awsProductName, dataTypeName].join('::'),
        Properties: resourceProperties
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
