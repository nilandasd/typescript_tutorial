terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.25.0"
    }
  }

  backend "s3" {
    bucket         = "ts-project-tfstate"
    key            = "state/terraform.tfstate"
    region         = "us-east-1"
    encrypt        = true
    dynamodb_table = "ts-project-lockids"
  }
}

provider "aws" {
  region = "us-east-1"
}
