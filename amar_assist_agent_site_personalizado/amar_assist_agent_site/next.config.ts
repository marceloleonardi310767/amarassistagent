/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Descomente a linha abaixo se o projeto usar o diretório "src"
  // distDir: 'out',
};

module.exports = nextConfig;
