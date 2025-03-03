/** @type {import('next').NextConfig} */
const nextConfig = {
    // for docker lightweight
    output: 'standalone',
    //for images's error because of unassigned domain
    images: {
        domains: ['127.0.0.1',],
    },
    // for cors error with django but I don't sure about its effectness 
    async headers() {
        return [
            {
                // matching all API routes
                source: "/:path*",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
                    { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            }
        ]
    },
};
export default nextConfig;