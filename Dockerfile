# Tahap pertama: Build stage
FROM node:16-alpine AS build

# Set working directory
WORKDIR /app

# Salin file package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Salin seluruh source code ke container
COPY . .

# Salin file .env
COPY .env .env

# Build aplikasi frontend, .env akan diambil pada build time
RUN npm run build

# Tahap kedua: Run stage (Menggunakan base image yang lebih ringan)
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Salin hasil build dari tahap pertama
COPY --from=build /app/build /app/build

# Install dependencies lagi untuk runtime
COPY package*.json ./
RUN npm install --only=production --legacy-peer-deps

# Install "serve" untuk serving build React secara statis
RUN npm install -g serve

# Expose port untuk akses aplikasi
EXPOSE 3000

# Perintah untuk menjalankan aplikasi
CMD ["serve", "-s", "build", "-l", "3000"]
