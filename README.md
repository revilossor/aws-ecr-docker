build the image

```docker build -t aws-ecr-docker .```

run the image

```docker run -p 3000:3000 aws-ecr-docker```

create amazon ecr repository

```aws ecr create-repository --repository-name aws-ecr-docker```

tag image with repository uri

```docker tag aws-ecr-docker <repo uri>```

docker login with command from aws cli

```$(aws ecr get-login --no-include-email)```

push the image

```docker push <repo uri>```

delete the repo, so not charged for storage

```aws ecr delete-repository --repository-name aws-ecr-docker --force```

see http://docs.aws.amazon.com/AmazonECR/latest/userguide/docker-basics.html#docker-basics-create-image
