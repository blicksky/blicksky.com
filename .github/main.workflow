workflow "Deploy" {
  on = "push"
  resolves = ["Deploy CloudFormation Stack"]
}

action "Deploy CloudFormation Stack" {
  uses = "actions/aws/cli@8d31870"
  args = "cloudformation deploy --stack-name \"blicksky-com-DNS\" --template-file \"cloudformation/stack.yaml\" --no-execute-changeset"
}
