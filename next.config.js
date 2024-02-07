/** @type {import('next').NextConfig} */
const nextConfig = {
    poweredByHeader: false,
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.jsdelivr.net',
                port: '',
                pathname: '/npm/**',
            },
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
                port: '',
                pathname: '/photos/**',
            },
        ],
    },
}

module.exports = nextConfig
