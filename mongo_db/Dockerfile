FROM mongo:3.2

MAINTAINER sergey.maksymenko@gmail.com

RUN mkdir -p /mongo_data/db
RUN echo "folder /mongo_data/db  created"

ADD init.sh /init.sh


CMD ["/init.sh"]