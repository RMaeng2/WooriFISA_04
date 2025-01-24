1. 예시: docker run [OPTIONS] IMAGE [COMMAND] [ARG...]
    - `d`: 백그라운드에서 컨테이너를 실행합니다.
    - `it`: 인터랙티브 모드로 컨테이너를 실행하며 터미널 입력을 받을 수 있게 합니다.
    - `--name <name>`: 컨테이너에 이름을 지정합니다.
    - `p <host_port>:<container_port>`: 호스트의 포트(외부)를 컨테이너의 포트(내부)에 매핑합니다.
    - `v <host_dir>:<container_dir>`: 호스트 디렉토리를 컨테이너 디렉토리에 마운트합니다.
    - `-rm`: 컨테이너가 종료되면 자동으로 삭제합니다.
    - `--privileged` : Docker 컨테이너를 호스트 시스템과 거의 동일한 수준의 권한으로 실행할 때 사용합니다.

docker run --name ng2 -p 8080:80 public.ecr.aws/nginx/nginx:latest

docker cp C:\ITStudy\05_docker\nginx_bm\. ng2:/usr/share/nginx/html/

$docker commit ng2 yeonjiserver
docker run -p 8081:80 yeonjiserver
docker tag yeonjiserver <DockerHubUserName>/my_nginx:1
docker push  <DockerHubUserName>/my_nginx:1.0
도커허브id(레지스트리)/my_nginx(레퍼지토리):v1(버전)
kimyeonji3/my_nginx:1.0   -tag 

# commit 명령어로 이미지 구성
# 생성된 컨테이너를 yeonjiserver 이름의 이미지로 생성
$docker commit ngx 이름server


# 이미지 확인
$docker images
REPOSITORY        TAG       IMAGE ID       CREATED          SIZE
yeonjiserver   latest    736f50693e4b   46 minutes ago   248MB
nginx             latest    eb4a57159180   12 days ago      187MB

# Tag 적용(version 권장)
$docker tag yeonjiserver <DockerHubUserName>/yeonjiserver:1

# Tag가 적용된 이미지 확인
$docker images
REPOSITORY                          TAG       IMAGE ID       CREATED          SIZE
<DockerHubUserName>/yeonjiserver   1       736f50693e4b   48 minutes ago   248MB
yeonjiserver                     latest    736f50693e4b   48 minutes ago   248MB
nginx                               latest    eb4a57159180   12 days ago      187MB

# Docker hub에 이미지 업로드
$docker push <DockerHubUserName>/yeonjiserver:1
The push refers to repository [docker.io/<DockerHubUserName>/yeonjiserver]
fca5a08f52c5: Pushed
9e96226c58e7: Mounted from library/nginx
12a568acc014: Mounted from library/nginx
7757099e19d2: Mounted from library/nginx
bf8b62fb2f13: Mounted from library/nginx
4ca29ffc4a01: Mounted from library/nginx
a83110139647: Mounted from library/nginx
ac4d164fef90: Mounted from library/nginx
1: digest: sha256:9d6aef6a86f946705ef9da89ddb90681920a77947a2c58a09d35af3940c8f792 size: 1990



docker run --name ng2 -p 8080:80 public.ecr.aws/nginx/nginx:latest

docker cp C:\ITStudy\05_docker\nginx_bm\. ng2:/usr/share/nginx/html/

$docker commit ng2 yeonjiserver
docker run -p 8081:80 yeonjiserver
docker tag yeonjiserver <DockerHubUserName>/my_nginx:1
docker push  <DockerHubUserName>/my_nginx:1.0
도커허브id(레지스트리)/my_nginx(레퍼지토리):v1(버전)
kimyeonji3/my_nginx:1.0   -tag 


###### Dockerfile 작성 후
$ docker build -t <여러분의id>/my_nginx:2.0 .
$ docker run -p 8082:80 위에서만든 태그명 x
$ docker push  <여러분의id>/my_nginx:2.0


### -alpine으로 리눅스 경량화 후 
docker build -t kimyeonji3/my_nginx:4.0 .
docker images


###################### Dockerfile
FROM nginx:1.14-alpine
LABEL maintainer="김연지<atangi@naver.com>"

# 우리가 실행할 명령구들을 작성합니다.
COPY . /usr/share/nginx/html/

RUN echo "작업완료" 

# RUN echo '/listen 80;/listen 82;/' >> /etc/nginx/conf.d/default.conf

# 컨테이너 안에서의 노출 
EXPOSE 80

# nginx -g daemon off
# RUN과 CMD는 같은 실행 명령어입니다. 
# RUN은 빌드 과정에서 실행합니다.
# CMD는 빌드한 컨테이너가 동작할 때 실행합니다.
# CMD에 띄어쓰기 단위로 값을 전달해서 실행하라 권장됩니다.
RUN nginx -g "daemon off;"
# RUN echo "실행함"
# RUN echo "\ndaemon off;">> /etc/nginx/nginx.conf

CMD ["echo", "실행함"]
# CMD ["nginx", "-g", "daemon off;"]
