/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "img.fragrancex.com",
                protocol: "https",
                port: '',
                pathname: '/images/**'
            },
            {
                hostname: "cdn.fragrancenet.com",
                protocol: "https",
                port: '',
                pathname: '/images/**'
            },   
            {
                hostname: "quixess.s3.amazonaws.com",
                protocol: "https",
                port: '',
                pathname: '/images/**'
            }   
        ],
    },
};

export default nextConfig;