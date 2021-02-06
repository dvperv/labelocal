module.exports = {
    fileIndex(path){
        // const prefix = (
        //     path.slice(0, hPath.length) == hPath ? 'H' : (
        //     path.slice(0, lPath.length) == lPath ? 'L' : 'ERR'
        //     ));
        // console.log("Prefix %s", prefix);
        return path;//prefix + '-' + name;
    }
}
