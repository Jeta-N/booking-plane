/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'vxyrkgehjbdmfdtmroyy.supabase.co',
            }
        ]
    }
};

export default nextConfig;
