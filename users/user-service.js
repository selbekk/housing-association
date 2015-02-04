var User = require('./user');

var userStore = [
    new User({ username: 'admin', email: 'admin@mailinator.com', phone: '92673134' }),
    new User({ username: 'selbekk', email: 'selbekk@mailinator.com', phone: '99009900' }),
    new User({ username: 'test', email: 'test@mailinator.com', phone: '91929394' }),
];

function getByUsername(username) {
    return _.find(userStore, function(user) {
        return user.username === username;
    });
}


module.exports = function() {
    this.getAll = function() {
        return userStore;
    }

    this.get = function(username) {
        return getByUsername(username);
    }

    this.create = function(user) {
        if (!user || !user.isValid()) {
            return false;
        }

        if (getByUsername(user.username)) {
            return false;
        }

        userStore.push(username);
        return user;
    }

    this.update = function(user) {
        if(!user || !user.isValid()) {
            return false;
        }

        if (!getByUsername(user.username)) {
            return false;
        }

        for (var i = 0; i < userStore.length; i++) {
            if (userStore[i].username === username) {
                userStore[i] = user;
                return user;
            }
        }
        return false;
    }

    this.delete = function(username) {
        var userToDelete = getByUsername(username);

        if (!userToDelete) {
            return false;
        }

        for (var i = 0; i < userStore.length; i++) {
            if (userStore[i].username === username) {
                delete userStore[i];
                return userToDelete;
            }
        }

        return false;
    };
};
