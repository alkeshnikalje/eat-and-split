terraform {
  backend "s3" {
    bucket         = "my-terraform-state-bucket"
    key            = "my-app/terraform.tfstate"
    region         = "us-east-2"  # specify your AWS region
    encrypt        = true
  }
}