FROM openjdk:18-jdk-alpine

# Install necessary tools
RUN apk add --no-cache curl tar bash procps

# Downloading and installing Maven
# 1- Define a constant with the version of maven you want to install
ARG MAVEN_VERSION=3.8.6         

# 2- Define a constant with the working directory
ARG USER_HOME_DIR="/root"

# 3- Define the SHA key to validate the maven download
ARG SHA=fcb2cda9163991b12028d2480b9e60105190eda9

# 4- Define the URL where maven can be downloaded from
ARG BASE_URL=https://repo.maven.apache.org/maven2/org/apache/maven/apache-maven/${MAVEN_VERSION}

# 5- Create the directories, download maven, validate the download, install it, remove downloaded file and set links
RUN mkdir -p /usr/share/maven /usr/share/maven/ref \
  && echo "Downlaoding maven from below URL" \
  && echo ${BASE_URL}/apache-maven-${MAVEN_VERSION}-bin.tar.gz \
  && curl -fsSL -o /tmp/apache-maven.tar.gz ${BASE_URL}/apache-maven-${MAVEN_VERSION}-bin.tar.gz \
  \
  && echo "Checking download hash" \
  && echo "${SHA}  /tmp/apache-maven.tar.gz" | sha1sum -c - \
  \
  && echo "Unziping maven" \
  && tar -xzf /tmp/apache-maven.tar.gz -C /usr/share/maven --strip-components=1 \
  \
  && echo "Cleaning and setting links" \
  && rm -f /tmp/apache-maven.tar.gz \
  && ln -s /usr/share/maven/bin/mvn /usr/bin/mvn

# 6- Define environmental variables required by Maven, like Maven_Home directory and where the maven repo is located
ENV MAVEN_HOME /usr/share/maven
ENV MAVEN_CONFIG "$USER_HOME_DIR/.m2"


CMD [""]
