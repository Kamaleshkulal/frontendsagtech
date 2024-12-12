import dotenv from 'dotenv';

// Load environment variables using dotenv
dotenv.config();

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'splashsite.my.canva.site',
            },
            {
                protocol: 'https',
                hostname: 'www.simplilearn.com',
            },
            {
                protocol: 'https',
                hostname: 'saggroup.s3.amazonaws.com', // Allow images from Amazon S3 domain
            },
        ],
        unoptimized: true,
    },
    webpack: (config, { isServer }) => {
        config.module.rules.push({
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
            type: 'asset/resource',
            generator: {
                filename: 'static/videos/[name].[hash][ext]',
            },
        });

        return config;
    },
    env: {
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
        NEXT_PUBLIC_OTHER_VAR: process.env.NEXT_PUBLIC_OTHER_VAR,
    },
    // Enable static export
    output: 'export',
};

export default nextConfig;
