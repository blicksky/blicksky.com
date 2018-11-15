const { AWS, Ref, Fn } = require('../src/aws-cfn-js.js');

describe('aws-cfn-js', () => {
    it('AWS builds a JSON CloudFormation template', () => {
        const resource = {
            ...AWS.Any.Thing({
                SomeProperty: 'some property value'
            }),
            SomeAttribute: 'some attribute value'
        };

        expect(resource).toEqual({
            Type: 'AWS::Any::Thing',
            SomeAttribute: 'some attribute value',
            Properties: {
                SomeProperty: 'some property value'
            }
        });
    });

    it('Ref builds a reference', () => {
        expect(Ref('something')).toEqual({ Ref: 'something' });
    });

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
        'Transform'
    ].forEach((functionName) => {
        it(`Fn.${functionName} builds a call to the Fn::${functionName} intrinsic function`, () => {
            expect(Fn[functionName]('any params')).toEqual({
                [`Fn::${functionName}`]: 'any params'
            });
        });
    });

    ['And', 'Equals', 'If', 'Not', 'Or'].forEach((functionName) => {
        it(`Fn.${functionName} builds a call to the Fn::${functionName} intrinsic condition function`, () => {
            expect(Fn[functionName]('any params')).toEqual({
                [`Fn::${functionName}`]: 'any params'
            });
        });
    });
});
