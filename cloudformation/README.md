# Creating the stack
```
aws cloudformation create-stack --stack-name "blicksky-com-DNS" --template-body "file://stack.yaml"
```

# Updating the stack
```
aws cloudformation update-stack --stack-name "blicksky-com-DNS" --template-body "file://stack.yaml"
```