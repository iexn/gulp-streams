const source = require('vinyl-source-stream');
const stream = require('stream');
const mergeStream = require('merge-stream');
const buffer = require('gulp-buffer');

function createVinlyStream(content, filename) {
    var nodeStream = new stream.PassThrough();
    nodeStream.end(Buffer.from(content));

    return nodeStream.pipe(source(filename)).pipe(buffer());
}

function createStreamsContainer() {
    const streams = mergeStream(...arguments);

    return {
        stream : streams,
        isEmpty: streams.isEmpty.bind(streams),
        add(content, filename) {
            streams.add(createVinlyStream(content, filename));
        }
    };
}

module.exports = {
    createStreamsContainer
};
