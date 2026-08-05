ARG PYTHON_VERSION=3.12
FROM python:${PYTHON_VERSION} AS base

WORKDIR /app

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . .

ENTRYPOINT ["python", "main.py"]

ENV FLASK_ENV=development

EXPOSE 5000

CMD ["gunicorn", "--config", "gunicorn.conf.py"]