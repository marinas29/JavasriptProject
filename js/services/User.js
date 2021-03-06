APP.Services.User = (function() {
    var user = null

    var getAll = function() {

        return $.ajax({
        	url: "https://api.github.com/users"
        	// url: APP.Sources.users
        })

    //    console.log(promise);
    }

    var getUser = function(name) {

        return $.ajax({
            url: "https://api.github.com/users/" + name
        })
        .then(function(result) {
            user = result
            return result
        })
    }

    var getRepos = function() {
        return $.ajax({
            url: "https://api.github.com/users/" + user.login + '/repos'
        })
    }

    var getInfoRepos = function(nameRepo) {
        return $.ajax({
            url: "https://api.github.com/repos/" + user.login + '/' + nameRepo
        })
    }

    return {
        getAll: getAll,
        getUser: getUser,
        getRepos: getRepos,
        getInfoRepos: getInfoRepos
    }


})()

console.log(APP);
