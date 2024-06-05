terraform {
  backend "s3" {
    bucket         = "eat-and-split-terraform-state-bucket"
    key            = "my-app/terraform.tfstate"
    region         = "us-east-1"  # specify your AWS region
    encrypt        = true
  }
}
