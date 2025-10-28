# Dockerfile (letakkan di root repository)
FROM node:22-slim

# buat working dir
WORKDIR /usr/src/app

# jangan salin file node_modules dari host
COPY package*.json ./

# install dependencies (npm ci lebih deterministik jika ada package-lock.json)
RUN npm ci --silent

# salin sisa source
COPY . .

# buat user non-root (opsional, lebih aman)
RUN useradd -m appuser || true
USER appuser

# expose Metro bundler port (React Native) dan port expo/web jika diperlukan
EXPOSE 8081 19000 19001 19002

# default command: jalankan Metro server
CMD ["npm", "start"]
