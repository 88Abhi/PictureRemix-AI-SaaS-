// /** @type {import('next').NextConfig} */
// images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'res.cloudinary.com',
//         port: ''
//       }
//     ]
//   }

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          port: ''
        }
      ]
    }
  };
  
  export default nextConfig;