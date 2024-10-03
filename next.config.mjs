/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'vxyrkgehjbdmfdtmroyy.supabase.co',
            }
        ],
        unoptimized: true
    }
};

export default nextConfig;
