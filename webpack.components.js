const glob = require('glob');
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

const list = {};

async function makeList(dirPash, list) {
    const files = glob.sync(`${dirPash}/**/index.js`)
    for (let file of files) {
        const component = file.split(/[/./]/)[2]
        list[component] = `./${file}`;
    }
}

makeList('components/lib', list)

module.exports = {
    entry: list,
    mode:'development',
    output: {
        filename: '[name].umd.js',
        path: path.resolve(__dirname,'dist'),
        library: 'mui',
        libraryTarget: 'umd'
    },
    plugins:[
        new VueLoaderPlugin(),
    ],
    module:{
        rules:[
            {
                test:/\.vue$/,
                use:[
                    {
                        loader:'vue-loader',
                    }
                ]
            }
        ]
    }
};