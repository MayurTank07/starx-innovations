/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',

    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.(glsl|vs|fs|vert|frag)$/,
            use: ['raw-loader'],
        },
        {
            test: /\.(mov|mp4|webm)$/,
            use: [ 'file-loader' ],
        })

        return config
    }
}

module.exports = nextConfig