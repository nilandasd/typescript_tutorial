data "aws_iam_policy_document" "build_project_assume_role" {
  statement {
    effect = "Allow"

    principals {
      type        = "Service"
      identifiers = ["codebuild.amazonaws.com"]
    }

    actions = ["sts:AssumeRole"]
  }
}

resource "aws_iam_role" "build_project_role" {
  name               = "build_project_role"
  assume_role_policy = data.aws_iam_policy_document.build_project_assume_role.json
}

data "aws_iam_policy_document" "build_project_policy_document" {
  statement {
    effect = "Allow"

    actions = [
      "logs:CreateLogGroup",
      "logs:CreateLogStream",
      "logs:PutLogEvents",
    ]

    resources = ["*"]
  }

  statement {
    effect = "Allow"
    sid = "SSOCodebuildAllow"

    actions = [
      "s3:*",
      "kms:*",
      "ssm:*",
    ]

    resources = [
      "*",
    ]
  }
}

resource "aws_iam_role_policy" "build_project_policy" {
  role   = aws_iam_role.build_project_role.name
  policy = data.aws_iam_policy_document.build_project_policy_document.json
}

resource "aws_codebuild_project" "project-with-cache" {
  name           = "test-project-cache"
  description    = "test_codebuild_project_cache"
  service_role = aws_iam_role.build_project_role.arn

  artifacts {
    type = "CODEPIPELINE"
  }

  environment {
    compute_type                = "BUILD_GENERAL1_SMALL"
    image                       = "aws/codebuild/amazonlinux2-x86_64-standard:4.0"
    type                        = "LINUX_CONTAINER"
  }

  source {
    type            = "CODEPIPELINE"
    buildspec       = "terraform/buildspec-plan.yml"
  }
}
