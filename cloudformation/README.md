# Deploying the stack
```
aws cloudformation deploy --stack-name "blicksky-com-DNS" --template-file "stack.yaml" --no-execute-changeset
```

# Comparing DNS
```
diff <(sort -u <(dig +nottlid +noall +answer @ns-945.awsdns-54.net blicksky.com ANY) ) <(sort -u <(dig +nottlid +noall +answer @ns-cloud-e1.googledomains.com blicksky.com ANY) )
```
