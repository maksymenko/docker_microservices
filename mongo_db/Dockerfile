FROM mongo:3.2

MAINTAINER sergey.maksymenko@gmail.com

RUN mkdir -p /mongo_data/db && chown -R mongodb:mongodb /mongo_data/db
RUN echo "folder /mongo_data/db  created"
RUN mkdir -p /scripts && chown -R mongodb:mongodb /scripts

ADD init.sh /scripts/init.sh


EXPOSE 27017 28017


ENTRYPOINT ["/bin/bash", "-c"]

CMD ["/scripts/init.sh"]