FROM node:12.0

ARG CHROME_VERSION="google-chrome-stable"
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
  && echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list \
  && apt-get update -qqy \
  && apt-get -qqy install \
    ${CHROME_VERSION:-google-chrome-stable} \
  && wget https://chromedriver.storage.googleapis.com/90.0.4430.24/chromedriver_linux64.zip \
  && unzip chromedriver_linux64.zip \
  && mv chromedriver /usr/local/bin/chromedriver \
  && rm /etc/apt/sources.list.d/google-chrome.list \
  && rm -rf /var/lib/apt/lists/* /var/cache/apt/*

RUN chmod +x /usr/local/bin/chromedriver

ENV CHROME_BIN /usr/bin/google-chrome
ENV DISPLAY :99