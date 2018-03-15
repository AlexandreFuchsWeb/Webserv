module.exports = {
    attributes: {
        street: {
            type: 'string'
        },
        city: {
            type: 'string'
        },
        number: {
            type: 'integer'
        },
        zipcode: {
            type: 'string'
        },
        // Add a reference to User
        owner: {
            model: 'user'
        }
    }
};