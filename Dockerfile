# Usar a imagem oficial do Python 3.6
FROM python:3.6

# Definir diretório de trabalho no container
WORKDIR /usr/src/app

# Copiar todos os arquivos do projeto para dentro do container
COPY . .

# Instalar dependências do projeto
RUN pip install --no-cache-dir -r requirements.txt

# Expor a porta do bot (se necessário)
EXPOSE 8080

# Rodar o bot
CMD ["python", "bot.py"]