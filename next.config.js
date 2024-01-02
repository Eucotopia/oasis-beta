/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.jsdelivr.net',
                port: '',
                pathname: '/npm/**',
            },
        ],
    },
}

module.exports = nextConfig
