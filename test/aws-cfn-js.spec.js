const { AWS } = require('../src/aws-cfn-js.js');

describe('aws-cfn-js', () => {

    it('builds a JSON CloudFormation template', () => {

        const bucketResource = AWS.S3.Bucket({
            BucketName: 'www.blicksky.com'
        }, {
            DeletionPolicy: 'Retain'
        });

        expect(bucketResource).toEqual({
            Type: "AWS::S3::Bucket",
            DeletionPolicy: "Retain",
            Properties: {
                BucketName: "www.blicksky.com"
            }
        });

    });

});
