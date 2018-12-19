workflow "Deploy" {
  on = "push"
  resolves = ["Deploy CloudFormation Stack 2"]
}

action "Deploy CloudFormation Stack 2" {
  uses = "actions/aws/cli@8d31870"
  args = "cloudformation deploy --stack-name \"blicksky-com-DNS\" --template-file \"cloudformation/stack.yaml\" --no-execute-changeset"
  secrets = ["AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY"]
}
