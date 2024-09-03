/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/laliguras', // Replace with your GitHub repository name
    assetPrefix: '/laliguras/', // Replace with your GitHub repository name
    trailingSlash: true, // Optional: Ensures that URLs end with a slash
    output: 'export', // Set output to export to enable static export
    distDir: 'out' // Output directory for static files
  };
  
  export default nextConfig;
  