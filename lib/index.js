const spawn = require('child_process').spawn;

function gitcup() {
	var bin = spawn("git", ["commit", "-m", "\"Updated\""]);

    bin.stdout.on('data', (data) => {
      console.log(`${data}`)
    });

    bin.stderr.on('data', (data) => {
      console.log(`${data}`)
    });
}

module.exports = gitcup;
