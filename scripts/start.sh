aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin 849857290067.dkr.ecr.ap-south-1.amazonaws.com

docker run -p 3000:3000 --name express-pipeline 849857290067.dkr.ecr.ap-south-1.amazonaws.com/express-pipeline:52
